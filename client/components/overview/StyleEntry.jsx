import React from 'react';

const StyleEntry = ({ style, selectStyle, selectedId, color }) => (
  <div>
    {style.style_id === selectedId && <div id="checkmark-container"><div id="checkmark">✓</div><img className="style-entry" style={ {borderColor: color} } onClick={() => selectStyle(style)} src={style.photos[0].url} alt="" /></div>}
    {style.style_id !== selectedId && <img className="style-entry" style={ {borderColor: color} }onClick={() => selectStyle(style)} src={style.photos[0].url} alt="" />}
  </div>
);

export default StyleEntry;
