/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// The characteristics include Size, Width, Comfort, Quality, Length, and Fit.
const CharacterBars = ({ characters }) => {
  const availableCharacters = Object.keys(characters);
  const [showSize, setShowSize] = useState(false);
  const [sizeValue, setSizeValue] = useState(0);
  const [showWidth, setShowWidth] = useState(false);
  const [widthValue, setWidthValue] = useState(0);
  const [showComfort, setShowComfort] = useState(false);
  const [comfortValue, setComfortValue] = useState(0);
  const [showQuality, setShowQuality] = useState(false);
  const [qualityValue, setQualityValue] = useState(0);
  const [showFit, setShowFit] = useState(false);
  const [fitValue, setFitValue] = useState(0);
  const [showLength, setShowLength] = useState(false);
  const [lengthValue, setLengthValue] = useState(0);

  const convertValue = (val) => {
    const result = Math.round((Number(val) / 5) * 100);
    return result;
  };

  useEffect(() => {
    if (availableCharacters.indexOf('Size') !== -1) {
      const size = convertValue(characters.Size.value);
      setSizeValue(size);
      setShowSize(true);
    }
    if (availableCharacters.indexOf('Width') !== -1) {
      const width = convertValue(characters.Width.value);
      setWidthValue(width);
      setShowWidth(true);
    }
    if (availableCharacters.indexOf('Comfort') !== -1) {
      const comfort = convertValue(characters.Comfort.value);
      setComfortValue(comfort);
      setShowComfort(true);
    }
    if (availableCharacters.indexOf('Quality') !== -1) {
      const quality = convertValue(characters.Quality.value);
      setQualityValue(quality);
      setShowQuality(true);
    }
    if (availableCharacters.indexOf('Length') !== -1) {
      const length = convertValue(characters.Length.value);
      setLengthValue(length);
      setShowLength(true);
    }
    if (availableCharacters.indexOf('Fit') !== -1) {
      const fit = convertValue(characters.Fit.value);
      setFitValue(fit);
      setShowFit(true);
    }
  }, [availableCharacters]);
  // The characteristics include Size, Width, Comfort, Quality, Length, and Fit.
  return (
    <div>
      {showSize &&
        (
        <div className="product-size">
          <span style={{ fontWeight: 'bold' }}>Size</span>
          <div className="character-bar">
            <div className="character-pointer">
              <i className="fas fa-caret-down fa-2x" aria-hidden="true" style={{ paddingLeft: `${sizeValue}%` }} />
            </div>
          </div>
          <hr />
        </div>
        )}
      {showWidth &&
        (
        <div className="product-width">
          <span style={{ fontWeight: 'bold' }}>Width</span>
          <div className="character-bar">
            <div className="character-pointer">
              <i className="fas fa-caret-down fa-2x" aria-hidden="true" style={{ paddingLeft: `${widthValue}%` }} />
            </div>
          </div>
          <hr />
        </div>
        )}
      {showComfort &&
        (
        <div className="product-comfort">
          <span style={{ fontWeight: 'bold' }}>Comfort</span>
          <div className="character-bar">
            <div className="character-pointer">
              <i className="fas fa-caret-down fa-2x" aria-hidden="true" style={{ paddingLeft: `${comfortValue}%` }} />
            </div>
          </div>
          <hr />
        </div>
        )}
      {showQuality &&
        (
        <div className="product-quality">
          <span style={{ fontWeight: 'bold'}}>Quality</span>
          <div className="character-bar">
            <div className="character-pointer">
              <i className="fas fa-caret-down fa-2x" aria-hidden="true" style={{ paddingLeft: `${qualityValue}%` }} />
            </div>
          </div>
          <hr />
        </div>
        )}
      {showLength &&
        (
        <div className="product-length">
          <span style={{ fontWeight: 'bold' }}>Length</span>
          <div className="character-bar">
            <div className="character-pointer">
              <i className="fas fa-caret-down fa-2x" aria-hidden="true" style={{ paddingLeft: `${lengthValue}%` }} />
            </div>
          </div>
          <hr />
        </div>
        )}
      {showFit &&
        (
        <div className="product-fit">
          <span style={{ fontWeight: 'bold' }}>Fit</span>
          <div className="character-bar">
            <div className="character-pointer">
              <i className="fas fa-caret-down fa-2x" aria-hidden="true" style={{ paddingLeft: `${fitValue}%` }} />
            </div>
          </div>
          <hr />
        </div>
        )}
    </div>
  );
};

CharacterBars.propTypes = {
  characters: PropTypes.object.isRequired,
};

export default CharacterBars;
