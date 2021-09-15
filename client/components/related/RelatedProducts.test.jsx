/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import RelatedProductsWidget from './RelatedProductsWidget';
import RelatedCard from './RelatedCard';

configure({ adapter: new Adapter() });

describe('RelatedProducts Component Enzyme Tests', () => {
  let container;

  beforeEach(() => {
    container = shallow(<RelatedProductsWidget />);
  });

  it('should render a <div />', () => {
    expect(container.find('div').length).toEqual(1);
  });

  it('should render the RelatedCard Component', () => {
    expect(container.containsMatchingElement(<RelatedCard />)).toEqual(true);
  });
});
