import React from 'react';
import StyleEntry from './StyleEntry';

let key = 0;

const StyleSelector = ({ styles }) => (
  <div>{styles.results.map((style) => <StyleEntry style={style} key={key++} />)}</div>
);

export default StyleSelector;
