import React from 'react';

const Thumbnail = () => {
  const Star = <button type="button">*</button>;
  // const Star = React.createElement('button', {type: 'button'}, 'Star');
  return (
    <div className="thumbnail">
      <div className="star-button">
        {Star}
      </div>
    </div>
  );
};

export default Thumbnail;
