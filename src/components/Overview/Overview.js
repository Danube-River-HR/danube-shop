import React from 'react';

import ProductDescription from './ProductDescription/ProductDescription';
import ProductCard from './ProductCard/ProductCard.js';

class Overview extends React.Component {
    render() {
        return (
            <>
                <ProductCard />
                <ProductDescription />
            </>
        )
    }
}

export default Overview;