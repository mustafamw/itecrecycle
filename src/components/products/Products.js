import React from 'react';
import './Products.scss';
import ProductComponent from './product/Product';

class ProductsComponent extends React.Component {
    render() {
        const { products } = this.props;
        
        const productsList = products.map((e, index)=>{
            return (
                <ProductComponent product={e} key={index}/>
            );
        });

        return (
            <div className="products-list pt-1">
                {productsList}
            </div>
        );
    }
}

export default ProductsComponent;
