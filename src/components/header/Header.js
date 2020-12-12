import React from 'react';
import './Header.scss';
import NavComponent from '../nav/Nav';
import logo from '../../assets/img/logo/logo.png';
import { NavLink, withRouter } from "react-router-dom";
import burgerMenu  from '../../assets/img/icons/menu.png';

class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {show: false};
    this.handleMenu = this.handleMenu.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({show:false});
    }
  }

  handleMenu() {
    const navShow = this.state.show;
    navShow ? this.setState({show:false}) : this.setState({show:true});
  }

  render() {

    const navShow = this.state.show;

    return (
      <header>
        <div className="container">
          <div className="row align-center">
            <div className="col-10 col-sm-10 col-md-4 col-lg-4 col-xl-4">
              <div className="logo">
                <NavLink to="/">
                  {
                    <img srcSet={logo} alt="Logo" title="Logo" />
                  }
                  <div className="title">iTec Recycle</div>
                </NavLink>
              </div>
            </div>
            <div className="col-2 burger-menu" onClick={this.handleMenu}>
              <img src={burgerMenu} alt="Burger Menu" />
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 nav-container">
              <div className="route" style={{ display: navShow ? 'block' : 'none' }}>
                <NavComponent />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(HeaderComponent);
