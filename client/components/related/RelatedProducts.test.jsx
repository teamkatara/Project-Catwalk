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

configure({ adapter: new Adapter() });

describe('RelatedProducts Component Enzyme Tests', () => {
  let container;

  beforeEach(() => {
    container = shallow(<RelatedProductsWidget />);
  });

  it('should render a <div />', () => {
    expect(container.find('div').length).toEqual(2);
  });

  it('should render the RelatedCard Component', () => {
    expect(container.containsMatchingElement(<RelatedCard />)).toEqual(true);
  });
});

describe('RelatedCard Component Enzyme Tests', () => {
  let container;

  beforeEach(() => {
    container = shallow(<RelatedCard />);
  });

  it('should render a <div />', () => {
    expect(container.find('div').length).toEqual(2);
  });

  it('should render the RelatedRating Component', () => {
    expect(container.containsMatchingElement(<RelatedRating />)).toEqual(true);
  });

  it('should render the Thumbnail Component', () => {
    expect(container.containsMatchingElement(<Thumbnail />)).toEqual(true);
  });
});
