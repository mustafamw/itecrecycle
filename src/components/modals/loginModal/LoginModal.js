import React from 'react';
import LoginComponent from '../../login/Login';
import './LoginModal.scss';
class LoginModalComponent extends React.Component {
  render() {
    return (
      <div className="login-modal modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <LoginComponent />
          </div>
      </div>
    );
  };
}

export default LoginModalComponent;