/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import QuestionList from './QuestionList';
import Question from './Question';

configure({ adapter: new Adapter() });

describe('Question and Answer Component Enzyme Tests', () => {
  let container;

  beforeEach(() => {
    container = shallow(<QuestionList />);
  });

  it('should render a <div />', () => {
    expect(container.contains(<Question />).toEqual(true));
  });

  it('should render the Add Review Component', () => {
    expect(container.containsMatchingElement(<QuestionList />)).toEqual(true);
  });
});
