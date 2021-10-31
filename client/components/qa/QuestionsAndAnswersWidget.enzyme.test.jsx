/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import QuestionsAndAnswersWidget from './QuestionsAndAnswersWidget';
import QuestionList from './QuestionList';

// import mockReviewMeta from '../../../mock-data/sample-review-meta.json';

configure({ adapter: new Adapter() });

describe('QuestionsAndAnswersWidget Component Enzyme Tests', () => {
  let container;

  beforeEach(() => {
    container = shallow(<QuestionsAndAnswersWidget />);
  });

  it('should render a <div />', () => {
    expect(container.find('div').length).toEqual(2);
  });

  it('should render the QuestionList Component', () => {
    expect(container.containsMatchingElement(<QuestionList />))
      .toEqual(true);
  });
});
