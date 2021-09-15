import React from 'react';

const StyleEntry = ({ style }) => (
  <img class="style-entry" src={style.photos[0].url} />
);

export default StyleEntry;
