import React from 'react';
import './Basket.scss';
import BasketsComponent from '../../components/baskets/Baskets';

class BasketView extends React.Component {
  render() {
    return(
      <div className="container pt-2">
        <div className="row">
          <div className="col-12">
            <h1>Basket</h1>
          </div>  
          <BasketsComponent/>
        </div>
      </div> 
    );
  }
}

export default BasketView;