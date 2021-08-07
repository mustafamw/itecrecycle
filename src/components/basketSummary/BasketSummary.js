import React from 'react';
import { connect } from 'react-redux';
import './BasketSummary.scss';
import { currencyFormat } from '../../utils/formatCurrency';
import LoginModalComponent  from '../modals/loginModal/LoginModal';
import { bookBasket, resetBookBasket } from '../../redux/actions/baskets/baskets';
import { getCookies } from '../../utils/cookies';
import { withRouter } from "react-router-dom";
import $ from 'jquery';
import ConfirmBookingComponent from '../modals/confirmBooking/ConfirmBooking';
import { setItem } from '../../utils/sessionStorage';
import Tooltip from 'rc-tooltip';

const confirmBookingId = 'confirmBooking';

class BasketSummaryComponent extends React.Component {

  constructor(props) {
    super(props);
    this.confirmBooking = this.confirmBooking.bind(this);
    this.bookBasket = this.bookBasket.bind(this);
  }

  componentWillUnmount() {
    this.props.resetBookBasket();
  }

  confirmBooking() {
    $(`#${confirmBookingId}`).modal();
  }

  bookBasket() {
    const baskets = this.props.basketsState.baskets;
    const token = getCookies('jwt');
    this.props.bookBasket(token, { baskets });
    $(`#${confirmBookingId}`).modal('hide');
    $('body').removeClass('modal-open');
  }

  render() {

    const { basketsState, loginState } = this.props;
    const { isLoggedIn, errors } = loginState; 

    if(basketsState.loaded && basketsState.confirmation.referenceNo){
      setItem('confirmation', basketsState.confirmation);
      this.props.history.push('/confirmation');
    }

    let totalPrice = 0;
    basketsState.baskets.forEach(e => {
      totalPrice += e.price * e.quantity;
    });

    return(
      <>
        <div className="basket-summary">
          <div className="col-12 p-0">
            <div className="row">
              <div className="col-12">
                <h2>Summary</h2>
              </div>
              <div className="col-4">
                Total
              </div>
              <div className="col-8 text-right mb-2">
                <b>{ currencyFormat(totalPrice) }</b>
              </div>
              <div className="col-12">
                {
                  !isLoggedIn ? 
                  (
                    <>
                      <Tooltip placement="top" trigger={['hover']} overlay={<span>Please Signup/Login to continue booking</span>}>
                        <button
                          className="btn btn-primary btn-block btn-sm rounded-0 disabled" 
                          disabled={false}>Book It</button>
                      </Tooltip>
                      <button
                        className="btn btn-primary btn-block btn-sm rounded-0"
                        data-toggle="modal" 
                        data-target="#loginModal" 
                        >Login</button>
                    </>
                    ) : 
                    <>
                      <button
                        className="btn btn-primary btn-block btn-sm rounded-0" 
                        disabled={totalPrice <= 0}
                        onClick={this.confirmBooking}
                        data-tip
                        data-for="registerTip">Book It</button>
                    </>
                }
              </div>
            </div>
          </div>
        </div>
        <LoginModalComponent />
        <ConfirmBookingComponent
          confirmBookingId={confirmBookingId} 
          bookBasket={this.bookBasket}
          baskets={basketsState.baskets}
          totalPrice={totalPrice}
          />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { baskets: basketsState, login: loginState } = state;
  return { basketsState, loginState }
}

const mapDispatchToProps = dispatch => ({
  bookBasket: (token, basket) => dispatch(bookBasket({ Authorization: `Bearer ${token}` }, basket)),
  resetBookBasket: () => dispatch(resetBookBasket()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BasketSummaryComponent));