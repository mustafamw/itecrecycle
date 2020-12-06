import React from 'react';
import './Product.scss';
import { NavLink } from "react-router-dom";
import { currencyFormat } from '../../../utils/formatCurrency';

class ProductComponent extends React.Component {
    render() {
        const { product } = this.props;

        return (
            <div className="product">
                <NavLink to={`/products/${product.productId}`}>
                    <div className="image">
                        <img srcSet={product.image} alt={product.title} />
                        <div className="price">
                            {currencyFormat(product.price)}
                        </div>
                    </div>
                    <div className="col-12 title">
                        {product.title}
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default ProductComponent;