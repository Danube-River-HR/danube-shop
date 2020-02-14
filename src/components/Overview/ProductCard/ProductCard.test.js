import React from 'react';
import { shallow, render } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchAllProductData from '../../../redux/actions/index';

// Components
import ProductCard from './ProductCard.js';

// function setup() {
  const props = {
    overallData: {
        currentProduct: {},
        relatedProducts: [],
        averageRating: 0,
        productStyles: {}
    },
    selectedStyle: {}
  };
//   const wrapper = shallow(<ProductCard />);
//   return { wrapper, props };
// }

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('ProductCard Test Suite', () => {
  it('Should receive an overallData props object containing currentProduct', () => {
    const exampleState = {
        overallData: {
            currentProduct: {},
            relatedProducts: [],
            averageRating: 0,
            productStyles: {}
        },
        selectedStyle: {}
      };
    const store = mockStore(exampleState);
    
    return store.dispatch(fetchAllProductData(1))
      .then(() => {
          expect(store.getActions()).toMatchSnapshot();
      })

  });
});


// configure-redux-store
// redux-mock-store
// mock store
// configure store

