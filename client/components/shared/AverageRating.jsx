/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import OneStar from '../../assets/star-svg/ratings/one.svg';
import OneOneQuarterStar from '../../assets/star-svg/ratings/one-one-quarter.svg';
import OneHalfStar from '../../assets/star-svg/ratings/one-half.svg';
import OneThreeQuarterStar from '../../assets/star-svg/ratings/one-three-quarter.svg';
import TwoStar from '../../assets/star-svg/ratings/two.svg';
import TwoOneQuarterStar from '../../assets/star-svg/ratings/two-one-quarter.svg';
import TwoHalfStar from '../../assets/star-svg/ratings/two-half.svg';
import TwoThreeQuarterStar from '../../assets/star-svg/ratings/two-three-quarter.svg';
import ThreeStar from '../../assets/star-svg/ratings/three.svg';
import ThreeOneQuarterStar from '../../assets/star-svg/ratings/three-one-quarter.svg';
import ThreeHalfStar from '../../assets/star-svg/ratings/three-half.svg';
import ThreeThreeQuarterStar from '../../assets/star-svg/ratings/three-three-quarter.svg';
import FourStar from '../../assets/star-svg/ratings/four.svg';
import FourOneQuarterStar from '../../assets/star-svg/ratings/four-one-quarter.svg';
import FourHalfStar from '../../assets/star-svg/ratings/four-half.svg';
import FourThreeQuarterStar from '../../assets/star-svg/ratings/four-three-quarter.svg';
import FiveStar from '../../assets/star-svg/ratings/five.svg';

// average should be a number with no more than two digits after the decimal

const AverageRating = ({ average }) => {
  if (average <= 1) {
    return (<OneStar />);
  }
  if (average > 1 && average <= 1.39) {
    return (<OneOneQuarterStar />);
  }
  if (average > 1.39 && average <= 1.69) {
    return (<OneHalfStar />);
  }
  if (average > 1.69 && average <= 1.99) {
    return (<OneThreeQuarterStar />);
  }
  if (average > 1.99 && average <= 2.1) {
    return (<TwoStar />);
  }
  if (average > 2.1 && average <= 2.39) {
    return (<TwoOneQuarterStar />);
  }
  if (average > 2.39 && average <= 2.69) {
    return (<TwoHalfStar />);
  }
  if (average > 2.69 && average <= 2.99) {
    return (<TwoThreeQuarterStar />);
  }
  if (average > 2.99 && average <= 3.1) {
    return (<ThreeStar />);
  }
  if (average > 3.1 && average <= 3.39) {
    return (<ThreeOneQuarterStar />);
  }
  if (average > 3.39 && average <= 3.69) {
    return (<ThreeHalfStar />);
  }
  if (average > 3.69 && average <= 3.99) {
    return (<ThreeThreeQuarterStar />);
  }
  if (average > 3.99 && average <= 4.1) {
    return (<FourStar />);
  }
  if (average > 4.1 && average <= 4.39) {
    return (<FourOneQuarterStar />);
  }
  if (average > 4.39 && average <= 4.69) {
    return (<FourHalfStar />);
  }
  if (average > 4.69 && average <= 4.99) {
    return (<FourThreeQuarterStar />);
  }
  return (<FiveStar />);
};

AverageRating.propTypes = {
  average: PropTypes.number.isRequired,
};

export default AverageRating;
