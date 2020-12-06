import React from 'react';
import './ForgotPassword.scss';
import ForgotPasswordComponent from '../../components/forgotPassword/ForgotPassword';

class ForgotPaswordView extends React.Component {
  render() {
    return(
      <div className="container">
        <ForgotPasswordComponent />
      </div> 
    );
  }
}

export default ForgotPaswordView;