/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NewReview from './NewReview';

describe('NewReview React-Testing-Library Tests', () => {
  render(<NewReview />);
  // screen.debug() will print the html of the component to the console
  // screen.debug();
  it('Add Review Button should exist', () => {
    // const addReview = screen.getByText(/Add Review/i);
    const addReview = screen.getByRole('button');
    expect(addReview).toBeInTheDocument();
  });
  // TODO - Using user events click on the AddReview component and check screen for ReviewForm
});
