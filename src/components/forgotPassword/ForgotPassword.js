import React from 'react';
import { Formik } from 'formik';
import './ForgotPassword.scss';
import { connect } from 'react-redux';
import { forgotPassword } from '../../redux/actions/forgotPassword/forgotPassword';

class ForgotPasswordComponent extends React.Component {
  render() {
    const { forgotPassword, loading } = this.props;

    return (
      <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-5 formik">
        <Formik
          initialValues={{ email: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Email Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            forgotPassword(values);
            resetForm();
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
                  Find Your Account
                </h1>
              </div>
              <div className="form-group">
                <p className="center pb-3">
                  Enter your user account's verified email address and we will send you a password reset link.
                </p>
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
              </div>
              <button type="submit" 
                className="btn btn-primary btn-block btn-lg p-3 rounded-0" 
                disabled={loading}>
                Send Login Link
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { forgotPassword } = state;
  return { ...forgotPassword }
}

const mapDispatchToProps = dispatch => ({
  forgotPassword: (payload) => dispatch(forgotPassword(payload)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordComponent);