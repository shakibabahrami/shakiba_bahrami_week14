import React from 'react'
// import Styles from "./Modal.module.css";

function Modal() {
    if(!isOpen) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>{title}</h3>
        <div className="modal-content">{children}</div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default Modal