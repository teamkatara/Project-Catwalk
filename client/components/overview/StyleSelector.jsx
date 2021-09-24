import React from 'react';
import StyleEntry from './StyleEntry.jsx';

let key = 0;

const StyleSelector = ({ styles, clickedStyle, selectStyle, color }) => (
  <div>
    <div><strong>STYLE: </strong> {clickedStyle.name}</div>
    <div id="styles">{styles.results.map((style) => <StyleEntry selectedId={clickedStyle.style_id} selectStyle={selectStyle} style={style} key={key++} color={color} />)}</div>
  </div>
);

export default StyleSelector;
