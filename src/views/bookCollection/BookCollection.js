import React from 'react';
import './BookCollection.scss';
import BookCollectionComponent from '../../components/bookCollection/BookCollection';

class BookCollectionView extends React.Component {
  render() {
    return (
      <div className="items-collection">
        <section>
          <div className="container">
            <div className="col-12">
              <h1 className="title p-0 pb-2">Book a collection</h1>
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
