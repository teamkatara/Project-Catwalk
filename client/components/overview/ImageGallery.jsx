import React from 'react';

const ImageGallery = ({ photos, current, setCurrent, yPos }) => (
  // <div className="image-gallery">
  //   <div id="image-gallery">
  //     {photos.map((photo, i) => i === current
  //       ? <div onClick={() => setCurrent(i)} className="photo-container"><img className="photo-entry selected" src={photo.thumbnail_url} /></div>
  //       : <div onClick={() => setCurrent(i)} className="photo-container"><img className="photo-entry" src={photo.thumbnail_url} /></div>)}
  //   </div>
  // </div>

  <div className="image-gallery">
    <div id="image-gallery" style={ {transform: `translateY(${yPos}px)`} }>
      {photos.map((photo, i) => i === current
        ? <img onClick={() => setCurrent(i)} className="photo-entry selected" src={photo.thumbnail_url} alt="" />
        : <img onClick={() => setCurrent(i)} className="photo-entry" src={photo.thumbnail_url} alt="" />)}
    </div>
  </div>
);

export default ImageGallery;
