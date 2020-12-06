import React from 'react';
import './itemsCollection.scss';
import { Link } from "react-router-dom";
import ItemsCollection from '../../data/itemsCollection/itemsCollection.json';

class ItemsCollectionComponent extends React.Component {
  render() {
    console.log(ItemsCollection);
    const itemsCollection = ItemsCollection.map((item) => {
      const { title, info, img } = item;
      const image = require(`../../assets/img/itemsCollection/${img}`);
      return (
        <div className="item-collection">
          <div className="image">
            <img src={image} alt={title}/>
            <div className="title">
              {title}
            </div>
          </div>
        </div>
      );
    })
    return (
      <div className="items-collection-container">
        {itemsCollection}
      </div >
    );
  }s
}

export default ItemsCollectionComponent;
