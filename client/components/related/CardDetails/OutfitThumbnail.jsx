import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({
  id, image, updateProductId, click,
}) => {
  const [clicked, setClick] = useState(false);

  const onClick = () => {
    if (clicked === false) {
      setClick(true);
      click();
    }
  };

  const Remove = (
    <button type="button" className="button-style" onClick={onClick}>
      <i className="fas fa-times star-image" />
    </button>
  );

  // const Star = React.createElement('button', {type: 'button'}, 'Star');
  return (
    <div className="star-container">
      <div className="star-button">
        {Remove}
      </div>
      <div
        onClick={() => updateProductId(id)}
        className="thumbnail"
        style={{ backgroundImage: `url(${image})` }}
      >
      </div>
    </div>
  );
};

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  updateProductId: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired,
};

export default Thumbnail;
