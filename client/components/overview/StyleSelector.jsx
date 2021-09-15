import React from 'react';
import StyleEntry from './StyleEntry';

let key = 0;

const StyleSelector = ({ styles }) => (
  <div id="styles">{styles.results.map((style) => <StyleEntry style={style} key={key++} />)}</div>
);

export default StyleSelector;
