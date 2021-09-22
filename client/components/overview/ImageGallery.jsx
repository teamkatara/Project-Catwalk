import React from 'react';

const ImageGallery = ({ photos, current, setCurrent }) => (
  <div className="image-gallery">
    <div id="image-gallery">
      {photos.map((photo, i) => i === current
        ? <div onClick={() => setCurrent(i)} className="photo-container selected"><img className="photo-entry" src={photo.thumbnail_url} /></div>
        : <div onClick={() => setCurrent(i)} className="photo-container"><img className="photo-entry" src={photo.thumbnail_url} /></div>)}
    </div>
  </div>
);

export default ImageGallery;
