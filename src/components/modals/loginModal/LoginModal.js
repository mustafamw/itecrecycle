import React from 'react';
import LoginComponent from '../../login/Login';
import './LoginModal.scss';

class LoginModalComponent extends React.Component {
  render() {
    return (
      <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <LoginComponent />
          </div>
        </div>
      </div>
    );
  };
}

export default LoginModalComponent;