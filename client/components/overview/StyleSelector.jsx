import React from 'react';
import StyleEntry from './StyleEntry';

let key = 0;

const StyleSelector = ({ styles, selectedStyle, selectStyle }) => (
  <div>
    <div><strong>STYLE ></strong> {selectedStyle.name}</div>
    <div id="styles">{styles.results.map((style) => <StyleEntry selectedId={selectedStyle.style_id} selectStyle={selectStyle} style={style} key={key++} />)}</div>
  </div>
);

export default StyleSelector;
