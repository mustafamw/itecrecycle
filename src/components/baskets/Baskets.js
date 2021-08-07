import React from 'react';
import './Baskets.scss';
import { connect } from 'react-redux';
import { removeBasketIndex } from '../../redux/actions/baskets/baskets';
import BasketComponent from './basket/Basket';
import BasketSummaryComponent from '../basketSummary/BasketSummary';
import { incrementBasketByIndex, decrementBasketByIndex } from '../../redux/actions/baskets/baskets';

class BasketsComponent extends React.Component {
  render() {

    const { basketsState, removeBasketIndex, incrementBasketByIndex, decrementBasketByIndex }  = this.props;

    const baskets = basketsState.baskets.map((e, index) => (
      <BasketComponent 
        basket={e} 
        key={index} 
        index={index}
        removeBasketIndex={removeBasketIndex} 
        incrementBasketByIndex={incrementBasketByIndex} 
        decrementBasketByIndex={decrementBasketByIndex} />
    ));

    const notFound = (
      <h3 className="not-found mt-3 mb-4">Not Found...</h3>
    );

    return (
      <>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
          <div className="baskets-list">
            {baskets.length > 0 ? baskets : notFound}
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 pl-lg-0 pl-xl-0">
          <BasketSummaryComponent/>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { baskets: basketsState } = state;
  return { basketsState }
}

const mapDispatchToProps = dispatch => ({
  removeBasketIndex: (index) => {
    dispatch(removeBasketIndex(index));
  },
  incrementBasketByIndex: (index) => {
    dispatch(incrementBasketByIndex(index));
  },
  decrementBasketByIndex: (index) => {
    dispatch(decrementBasketByIndex(index));
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(BasketsComponent);
