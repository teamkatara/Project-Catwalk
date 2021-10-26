/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import RatingsReviewsWidget from './RatingsReviewsWidget';
import AddReview from './NewReview/AddReview';
import Sort from './Sort';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown';
import ReviewList from './ReviewList/ReviewList';

// import mockReviewMeta from '../../../mock-data/sample-review-meta.json';

configure({ adapter: new Adapter() });

describe('RatingsReviewsWidget Component Enzyme Tests', () => {
  let container;

  beforeEach(() => {
    container = shallow(<RatingsReviewsWidget />);
  });

  it('should render a <div />', () => {
    expect(container.find('div').length).toEqual(4);
  });

  it('should render the AddReview Component', () => {
    expect(container.containsMatchingElement(<AddReview />))
      .toEqual(true);
  });

  it('should render the Sort Component', () => {
    expect(container.containsMatchingElement(<Sort />))
      .toEqual(true);
  });

  it('should render the RatingBreakdown Component', () => {
    expect(container.containsMatchingElement(<RatingBreakdown />))
      .toEqual(true);
  });

  it('should render the ReviewList Component', () => {
    expect(container.containsMatchingElement(<ReviewList />)).toEqual(true);
  });
});
