import React from 'react';
import './ContactUs.scss';
import ContactUsComponent from '../../components/contactUs/ContactUs';

class ContactUsView extends React.Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="col-12 p-0">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                <h1 className="title">Contact us</h1>
                <p>If you have an enquiry please do contact us, we will get back to you as soon as possible.</p>
              </div>
              <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                <ContactUsComponent/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUsView;
