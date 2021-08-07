import React from 'react';
import './Basket.scss';
import BasketsComponent from '../../components/baskets/Baskets';

class BasketView extends React.Component {
  render() {
    return(
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="title pt-3">Basket</h1>
            </div>  
            <BasketsComponent/>
          </div>
        </div>
      </section>
    );
  }
}

export default BasketView;