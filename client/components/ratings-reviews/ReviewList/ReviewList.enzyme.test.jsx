/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import ReviewList from './ReviewList';
import ReviewTile from './ReviewTile';
import AverageRating from '../../shared/AverageRating';

configure({ adapter: new Adapter() });

describe('ReviewList Component Enzyme Tests', () => {
  let container;

  beforeEach(() => {
    container = shallow(<ReviewList />);
  });

  it('ReviewList should exist and render a div', () => {
    expect(container.find('div').length).toEqual(1);
  });

  it('should render the ReviewTile component', () => {
    expect(container.containsMatchingElement(<ReviewTile />)).toEqual(true);
  });

  it('ReviewList should have a button that shows more ReviewTiles', () => {
    expect(container.find('.show-more-reviews').length).toEqual(1);
  });

  it('ReviewList should be scrollable', () => {
    expect(container.find('div').length).toEqual(7);
  });

  it('Should display a button to submit a new review when none exist', () => {
    expect(container.find('div').length).toEqual(7);
  });
});

describe('ReviewTile Component Enzyme Test', () => {
  let container;

  beforeEach(() => {
    container = shallow(<ReviewTile />);
  });

  it('ReviewTile should exist and render a div', () => {
    expect(container.find('div').length).toEqual(1);
  });

  it('ReviewTile should contain AverageRating component', () => {
    expect(container.containsMatchingElement(<AverageRating />)).toEqual(true);
  });

  it('ReviewTile date should exist in format "Month DD, YYYY"', () => {
    expect(container.find('div').length).toEqual(7);
  });

  it('ReviewTile summary should exist with max length of 60 characters', () => {
    expect(container.find('div').length).toEqual(7);
  });
});
