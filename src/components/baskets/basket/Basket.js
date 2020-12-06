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
            <img src={image}/>
          </div>
          <div className="col-5">
            <h3>{title}</h3>
            <a
              href="" 
              onClick={(e) => { 
                e.preventDefault(); 
                removeBasketIndex(index); 
              }}><FontAwesomeIcon icon="times-circle"/>Remove</a>
          </div>
          <div className="col-2">
            <div className="row quantity-container">
              <button className="btn btn-sm btn-secondary"
                onClick={(e) => { decrementBasketByIndex(index) }}
                disabled={quantity <= 1}>-</button>
              <p className="p-0 m-0">{quantity}x</p>
              <button className="btn btn-sm btn-secondary"
                onClick={(e) => { incrementBasketByIndex(index) }}
                disabled={quantity >= stock}>+</button>
            </div>
          </div>
          <div className="col-2 text-right">
            <p className="p-0 m-0">{currencyFormat(total)}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BasketComponent;
