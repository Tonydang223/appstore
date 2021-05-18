import React from "react";
import "./style.scss";
const Modal = ({ hideModal, toggleModal, children, headline }) => {
  if (hideModal) return null;

  return [
    <div className="modalOverlay" onClick={() => toggleModal()} />,
    <div className="modalWrap">
      <div className="modal">
        <p>{headline}</p>
        {children}
      </div>
    </div>,
  ];
};

export default Modal;
