import React from 'react';
import ReactDOM from 'react-dom';
import { VscChromeClose } from 'react-icons/vsc';

const Modal = ({ url, showModal, setModal }) => {
  if (!showModal) return null;
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="image-modal-container">
        <img className="image-modal" src={url} />
        <VscChromeClose className="modal-exit" onClick={() => setModal(false)} />
      </div>
    </div>,
    document.getElementById('portal'),
  );
};

export default Modal;