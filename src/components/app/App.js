import React, { useEffect } from 'react';
import './App.scss';
import Routers from '../../routers/Routers';
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import HeaderComponent from '../header/Header';
import FooterComponent from '../footer/Footer';
import ToolbarComponent from '../toolbar/Toolbar';
import AlertComponent from '../alert/Alert';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab }from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/login/login';
import $ from 'jquery';

library.add(fab, fas)

class AppComponent extends React.Component {

  constructor(props) {
    super(props)
    this.onRouteChanged = this.onRouteChanged.bind(this);
    this.state = {
      pathname: ''
    }
  }

  onRouteChanged(pathname) {
    this.setState({ pathname });
    $('.modal-backdrop').remove();
  }

  render() {
    $('.modal-backdrop').remove();
    return (
      <Router>
        <AlertComponent />
        <ToolbarComponent {...this.props} />
        <HeaderComponent {...this.props} />
        <div className={`wrap${this.state.pathname}`}>
          <Routers onRouteChanged={this.onRouteChanged}/>
          <div className="push"></div>
        </div>
        <FooterComponent />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  const { login, baskets } = state;
  return { login, ...baskets }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
