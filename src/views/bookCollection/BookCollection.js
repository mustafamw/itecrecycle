import React from 'react';
import './BookCollection.scss';
import { Link } from "react-router-dom";
import BookCollectionComponent from '../../components/bookCollection/BookCollection';

class BookCollectionView extends React.Component {
  render() {
    return (
      <div className="items-collection pt-2">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="title">Book a collection</h1>
                <p className="pt-2 pb-2">
                  <Link to="/items-collection" className="button-green">Items We Collect</Link>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <BookCollectionComponent />
              </div>
            </div>
          </div>
        </section>
      </div >
    );
  }
}

export default BookCollectionView;
