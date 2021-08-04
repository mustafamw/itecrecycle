import React from 'react';
import './ItemsCollection.scss';
import { Link } from "react-router-dom";
import ItemsCollectionComponent from '../../components/itemsCollection/ItemsCollection';

class ItemsCollectionView extends React.Component {
  render() {
    return (
      <div className="items-collection pt-2">
        <section>
          <div className="container">
            <div className="col-12">
              <h1 className="title">Items We Collect</h1>
            </div>
            <div className="row">
              <div className="col-12">
                <p>
                  Electronic rubbish, and computer equipment in particular, is a rapidly expanding stream of UK waste. Reduce your carbon footprint and waste costs at the same time by recycling your used computers. We offer CASH for your used/broken computers.
                </p>
                <Link to="/items-collection/book" className="button-green">Book a collection</Link>
                <ItemsCollectionComponent />
              </div>
            </div>
          </div>
        </section>
      </div >
    );
  }
}

export default ItemsCollectionView;
