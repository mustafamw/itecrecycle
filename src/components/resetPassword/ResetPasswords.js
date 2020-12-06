import React from 'react';
import { Formik } from 'formik';
import './ResetPassword.scss';
import { connect } from 'react-redux';
import {
  resetPassword,
} from '../../redux/actions/resetPassword/resetPassword';
import { withRouter } from "react-router-dom";
import { isEmpty } from 'lodash'

class ResetPasswordComponent extends React.Component {
  
  render() {

    const { resetPassword, loading, loaded, errors } = this.props;
    const min = 7;
    const max = 50;

    if(loaded && isEmpty(errors)) {
      this.props.history.push('/login');
    }

    return (
      
      <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-5 formik">
        <Formik
          initialValues={{ password: '', confirmPassword: '' }}
          validate={values => {
            const errors = {};
            if (!values.password) {
              errors.password = 'Password Required';
            } else if ( values.password.length < min || values.password.length > max
            ) {
              errors.password = `Password length must be ${min} - ${max} characters`;
            }

            if (values.password !== values.confirmPassword) {
              errors.confirmPassword = 'Password Does not match';
            } 
            return errors;
          }}
          onSubmit={(values) => {
            resetPassword(this.props.token, values);
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
                  Reset Password
                </h1>
              </div>
              {/* <div className="form-group">
                <p className="center pb-3">
                  Enter your user account's verified email address and we will send you a password reset link.
                </p>
              </div> */}
              <div className="form-group">
                <input
                  className={`form-control p-3 rounded-0 ${errors.password && touched.password && 'input-error'}`}
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="New Password..."/>
                  <small className="error">
                    {errors.password && touched.password && errors.password}
                  </small>
              </div>
              <div className="form-group">
                <input
                  className={`form-control p-3 rounded-0 ${errors.confirmPassword && touched.confirmPassword && 'input-error'}`}
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  placeholder="Confirm Password..."/>
                  <small className="error">
                    {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                  </small>
              </div>
              <button type="submit" 
                className="btn btn-primary btn-block btn-lg p-3 rounded-0" 
                disabled={loading}>
                Change Password
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { resetPassword } = state;
  return { ...resetPassword }
}

const mapDispatchToProps = dispatch => ({
  resetPassword: (token, payload) => { 
    dispatch(resetPassword({ Authorization: `Bearer ${token}` }, payload)) 
  },
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResetPasswordComponent));