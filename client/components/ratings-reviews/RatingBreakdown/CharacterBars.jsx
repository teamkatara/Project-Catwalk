/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// The characteristics include Size, Width, Comfort, Quality, Length, and Fit.
const CharacterBars = ({ characters }) => {
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
    if (characters.Size) {
      const size = convertValue(characters.Size.value);
      setSizeValue(size);
      setShowSize(true);
    }
    if (characters.Width) {
      const width = convertValue(characters.Width.value);
      setWidthValue(width);
      setShowWidth(true);
    }
    if (characters.Comfort) {
      const comfort = convertValue(characters.Comfort.value);
      setComfortValue(comfort);
      setShowComfort(true);
    }
    if (characters.Quality) {
      const quality = convertValue(characters.Quality.value);
      setQualityValue(quality);
      setShowQuality(true);
    }
    if (characters.Length) {
      const length = convertValue(characters.Length.value);
      setLengthValue(length);
      setShowLength(true);
    }
    if (characters.Fit) {
      const fit = convertValue(characters.Fit.value);
      setFitValue(fit);
      setShowFit(true);
    }
  }, [characters]);
  // The characteristics include Size, Width, Comfort, Quality, Length, and Fit.
  return (
    <div>
      {showSize &&
        (
        <div className="product-size">
          <span style={{ fontWeight: 'normal' }}>Size</span>
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
          <span style={{ fontWeight: 'normal' }}>Width</span>
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
          <span style={{ fontWeight: 'normal' }}>Comfort</span>
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
          <span style={{ fontWeight: 'normal'}}>Quality</span>
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
          <span style={{ fontWeight: 'normal ' }}>Length</span>
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
          <span style={{ fontWeight: 'normal' }}>Fit</span>
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
