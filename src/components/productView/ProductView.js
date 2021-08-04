import React, { useRef } from 'react';
import { connect } from 'react-redux';
import './ProductView.scss';
import { currencyFormat } from '../../utils/formatCurrency';
import moment from 'moment';
import { incrementQuantity, decrementQuantity, setProductQuantity } from '../../redux/actions/product/product';
import { addBasket, removeBasketProductId, incrementBasketByProductId, decrementBasketByProductId } from '../../redux/actions/baskets/baskets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class ProductViewComponent extends React.Component {   

  constructor(props) {
    super(props);
    this.productQuantityIsSet = React.createRef(false);
  }

  render() {
    const { productState, incrementQuantity, decrementQuantity, setProductQuantity, addBasket, removeBasketProductId, basketsState } = this.props;
    const { productId, image, title, description, stock, created, price } = productState.product;
    let { quantity } = productState.product;
    const basketProduct = basketsState.baskets.find(e => e.productId === productId) || false;
    if(productState.loaded && basketProduct && !this.productQuantityIsSet.current) {
      quantity = basketProduct.quantity;
      setProductQuantity(quantity);
      this.productQuantityIsSet.current = true;
    }
    const total = price * quantity;

    return (
      <div className="container view">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
            <img srcSet={image} alt={title} title={title} className="m-0"/>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
            <h1 className="title">
              {title}
            </h1>
            <h3>
              Description
            </h3>
            <p dangerouslySetInnerHTML={{ __html: description }}>
            </p>
            <h3>
              Date Created
            </h3>
            <p>
              {moment(created).format('DD/MM/YYYY hh:mmA')}
            </p>
            <p>
              <div className="row">
                { productState.product.stock > 0 ?
                <div className="col-3 p-0 quantity-container">
                  <h3>
                    Quantity
                  </h3>
                  <div className="input-group mb-3">
                    <button className="btn btn-sm btn-secondary"
                      onClick={(e) => { decrementQuantity(productState.product) }}
                      disabled={quantity <= 1}><FontAwesomeIcon icon="minus" /></button>
                    <h3 className="p-0 m-0">{quantity}x</h3>
                    <button className="btn btn-sm btn-secondary"
                      onClick={(e) => { incrementQuantity(productState.product) }}
                      disabled={quantity >= stock}><FontAwesomeIcon icon="plus" /></button>
                  </div>
                </div> : null }
                <div className="col-12 p-0">
                  <h3>
                    Total
                  </h3>
                  <div className="price">
                    <h3>{currencyFormat(total)}</h3>
                  </div>
                </div>
              </div>
            </p>
            <p>
              { productState.product.stock > 0 ?
                <button type="button"
                  className="btn btn-primary btn-block btn-lg rounded-0"
                  onClick={(e) => { !basketProduct ? addBasket(productState.product) : removeBasketProductId(productState.product.productId) } }>
                  { !basketProduct ? <span>Add Basket</span> : <span>Remove Basket</span> }
                </button>
                :
                <button type="button"
                  className="btn btn-secondary btn-block btn-lg rounded-0 out-of-stock"
                  disabled="true">
                  OUT OF STOCK
                </button>
              }
            </p>
          </div>
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  addBasket: (product) => dispatch(addBasket(product)),
  removeBasketProductId: (productId) => dispatch(removeBasketProductId(productId)),
  incrementQuantity: (product) => { 
    dispatch(incrementBasketByProductId(product.productId));
    dispatch(incrementQuantity());
  },
  decrementQuantity: (product) => { 
    dispatch(decrementBasketByProductId(product.productId));
    dispatch(decrementQuantity());
  },
  setProductQuantity: (quantity) => dispatch(setProductQuantity(quantity)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewComponent);