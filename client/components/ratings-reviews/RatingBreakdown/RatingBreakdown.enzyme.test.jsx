/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import RatingBreakdown from './RatingBreakdown';
import RatingSummary from './RatingSummary';
import AverageRating from '../../shared/AverageRating';

import mockReviewMeta from '../../../mock-data/sample-review-meta.json';

configure({ adapter: new Adapter() });

describe('RatingBreakdown Component Enzyme Tests', () => {
  let container;

  beforeEach(() => {
    container = shallow(<RatingBreakdown reviewMeta={mockReviewMeta} />);
  });

  it('should render a <div />', () => {
    expect(container.find('div').length).toEqual(4);
  });

  it('should render the RatingSummary Component', () => {
    expect(container.containsMatchingElement(<RatingSummary average={3.5} recNum={100} />))
      .toEqual(true);
  });
});

describe('RatingSummary Enzyme Tests', () => {
  // eslint-disable-next-line no-unused-vars
  let container;

  beforeEach(() => {
    container = shallow(<RatingSummary />);
  });

  it('should contain AverageRating component', () => {
    // TODO - Star Icons exist inside RatingSummary component
    expect(container.containsMatchingElement(<AverageRating />)).toEqual(true);
  });

  it('should contain text representing the average review', () => {
    // TODO - Review Average (Number) exists inside RatingSummary component
    expect(container.find('.rating-summary-number').length).toEqual(1);
  });

  it('should contain text displaying the total amount of reviews for product', () => {
    expect(container.find('.rating-summary-total').length).toEqual(1);
  });
});
