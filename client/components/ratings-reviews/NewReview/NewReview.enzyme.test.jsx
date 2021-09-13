/* eslint-disable no-undef */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import NewReview from './NewReview';
import AddReview from './AddReview';

configure({ adapter: new Adapter() });

describe('NewReview Component Enzyme Tests', () => {
  let container;

  beforeEach(() => {
    container = shallow(<NewReview />);
  });

  it('should render a <div />', () => {
    expect(container.find('div').length).toEqual(1);
  });

  it('should render the Add Review Component', () => {
    expect(container.containsMatchingElement(<AddReview />)).toEqual(true);
  });
  // TODO - Should render the review form once the AddReview component is clicked
});
