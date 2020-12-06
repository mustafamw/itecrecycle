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

  loadMore() {
    const { pagination, loading } = this.props.productsState;
    if((!isEmpty(pagination) && this.state.pageNo > pagination.totalPages) || loading){
      return
    }
    this.props.getProducts(this.state.pageNo);
    this.setState({
      pageNo: this.state.pageNo + 1,
    })
  }

  handleScroll() {
    if($(window).scrollTop() + $(window).height() === $(document).height()) {
      this.loadMore();
    }
  }

  render() {
    const { productsState } = this.props;
    const { errors, loaded, loading } = productsState;
    return (
      <div className="products">
        {
          loaded && !isEmpty(errors) ?
            <div className="col-12"> 
              Results not loaded
            </div> : null
        }
        {
          loaded && isEmpty(errors) ?
          <>
            <ProductsComponent {...productsState} /> 
          </>
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
