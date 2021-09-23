/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import RelatedProductsWidget from './RelatedProductsWidget';
import RelatedCard from './CardDetails/RelatedCard';
import RelatedRating from './CardDetails/RelatedRating';
import Thumbnail from './CardDetails/Thumbnail';
import Modal from './CardDetails/Modal';
import relatedProductList from './related-data/related-products.json';
import relatedStyles from './related-data/related-styles.json';

configure({ adapter: new Adapter() });

describe('RelatedProducts Component Enzyme Tests', () => {
  let container;

  beforeEach(() => {
    container = shallow(<RelatedProductsWidget />);
  });

  it('should render a <div />', () => {
    expect(container.find('div').length).toEqual(3);
  });

  it('should render the RelatedCard Component', () => {
    expect(container.containsMatchingElement(<RelatedCard id={40450} />)).toEqual(true);
  });
});

describe('RelatedCard Component Enzyme Tests', () => {
  let container;

  beforeEach(() => {
    container = shallow(<RelatedCard id={40450} />);
  });

  it('should render a <div />', () => {
    expect(container.find('div').length).toEqual(2);
  });

  it('should render the RelatedRating Component', () => {
    expect(container.containsMatchingElement(<RelatedRating score={4.8} />)).toEqual(true);
  });
});

describe('Thumbnail Component Enyzme Tests', () => {
  let container;

  beforeEach(() => {
    container = shallow(<Thumbnail
      image="url"
      list={[['info', 'moreinfo']]}
      product="product"
      current="Alivia Slacks"
    />);
  });

  it('should render a Star button', () => {
    expect(container.find('button').length).toEqual(1);
  });
});
