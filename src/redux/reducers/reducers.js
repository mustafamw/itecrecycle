import { combineReducers } from 'redux';
import products from './products/products';
import product from './product/product';
import baskets from './baskets/baskets';
import signup from './signup/signup';
import login from './login/login';
import alert from './alert/alert';
import forgotPassword from './forgotPassword/forgotPassword';
import resetPassword from './resetPassword/resetPassword';
import resetPasswordValid from './resetPasswordValid/resetPasswordValid';
import activate from './activate/activate';
import resendActivation from './resendActivation/resendActivation';
import contactUs from './contactUs/contactUs';
import itemsCollection from './itemsCollection/itemsCollection';

export default combineReducers({
    products,
    product,
    baskets,
    signup,
    login,
    alert,
    forgotPassword,
    resetPassword,
    resetPasswordValid,
    activate,
    resendActivation,
    contactUs,
    itemsCollection,
});