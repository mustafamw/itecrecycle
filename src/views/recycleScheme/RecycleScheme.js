import React from 'react';
import './RecycleScheme.scss';
import recycleScheme from '../../assets/img/resources/recycle-scheme.png';

class RecycleSchemeView extends React.Component {
  render() {
    return (
      <div className="recycle-scheme">
        <section className="">
          <div className="container">
            <div className="col-12">
              <h1 className="title p-0 pb-2">Recycle Scheme</h1>
            </div>
            <div className="row">
              <div className="col-9">
                <p>
                  Electronic rubbish, and computer equipment in particular, is a rapidly expanding stream of UK waste. Reduce your carbon footprint and waste costs at the same time by recycling your used computers. We offer CASH for your used/broken computers.
                </p>
              </div>
              <div className="col-3">
                <img srcSet={recycleScheme} alt="Recycle Scheme" />
              </div>
            </div>
            <div className="col-12">
              <h2>We buy any Laptops & Computers</h2>
              <p>
                We focus on serving individual customers but we are happy to accommodate all quantities. There is no limit on the number of computers you can exchange for cash with us and are fully equipped to deal with your needs
              </p>
              <p>
                Our service is friendly, professional and efficient.
              </p>
            </div>
          </div>
        </section>
      </div >
    );
  }
}

export default RecycleSchemeView;
