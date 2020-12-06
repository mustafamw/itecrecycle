import React from 'react';
import { Formik } from 'formik';
import './Signup.scss';
import { connect } from 'react-redux';
import { signup, setSignupReset } from '../../redux/actions/signup/signup';
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { isEmpty } from 'lodash';

class SignupComponent extends React.Component {
  componentWillUnmount() {
    this.props.setSignupReset();
  }

  render() {

    let { errors: errorsResponse } = this.props;
    const { signup, loaded, loading } = this.props;
    const passwordMin = 7;
    const passwordMax = 50;
    const nameMin = 1;
    const nameMax = 50;
    let errors = errorsResponse ? errorsResponse.errors : {}
    if  (errorsResponse) {
      setTimeout(() => {
        errorsResponse = undefined;
      }, 100);
    }

    if(loaded && isEmpty(errors)) {
      this.props.history.push('/login');
    }

    return (
      
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6 formik">
        <Formik
          enableReinitialize={true}
          initialValues={{ 
            email: '', 
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            telephoneNo: '',
            mobileNo: '',
          }}
          validate={values => {
            errors = errorsResponse ? errorsResponse.errors : {}
            if  (errorsResponse) {
              setTimeout(() => {
                errorsResponse = undefined;
              }, 100);
            }
            if (!values.firstName) {
              errors.firstName = 'First name Required';
            } else if ( values.firstName.length < nameMin || values.firstName.length > nameMax
            ) {
              errors.firstName = `First name length must be ${nameMin} - ${nameMax} characters`;
            }
            if (!values.lastName) {
              errors.lastName = 'Last name Required';
            } else if ( values.lastName.length < nameMin || values.lastName.length > nameMax
            ) {
              errors.lastName = `Last name length must be ${nameMin} - ${nameMax} characters`;
            }
            if (!values.telephoneNo) {
              errors.telephoneNo = 'Phone number Required';
            } else if ( !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(values.telephoneNo)
            ) {
              errors.telephoneNo = `Invalid phone number`;
            }
            if (values.mobileNo && values.mobileNo.length > 0 && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(values.mobileNo)) {
              errors.mobileNo = `Invalid mobile number`;
            }
            if (!values.email) {
              errors.email = 'Email Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Password Required';
            } else if ( values.password.length < passwordMin || values.password.length > passwordMax
            ) {
              errors.password = `Password length must be ${passwordMin} - ${passwordMax} characters`;
            }

            if (values.password !== values.confirmPassword || !values.confirmPassword) {
              errors.confirmPassword = 'Password Does not match';
            } 
          }}
          onSubmit={(values) => {
            if (!isEmpty(errors)){
              return;
            }
            errors = {};
            if (isEmpty(values.mobileNo)) {
              delete values.mobileNo;
            }
            signup(values);

          }}>
          {({
            values,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="pt-5 mt-5">
              <div className="form-group">
                <h1 className="center pb-3">
                  Signup
                </h1>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-0 pr-1">
                    <input
                      className={`form-control p-3 rounded-0 ${errors.firstName && touched.firstName && 'input-error'}`}
                      type="text"
                      name="firstName"
                      id="firstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      placeholder="First Name*..."/>
                    <small className="error">
                      {errors.firstName && touched.firstName && errors.firstName}
                    </small>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-0 pl-1">
                    <input
                      className={`form-control p-3 rounded-0 ${errors.lastName && touched.lastName && 'input-error'}`}
                      type="text"
                      name="lastName"
                      id="lastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      placeholder="Last Name*..."/>
                    <small className="error">
                      {errors.lastName && touched.lastName && errors.lastName}
                    </small>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-0 pr-1">
                    <input
                      className={`form-control p-3 rounded-0 ${errors.telephoneNo && touched.telephoneNo && 'input-error'}`}
                      type="text"
                      name="telephoneNo"
                      id="telephoneNo"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.telephoneNo}
                      placeholder="Phone Number*..."/>
                    <small className="error">
                      {errors.telephoneNo && touched.telephoneNo && errors.telephoneNo}
                    </small>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-0 pl-1">
                    <input
                      className={`form-control p-3 rounded-0 ${errors.mobileNo && touched.mobileNo && 'input-error'}`}
                      type="text"
                      name="mobileNo"
                      id="mobileNo"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mobileNo}
                      placeholder="Mobile Number..."/>
                    <small className="error">
                      {errors.mobileNo && touched.mobileNo && errors.mobileNo}
                    </small>
                  </div>
                </div>
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
                  placeholder="Email*..."/>
                  <small className="error">
                    {errors.email && touched.email && errors.email}
                  </small>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-0 pr-1">
                    <input
                      className={`form-control p-3 rounded-0 ${errors.password && touched.password && 'input-error'}`}
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Password*..."/>
                    <small className="error">
                      {errors.password && touched.password && errors.password}
                    </small>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pl-1 pr-0">
                    <input
                      className={`form-control p-3 rounded-0 ${errors.confirmPassword && touched.confirmPassword && 'input-error'}`}
                      type="password"
                      name="confirmPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      placeholder="Confirm Password*..."/>
                    <small className="error">
                      {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                    </small>
                  </div>
                </div>
              </div>
              <button type="submit" 
                className="btn btn-primary btn-block btn-lg p-3 rounded-0" 
                disabled={loading}>
                Signup
              </button>
              <div className="form-group forgot-password pt-4 center">
                Already have an account?&nbsp; 
                <NavLink className="green pt-4" to="/login">
                  Login
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
  const { signup } = state;
  return { ...signup }
}

const mapDispatchToProps = dispatch => ({
  signup: (payload) => dispatch(signup(payload)),
  setSignupReset: () => dispatch(setSignupReset()),
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupComponent));