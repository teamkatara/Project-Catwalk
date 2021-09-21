import React from 'react';

const StyleEntry = ({ style, selectStyle, selectedId }) => (
  <div>
    {style.style_id === selectedId && <div id="checkmark-container"><div id="checkmark">✓</div><img className="style-entry" onClick={() => selectStyle(style)} src={style.photos[0].url} /></div>}
    {style.style_id !== selectedId && <img className="style-entry" onClick={() => selectStyle(style)} src={style.photos[0].url} />}
  </div>
);

export default StyleEntry;
