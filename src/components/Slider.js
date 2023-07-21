import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


const Slider = ({
  slides,
  sliderTitle,
 }) => {
  
  const handleSlider = (e, swipeTypeLefttoRight) => {
    const slider = e.currentTarget.closest(".slider");
    const slides = slider.querySelectorAll(".slide");
    const currentSlide = slider.querySelector(".slide.show");
    const isNextBtn = e.currentTarget.classList.contains("-next");

    const toggleSlide = (slide) => {
      slide.classList.toggle("show");
    }

    if (isNextBtn || swipeTypeLefttoRight) {
      const nextSlide = currentSlide.nextElementSibling;
      const nextElementIsSlide = currentSlide.nextElementSibling;
      const firstSlide = slides[0];

      nextElementIsSlide ? toggleSlide(nextSlide) : toggleSlide(firstSlide);

      } else {
      const previousSlide = currentSlide.previousElementSibling;
      const previousElementIsSlide = currentSlide.previousElementSibling;
      const lastSlide = slides[slides.length - 1];

      previousElementIsSlide ? toggleSlide(previousSlide) : toggleSlide(lastSlide);
    }

    toggleSlide(currentSlide);
  } 

  // Mobile Swipe

  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 50 

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = (e) => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    const swipeTypeLefttoRight = isLeftSwipe && isRightSwipe === false;
    if (isLeftSwipe || isRightSwipe) handleSlider(e, swipeTypeLefttoRight);
  }
    return (
      <div className="slider" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        {slides.length && slides.length >= 2 ? 
        <button className="slider-btn round -previous" onClick={handleSlider}>
          <FaChevronLeft aria-hidden="true"/>
          <span className="visually-hidden">Previous Slide</span>
        </button> : ''}
          <div className="slider-container">
            {slides ? 
            slides.map((slide, index) => {
              return (
                <div key={index} className={(index === 0 ? "show" : "") + " slide"}> 
                  {slide.includes(".jpeg") || slide.includes(".jpg") ? 
                  <img className="slider-content -img" src={process.env.PUBLIC_URL + `/images/${slide}`} alt=""/>
                  : <div className="slider-content -text"><p>{slide}</p></div> }
                  <div className="slider-title">
                    <p>{sliderTitle} - {index + 1} / {slides.length}</p>
                  </div>
                </div>
              );
            })
            : ''}
          </div>
        {slides.length && slides.length >= 2 ? 
        <button className="slider-btn round -next" onClick={handleSlider}>
          <FaChevronRight aria-hidden="true"/>
          <span className="visually-hidden">Next Slide</span>
        </button> : ''}
      </div>
    )
}

export default Slider;