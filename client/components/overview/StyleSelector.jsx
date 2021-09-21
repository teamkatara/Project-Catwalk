import React from 'react';
import StyleEntry from './StyleEntry';

let key = 0;

const StyleSelector = ({ styles, clickedStyle, selectStyle }) => (
  <div>
    <div><strong>STYLE: </strong> {clickedStyle.name}</div>
    <div id="styles">{styles.results.map((style) => <StyleEntry selectedId={clickedStyle.style_id} selectStyle={selectStyle} style={style} key={key++} />)}</div>
  </div>
);

export default StyleSelector;
