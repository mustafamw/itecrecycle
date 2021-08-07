import React from 'react';
import './RecycleScheme.scss';
import recycleScheme from '../../assets/img/resources/recycle-scheme.png';
import buy from '../../assets/img/resources/buy.jpg';

class RecycleSchemeView extends React.Component {
  render() {
    return (
      <div className="recycle-scheme pt-2">
        <section className="pt-2 pb-3">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 order-xs-2">
                <h1 className="title pt-0">Recycle Scheme</h1>
                <p>
                  Electronic rubbish, and computer equipment in particular, is a rapidly expanding stream of UK waste. Reduce your carbon footprint and waste costs at the same time by recycling your used computers. We offer CASH for your used/broken computers.
                </p>
              </div>
              <div className="pt-1 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 order-xs-1">
                <img srcSet={recycleScheme} alt="Recycle Scheme" />
              </div>
            </div>
          </div>
        </section>
        <section className="pt-3 pb-3 white">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 order-xs-2 order-sm-2 order-md-2 order-lg-2 order-xl-2">
                <h2 className="title pt-0">We buy any Laptops & Computers</h2>
                <p>
                  We focus on serving individual customers but we are happy to accommodate all quantities. There is no limit on the number of computers you can exchange for cash with us and are fully equipped to deal with your needs
                </p>
                <p>
                  Our service is friendly, professional and efficient.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 order-xs-1 order-sm-1 order-md-1 order-lg-1 order-xl-1">
                <img srcSet={buy} alt="We buy any Laptops & Computers" />
              </div>
            </div>
          </div>
        </section>
        <section className="pt-3 pb-3">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 order-xs-2">
                <h2 className="title pt-0">Recycle Scheme</h2>
                <p>
                  Electronic rubbish, and computer equipment in particular, is a rapidly expanding stream of UK waste. Reduce your carbon footprint and waste costs at the same time by recycling your used computers. We offer CASH for your used/broken computers.
                </p>
              </div>
              <div className="pt-1 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 order-xs-1">
                <img srcSet={recycleScheme} alt="Recycle Scheme" />
              </div>
            </div>
          </div>
        </section>
      </div >
    );
  }
}

export default RecycleSchemeView;
