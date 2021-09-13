/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NewReview from './NewReview';
import AddReview from './AddReview';

describe('NewReview React-Testing-Library Tests', () => {
  render(<NewReview />);
  // screen.debug() will print the html of the component to the console
  // screen.debug();
  const addReview = screen.getByRole('button');
  expect(addReview).toBeInTheDocument();
  // TODO - Using user events click on the AddReview component and check screen for ReviewForm
});
