import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import Social from '../social/Social';
import './Footer.scss';
import { ContactNo } from '../../constant/contact-info/Telephone';
import logo from '../../assets/img/logo/logo-footer.png';

class Footer extends Component {

  call() {
    window.location.href = `tel:${ContactNo}`;
  }

  render() {
    const year = new Date().getFullYear();
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="footer-logo">
                {
                  <img srcSet={logo} alt="Logo" title="Logo" />
                }
                <div className="title">iTec Recycle</div>
              </div>
              <div className="clear-both"></div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <h4>CONTACT US</h4>
              <div className="clear-both"></div>
              <small>
                info@itecrecycle.co.uk<br />
                {/* <span className="curser-pointer" onClick={this.call}>
                  {ContactNo}
                </span> */}
              </small>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <h4>QUICK LINKS</h4>
              <div className="clear-both"></div>
              <small>
                <Link to="/contact-us">Contact Us</Link><br />
                <Link to="/terms-and-conditions">Terms and Conditions</Link><br />
                <Link to="/privacy-policy">Privacy Policy</Link>
              </small>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 social-network">
              <h4>SOCIAL NETWORK</h4>
              <div className="clear-both"></div>
              <small>
                <Social />
              </small>
              <div className="clear-both"></div>
              {/* <img src={payments} alt="payments" className="payments"/> */}
            </div>
            <div className="col-12">
              <center><small>Copyright&copy;{year} by itecrecycle.co.uk</small></center>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
