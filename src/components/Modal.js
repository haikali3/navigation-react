import React from 'react';

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.onClose}>
          &times;
        </span>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
