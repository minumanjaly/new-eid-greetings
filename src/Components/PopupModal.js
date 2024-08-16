// PopupModal.js
import React from 'react';
import './PopupModal.css'; // Ensure CSS is imported

const PopupModal = ({ isOpen, onClose, message, onOk }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-modal1" onClick={onClose}>
      <div
        className="popup-content1"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <p className="popup-message1">{message}</p>
        <div className="popup-buttons1">
          <button onClick={onOk} className="popup-button1">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
