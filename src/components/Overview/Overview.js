import React from 'react';

import ProductDescription from './ProductDescription/ProductDescription.js';
import ProductCard from './ProductCard/ProductCard.js';
import ProductGallery from './ProductGallery/ProductGallery.js';

class Overview extends React.Component {
    render() {
        return (
            <>
                <ProductGallery />
                <ProductCard />
                <ProductDescription />
            </>
        )
    }
}

export default Overview;