import React from 'react';
import './Main.scss';
import SliderComponent from '../../components/slider/Slider';
import { Link } from "react-router-dom";

class MainView extends React.Component {
  render() {
    return (
      <div className="main-view">
        <SliderComponent />
        <section>
          <div className="container center services">
            <div className="row">
              <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 service">
                <Link to="/recycle-scheme">
                  <i className="fas fa-recycle"></i>
                  <h2>Recycle Scheme</h2>
                  <p>We Recycle any Laptops/Computers & IT Equipments</p>
                  <button className="button-green">Find out more ...</button>
                </Link>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 service">
                <Link to="/data-destruction">
                  <i className="fas fa-folder-open"></i>
                  <h2>Data Destruction</h2>
                  <p>High level Data Destruction Services</p>
                  <button className="button-green">Find out more ...</button>
                </Link>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 service">
                <Link to="/items-collection">
                  <i className="fas fa-laptop"></i>
                  <h2>Items We Collect</h2>
                  <p>We collect Computers, Laptops, Mobiles and more...</p>
                  <button className="button-green">Find out more ...</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="grey">
          <div className="container pt-3 pb-2">
            <div className="col-12">
              <h2>About us</h2>
              <p>
                Itec Recycle specialise in Recycling PC/Laptop/Tablets & Phones. We are IT disposal and asset management service providers.
              </p>
              <p>
                We are located in the West Midlands. Established in response to the need for a more complete asset management service, 
                Itec Recycle provide an end-to end solution for your redundant IT. We care about the environment that we live and work within. 
                We strive to work towards a circular economy for IT assets.
              </p>
              {/* <p>
                iTec recycle offers products and services, recycling computers recovers valuable materials from old electronics that can be used to make new products. As a result, we save energy, reduce pollution, reduce greenhouse gas emissions, and save resources by extracting fewer raw materials from the earth.
              </p>
              <p>
                Nowadays there is a growing demand for a PC engineer to come to the customer and repair any computer related problems onsite, to save on the inconvenience of taking the computer in to a shop and then possibly being without it for a number of days, especially important when the computer is part of a business and is in constant use!
              </p>
              <p>
                Mobile Computer Services caters specifically to that need. Based in West Midlands, we provide a quick, reliable and professional PC and Laptop on-site repair service to both private and business owners in the Walsall, Wolverhampton, Birmingham and surrounding areas.
              </p>
              <p>
                We also do Onsite Computer / Laptop repair and Data Erasing Destruction.
              </p> */}
            </div>
          </div>
        </section>
        <section className="green">
          <div className="container pt-3 pb-2">
            <div className="col-12">
              <p>
                Our unique IT service – from collection to reuse and recycling, is designed to remove and dispose of IT equipment, 
                all within a secure and environmentally sensitive way.
              </p>
            </div>
          </div>
        </section>
        <section className="grey">
          <div className="container pt-3 pb-2">
            <div className="col-12">
              <h2>Our mission</h2>
              <p>
                To provide first class service to individuals looking to recycle used technology, be it coming from you personally, a school, 
                business or charity, while removing all data on your technology to comply with current data protection and environmental regulations.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MainView;
