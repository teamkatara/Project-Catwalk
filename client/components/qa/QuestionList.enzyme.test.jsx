/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import QuestionList from './QuestionList';
import Question from './Question';
import Modal from './Modal';

// import mockReviewMeta from '../../../mock-data/sample-review-meta.json';

configure({ adapter: new Adapter() });

describe('QuestionList Component Enzyme Tests', () => {
  let container;

  beforeEach(() => {
    container = shallow(<QuestionList />);
  });

  it('should render a <div />', () => {
    expect(container.find('div').length).toEqual(2);
  });

  it('should render at least one Question Component', () => {
    expect(container.containsMatchingElement(<Question />))
      .toEqual(true);
  });

  it('should render the Modal Component', () => {
    expect(container.containsMatchingElement(<Modal />))
      .toEqual(true);
  });
});
