import React from 'react';
import { currencyFormat } from '../../../utils/formatCurrency';

class ConfirmBookingComponent extends React.Component {
  render() {
    return (
      <div class="modal fade" id={this.props.confirmBookingId} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content rounded-0">
            <div class="modal-header">
              <h2 class="modal-title" id="exampleModalLabel">Confirm Booking?</h2>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Your total amount to pay is <b>{ currencyFormat(this.props.totalPrice) }</b>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary" onClick={() => { this.props.bookBasket() }}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmBookingComponent;