import React from 'react';
import { connect } from 'react-redux';
import './Product.scss';
import ProductViewComponent from '../../components/productView/ProductView';
import { getProduct } from '../../redux/actions/product/product';
import { isEmpty } from 'lodash';
import { withRouter } from "react-router-dom";
import { addAlert } from '../../redux/actions/alert/alert';
import { store } from '../../redux/store/store';

class ProductView extends React.Component {

    constructor(props) {
        super(props);
        const { id } = this.props.match.params;
        this.props.getProduct(id);
    }

    render() {

        const { product, loaded, errors } = this.props.productState;

        if(!isEmpty(errors)) {
            this.props.history.push('/products');
            store.dispatch(addAlert({ type: 'danger', message: 'We\'re sorry, but we\'re having some technical difficulties. Please try again later' }));
        }

        if(!!(loaded && !product)) {
            this.props.history.push('/products');
        }

        return (
            <section>
                <div className="product-view pt-2">
                    { loaded && product ? <ProductViewComponent {...this.props}/> : null }
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    const { product: productState, baskets: basketsState } = state;
    return { productState,  basketsState }
}

const mapDispatchToProps = dispatch => ({
    getProduct: (id) => dispatch(getProduct(id)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductView));