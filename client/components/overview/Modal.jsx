import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { VscChromeClose } from 'react-icons/vsc';
import { BsDot } from 'react-icons/bs';

const Modal = ({ url, showModal, setModal, photos, setCurrent, current }) => {
  const [modalUrl, setModalUrl] = useState(url);

  const setBoth = (photo, i) => {
    setCurrent(i);
    setModalUrl(photo.url);
  };

  if (!showModal) return null;
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="bs-dot-container">
        {photos.map((photo, i) => i === current
        ? <BsDot onClick={() => setBoth(photo, i)} className="bs-dot selected" />
        : <BsDot onClick={() => setBoth(photo, i)} className="bs-dot" />)}
      </div>
      <div className="image-modal-container">
        <img className="image-modal" src={url} alt="" />
        <VscChromeClose className="modal-exit" onClick={() => setModal(false)} />
      </div>
    </div>,
    document.getElementById('portal'),
  );
};

export default Modal;
