import React from 'react'
import Slider from "./Slider";
import { FaXmark } from "react-icons/fa6";

const Modal = ({
  destination
 }) => {
  const handleModalBtnClose = (e) => {
    e.currentTarget.closest(".modal-wrapper").classList.remove("modal-open");
  }
 
    return (
      <div className="modal-wrapper">
        <div className="modal-btn-container">
          <button className="round" aria-label="Close" onClick={handleModalBtnClose}><FaXmark/></button>
        </div>
        <div className="modal">
          <div className="modal-container">
            <div className="modal-content">
              {destination.slides ? 
                <>
                  <Slider slides={destination.slides} slidetitle={destination.title} slidecountry={destination.country.name}  />
                </>
              : '' }
            </div>

          </div>
        </div>
      </div>
    )
}

export default Modal;