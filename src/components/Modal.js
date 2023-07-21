import React from 'react'
import { FaXmark } from "react-icons/fa6";

const Modal = ({
  children
 }) => {

  const handleModalBtnClose = (e) => {
    e.currentTarget.closest(".modal").classList.remove("modal-open");
  }
 
    return (
      <div className="modal">
        <div className="modal-btn-container">
          <button className="round" onClick={handleModalBtnClose}>
            <FaXmark aria-hidden="true"/>
            <span className="visually-hidden">Close Modal</span>
          </button>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    )
}

export default Modal;