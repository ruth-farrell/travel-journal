import React from 'react'

const Slider = ({
  slides,
  slidetitle,
  slidecountry,
 }) => {

  const handleSlider = (e) => {
    const slider = e.currentTarget.closest(".slider");
    const slides = slider.querySelectorAll(".slide");
    const currentSlide = slider.querySelector(".slide.show");
    const isNextBtn = e.currentTarget.firstElementChild.classList.contains("fa-chevron-right");

    const toggleSlide = (slide) => {
      slide.classList.toggle("show");
    }

    if (isNextBtn) {
      const nextSlide = currentSlide.nextElementSibling;
      const nextElementIsSlide = currentSlide.nextElementSibling.classList.contains('slide');
      const firstSlide = slides[0];

      nextElementIsSlide ? toggleSlide(nextSlide) : toggleSlide(firstSlide);
      } else {
      const previousSlide = currentSlide.previousElementSibling;
      const previousElementIsSlide = currentSlide.previousElementSibling.classList.contains('slide');
      const lastSlide = slides[slides.length - 1];

      previousElementIsSlide ? toggleSlide(previousSlide) : toggleSlide(lastSlide);
      }

    toggleSlide(currentSlide);
  } 
    return (
      <div className="slider">
        {slides.length && slides.length >= 2 ? <button className="slider-btn round -previous" aria-label="Previous Slide" onClick={handleSlider}><i className="fa-solid fa-chevron-left" aria-hidden="true"></i></button> : ''}
          {slides ? 
          slides.map((slide, index) => {
            return (
              <React.Fragment key={index}>
              <div className={(index === 0 ? "show" : "") + " slide"}> 
                {slide.includes(".jpeg") || slide.includes(".jpg") ? 
                <img className="slider-content -img" src={process.env.PUBLIC_URL + `/images/${slide}`} alt=""/>
                : <div className="slider-content -text"><p>{slide}</p></div> }
                <div className="slider-destination-info">
                  <p>{slidecountry} : {slidetitle} : {index + 1} / {slides.length}</p>
                </div>
              </div> 
              </React.Fragment>
            );
          })
          : ''}
        {slides.length && slides.length >= 2 ? <button className="slider-btn round -next" aria-label="Next Slide" onClick={handleSlider}><i className="fa-solid fa-chevron-right" aria-hidden="true"></i></button> : ''}
      </div>
    )
}

export default Slider;