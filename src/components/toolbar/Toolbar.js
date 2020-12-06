import React from 'react';
import './Toolbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";

class ToolbarComponent extends React.Component {
  render() {
    const { login, baskets, logout } = this.props;
    const basketCount = Object.keys(baskets).length;

    return (
      <div className="toolbar">
        <div className="container">
          <div className="col-12">
            <ul>
              <li>
                <NavLink to="/basket" activeClassName="active">
                  <div className="basket">
                    <FontAwesomeIcon icon="shopping-basket" />
                    { basketCount ? <span>{ basketCount }</span> : null }
                  </div>
                  <span className="text">
                    Basket
                  </span>
                </NavLink>
              </li>
              {
                !login.isLoggedIn ? 
                <li>
                  <NavLink to="/login" activeClassName="active">
                    <FontAwesomeIcon icon="user-alt" />
                    <span className="text">
                      Login
                    </span>
                  </NavLink>
                </li>:
                <>
                  {/* <li>
                    <NavLink to="/my-account" activeClassName="active">
                      <FontAwesomeIcon icon="user-edit" />
                      <span className="text">
                        My Account
                      </span>
                    </NavLink>
                  </li> */}
                  <li>
                    <div className="logout" onClick={ () => { logout() } }>
                      <FontAwesomeIcon icon="sign-out-alt" />
                      <span className="text">
                        logout
                      </span>
                    </div>
                  </li>
                </>
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ToolbarComponent;
