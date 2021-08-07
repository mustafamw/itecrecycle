import React from 'react';
import { currencyFormat } from '../../../utils/formatCurrency';
import './ConfirmBooking.scss';

class ConfirmBookingComponent extends React.Component {
  render() {
    return (
      <div className="confirm-booking-modal modal fade" id={this.props.confirmBookingId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">Confirm Booking?</h2>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Your total amount to pay is <b>{ currencyFormat(this.props.totalPrice) }</b>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" onClick={() => { this.props.bookBasket() }}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmBookingComponent;