import React, { useState } from 'react';
import { Formik } from 'formik';
import './ContactUs.scss';
import { connect } from 'react-redux';
import {
  contactUs,
} from '../../redux/actions/contactUs/contactUs';
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

class ContactUsComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      subject: '',
      message: '',
    }
  }

  render() {

    const { contactUs, contactUsState, } = this.props;
    const min = 7;
    const max = 50;
    const maxSubject = 150;
    const maxMessage = 250;

    return (
      
      <div className="contact-us-form formik">
        <Formik
          initialValues={{ email: this.state.email, subject: this.state.subject, message: this.state.message }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Email Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.subject) {
              errors.subject = 'Subject Required';
            } else if ( values.subject.length < min || values.subject.length > max
            ) {
              errors.subject = `Subject length must be ${min} - ${max} characters`;
            }
            if (!values.subject) {
              errors.subject = 'Subject Required';
            } else if ( values.subject.length < min || values.subject.length > maxSubject
            ) {
              errors.subject = `Subject length must be ${min} - ${maxSubject} characters`;
            }
            if (!values.message) {
              errors.message = 'Message Required';
            } else if ( values.message.length < min || values.message.length > maxMessage
            ) {
              errors.message = `Message length must be ${min} - ${maxMessage} characters`;
            }
            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            contactUs(values);
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
            <form onSubmit={handleSubmit}>
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
              <div className="form-group">
                <input
                  className={`form-control p-3 rounded-0 ${errors.subject && touched.subject && 'input-error'}`}
                  type="text"
                  name="subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.subject}
                  placeholder="Subject..."/>
                  <small className="error">
                    {errors.subject && touched.subject && errors.subject}
                  </small>
              </div>
              <div className="form-group">
                <textarea
                  className={`form-control p-3 rounded-0 ${errors.message && touched.message && 'input-error'}`}
                  type="text"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  placeholder="Message...">
                </textarea>
                  <small className="error">
                    {errors.message && touched.message && errors.message}
                  </small>
              </div>
              <button type="submit" 
                className="btn btn-primary btn-block btn-lg p-3 rounded-0" 
                disabled={contactUsState.loading}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { contactUs } = state;
  return { contactUsState: contactUs }
}

const mapDispatchToProps = dispatch => ({
  contactUs: (payload) => dispatch(contactUs(payload)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactUsComponent));