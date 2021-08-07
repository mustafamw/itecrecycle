import React from 'react';
import './Basket.scss';
import { currencyFormat } from '../../../utils/formatCurrency';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BasketComponent extends React.Component {
  render() {
    const { index, basket, removeBasketIndex, incrementBasketByIndex, decrementBasketByIndex } = this.props;
    const { image, title, description, stock, created, quantity, price } = basket;
    const total = price * quantity;

    return(
      <div className="col-12 p-0 basket-item">
        <div className="row align-center">
          <div className="col-3 p-0">
            <img src={image} />
          </div>
          <div className="col-9 p-0">
            <div className="row">
              <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 order-1 pr-0 order-sm-1 order-md-1 order-lg-1">
                <h3>{title}</h3>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 order-2 pl-0 order-sm-2 order-md-2 order-lg-2">
                <div className="row quantity-container align-right">
                  <button className="btn btn-sm btn-secondary"
                    onClick={(e) => { decrementBasketByIndex(index) }}
                    disabled={quantity <= 1}><FontAwesomeIcon icon="minus" /></button>
                  <p className="p-0 m-0">{quantity}x</p>
                  <button className="btn btn-sm btn-secondary"
                    onClick={(e) => { incrementBasketByIndex(index) }}
                    disabled={quantity >= stock}><FontAwesomeIcon icon="plus" /></button>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 pl-0 order-4 order-sm-4 order-md-4 order-lg-3 align-right">
                <p  
                  className="p-0 m-0"
                  style={{ fontWeight: "500" }}>{currencyFormat(total)}</p>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-12 pr-0 order-3 order-sm-3 order-md-3 order-lg-4">
                <a
                  href="/" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    removeBasketIndex(index); 
                  }}><FontAwesomeIcon icon="times-circle" className="mr-1"/>Remove</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BasketComponent;
