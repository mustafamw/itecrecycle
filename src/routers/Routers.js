import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import MainView from '../views/main/Main';
import ProductsView from '../views/products/Products';
import ProductView from '../views/product/Product';
import DataDestructionView from '../views/dataDestruction/DataDestruction';
import RecycleSchemeView from '../views/recycleScheme/RecycleScheme';
import ContactUsView from '../views/contactUs/ContactUs';
import SignupView from '../views/signup/Signup'
import LoginView from '../views/login/Login'
import ActivateView from '../views/activate/Activate'
import ForgotPasswordView from '../views/forgotPassword/ForgotPassword'
import ResetPasswordView from '../views/resetPassword/ResetPassword'
import BasketView from '../views/basket/Basket';
import ConfirmationView from '../views/confirmation/Confirmation';
import ItemsCollection from '../views/itemsCollection/ItemsCollection';
import BookCollection from '../views/bookCollection/BookCollection';
import PrivacyPolicyView from '../views/privacyPolicy/privacyPolicy';
import TermsAndConditionsView from '../views/termsAndConditions/termsAndConditions';
import {
  getCookies
} from '../utils/cookies';
import { store } from '../redux/store/store';
import {
  logout
} from '../redux/actions/login/login'
import { connect } from 'react-redux';
import { getItem } from '../utils/sessionStorage';
import $ from 'jquery';

class Routers extends React.Component {

  constructor(props) {
    super(props);
    this.onRouteChanged();
    this.isLoggedIn();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
        this.onRouteChanged();
    }
  }

  onRouteChanged() {
    this.props.onRouteChanged(this.props.location.pathname.split('/').join(' '));
    $('body').removeClass('modal-open');
  }

  isLoggedIn() {
    try {
      const token = getCookies('jwt');
      if (!token) {
        return false;
      }
      store.dispatch({ type: 'SET_LOGIN', data: { token } });
      return true;
    } catch (error) {
      store.dispatch(this.props.logout());
      return false
    }
  }

  render() {

    return (
      <Switch>
        <Route exact path='/' component={MainView} />
        <Route exact path='/products' component={ProductsView} />
        <Route exact path='/products/:id' component={ProductView} />
        <Route path='/data-destruction' component={DataDestructionView} />
        <Route path='/recycle-scheme' component={RecycleSchemeView} />
        <Route path='/contact-us' component={ContactUsView} />
        <Route path='/basket' component={BasketView} />
        <Route exact path='/items-collection' component={ItemsCollection} />
        <Route exact path='/items-collection/book' component={BookCollection} />
        <Route exact path='/privacy-policy' component={PrivacyPolicyView} />
        <Route exact path='/terms-and-conditions' component={TermsAndConditionsView} />
        <Route exact path='/signup'
          render = { (props) => (
            !this.isLoggedIn() ? <SignupView {...props} /> : <Redirect to='/' />
          )}
        />
        <Route exact path='/login'
          render = { (props) => (
            !this.isLoggedIn() ? <LoginView {...props} /> : <Redirect to='/' />
          )}
        />
        <Route exact path='/forgot-password' 
          render = { (props) => (
            !this.isLoggedIn() ? <ForgotPasswordView {...props}/> : <Redirect to='/' />
          )}
        />
        <Route exact path='/reset-password/:token' 
          render = { (props) => (
            !this.isLoggedIn() ? <ResetPasswordView {...props} /> : <Redirect to='/' />
          )}
        />
        <Route exact path='/activate/:token' 
          render = { (props) => (
            !this.isLoggedIn() ? <ActivateView {...props} /> : <Redirect to='/' />
          )}
        />
        <Route exact path='/confirmation'
          render = { (props) => (
            getItem('confirmation') ? <ConfirmationView {...props} /> : <Redirect to='/products' />
          )}
        />
        <Redirect from='*' to='/' />
      </Switch>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routers));
