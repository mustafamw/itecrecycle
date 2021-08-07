import React from 'react';
import './BookCollection.scss';
import { Link } from "react-router-dom";
import BookCollectionComponent from '../../components/bookCollection/BookCollection';

class BookCollectionView extends React.Component {
  render() {
    return (
      <div className="items-collection">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="title">Book a collection</h1>
                <p className="pt-2 mb-0">
                  <Link to="/items-collection" className="button-green inline-block">Items We Collect</Link>
                </p>
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
