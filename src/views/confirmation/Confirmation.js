import React from 'react';
import './Confirmation.scss';
import { getItem } from '../../utils/sessionStorage';

class ConfirmationView extends React.Component {
  render() {
    const { referenceNo, products, totalFormat, userDetails } = getItem('confirmation');
    const { firstName, lastName } = userDetails.customer;
    const { email } = userDetails;
    const productsFormat = products.map((e) => (
      <tr>
        <td>
          {e.title}
        </td>
        <td>
          {e.quantity}
        </td>
        <td>
          {e.priceFormat}
        </td>
        <td>
          {e.totalFormat}
        </td>
      </tr>
    ))
    return (
      <div className="container center">
        <div className="col-12 confirmation-form">
          <h1>Confirmation</h1>
          <h3><u>Reference No: <b>{referenceNo}</b></u></h3>
          <p>Thank you <b>{firstName} {lastName}</b>, we have sent an invoice to your email address: <b>{email}</b> which you should able to recieve it shorty. 
          If not please do check your junk mail.</p>
          <table class="invoice">
            <thead>
              <tr>
                <th>
                  Description
                </th>
                <th>
                  Quantity
                </th>
                <th>
                  Unit Price
                </th>
                <th>
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {productsFormat}
              <tr>
                <th class="text-align-right" colspan="3">
                  Total:
                </th>
                <td>
                  {totalFormat}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ConfirmationView;