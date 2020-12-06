import React from 'react';
import { Formik } from 'formik';
import './Login.scss';
import { connect } from 'react-redux';
import {
  login,
  setLoginReset,
} from '../../redux/actions/login/login';
import {
  resendActivation
} from '../../redux/actions/resendActivation/resendActivation';
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

class LoginComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    }
  }

  componentWillUnmount() {
    this.setState({ email: '' });
  }

  resendActivation(event) {
    event.preventDefault();
    this.props.resendActivation(this.state.email);
  }

  render() {

    const { login, loginState, } = this.props;
    const min = 7;
    const max = 50;

    return (
      
      <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-5 formik">
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Email Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Password Required';
            } else if ( values.password.length < min || values.password.length > max
            ) {
              errors.password = `Password length must be ${min} - ${max} characters`;
            }
            return errors;
          }}
          onSubmit={(values) => {
            this.setState({ email: values.email });
            login(values);
          }}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="pt-5">
              <div className="form-group">
                <h1 className="center pb-3">
                  Log in
                </h1>
              </div>
              <div className="form-group">
                <input
                  className={`form-control p-3 rounded-0 ${errors.email && touched.email && 'input-error'}`}
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email..."/>
                  <small className="error">
                    {errors.email && touched.email && errors.email}
                  </small>
                  {
                    loginState && loginState.errors && loginState.errors.code === 403 && loginState.errors.message === 'Please active your account' ? 
                    <NavLink className="green float-right pt-2 pb-2" to="" onClick={(e) => { this.resendActivation(e) }}>
                      Resend Activation Email
                    </NavLink> : null
                  }
              </div>
              <div className="form-group">
                <input
                  className={`form-control p-3 rounded-0 ${errors.password && touched.password && 'input-error'}`}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Password..."/>
                  <small className="error">
                    {errors.password && touched.password && errors.password}
                  </small>
                  <NavLink className="green float-right pt-2 pb-2" to="/forgot-password">
                    Forgot Password
                  </NavLink>
              </div>
              <button type="submit" 
                className="btn btn-primary btn-block btn-lg p-3 rounded-0" 
                disabled={loginState.loading}>
                Log In
              </button>
              <div className="form-group forgot-password pt-4 center">
                Not Registered?&nbsp; 
                <NavLink className="green pt-4" to="/signup">
                  Sign Up
                </NavLink>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { login, resendActivation } = state;
  return { loginState: login, resendActivationState: resendActivation }
}

const mapDispatchToProps = dispatch => ({
  login: (payload) => dispatch(login(payload)),
  setLoginReset: () => dispatch(setLoginReset()),
  resendActivation: (email) => dispatch(resendActivation({email})),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent));