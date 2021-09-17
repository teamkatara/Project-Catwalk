import React, { useState } from 'react';
import Modal from './Modal';

const Thumbnail = () => {
  const [show, setShow] = useState(false);

  const onClick = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
    console.log(show);
  };

  const Star = (
    <button type="button" className="button-style" onClick={onClick}>
      <img src="https://www.pngkit.com/png/full/437-4372254_star-outline-comments-empty-star.png" alt="empty star" style={{ height: 20, width: 20 }} />
    </button>
  );

  // const Star = React.createElement('button', {type: 'button'}, 'Star');
  return (
    <div className="thumbnail">
      <div className="star-button">
        {Star}
      </div>
      <Modal show={show} />
    </div>
  );
};

export default Thumbnail;
