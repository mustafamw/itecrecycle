import React from 'react';
import { connect } from 'react-redux'
import './Products.scss';
import ProductsComponent from '../../components/products/Products';
import { getProducts, clearProducts } from '../../redux/actions/products/products';
import { isEmpty } from 'lodash';
import $ from 'jquery';
import loadingImg from '../../assets/img/icons/loading.gif';

class ProductsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 1
    }
    this.loadMore = this.loadMore.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.loadMore();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    this.props.clearProducts();
  }

  componentDidUpdate() {
    const { loaded } = this.props.productsState;
    if ((loaded && $(window).scrollTop() + $(window).height()) + 338 >= $(document).height()) {
      this.loadMore();
    }
  }

  loadMore() {
    const { pagination, loaded, loading } = this.props.productsState;
    if((!isEmpty(pagination) && this.state.pageNo > pagination.totalPages) || loading){
      return
    }
    this.props.getProducts(this.state.pageNo);
    this.setState({
      pageNo: this.state.pageNo + 1,
    })
  }

  handleScroll() {
    const { loaded } = this.props.productsState;
    if((loaded && $(window).scrollTop() + $(window).height()) + 338 >= $(document).height()) {
      this.loadMore();
    }

  }

  render() {
    const { productsState } = this.props;
    const { products, loaded, loading } = productsState;
    return (
      <div className="products">
        {
          loaded && products.length === 0 ?
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="not-found mt-3 mb-4">Results not loaded</h3>
              </div>
            </div>
          </div> : null
        }
        {
          products.length > 0 ?
          <div className="p-0">
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h1 className="title">Laptop Warehouse</h1>
                    <p className="m-0">
                    Here at Itec Recycle Laptop Warehouse we have a wide range of outstanding refurbished laptops, tablets and computers. From Top brands such as Dell, HP, Lenovo and Apple for businesses, Schools and the public. These are robust business machines, made to last longer than non-commercial laptops at affordable prices. We can post anywhere in the UK. 
                    </p>
                  </div>
                  <div className="col-12">
                    <ProductsComponent {...productsState} /> 
                  </div>
                </div>
              </div>
            </section>
          </div >
          : null
        }
        { 
          loading ? 
          <center><img src={loadingImg} alt="loading" className="loading" /></center> : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { products: productsState } = state;
  return { productsState }
}

const mapDispatchToProps = dispatch => ({
  getProducts: (pageNo) => dispatch(getProducts(pageNo)),
  clearProducts: () => dispatch(clearProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView);
