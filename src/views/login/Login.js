import React from 'react';
import './Login.scss';
import LoginComponent from '../../components/login/Login';

class LoginView extends React.Component {
  render() {
    return(
      <div className="container">
        <LoginComponent />
      </div> 
    );
  }
}

export default LoginView;