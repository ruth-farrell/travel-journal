import { useState, type TouchEvent, type MouseEvent } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import FallbackImage from "./FallbackImage";

interface SliderProps {
  slides: string[];
  sliderTitle: string;
}

const Slider = ({ slides, sliderTitle }: SliderProps) => {
  const handleSlider = (event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLDivElement>, swipeTypeLefttoRight?: boolean) => {
    const slider = event.currentTarget.closest(".slider");
    if (!slider) {
      return;
    }

    const slideElements = slider.querySelectorAll(".slide");
    const currentSlide = slider.querySelector(".slide.show");
    if (!currentSlide) {
      return;
    }

    const isNextBtn =
      event.currentTarget instanceof HTMLButtonElement ? event.currentTarget.classList.contains("-next") : false;

    const toggleSlide = (slide: Element | null) => {
      if (slide) {
        slide.classList.toggle("show");
      }
    };

    if (isNextBtn || swipeTypeLefttoRight) {
      const nextSlide = currentSlide.nextElementSibling;
      const firstSlide = slideElements[0];
      toggleSlide(nextSlide ?? firstSlide);
    } else {
      const previousSlide = currentSlide.previousElementSibling;
      const lastSlide = slideElements[slideElements.length - 1];
      toggleSlide(previousSlide ?? lastSlide);
    }

    toggleSlide(currentSlide);
  };

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(event.targetTouches[0].clientX);
  };

  const onTouchMove = (event: TouchEvent<HTMLDivElement>) => setTouchEnd(event.targetTouches[0].clientX);

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (!touchStart || !touchEnd) {
      return;
    }
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    const swipeTypeLefttoRight = isLeftSwipe && isRightSwipe === false;
    if (isLeftSwipe || isRightSwipe) {
      handleSlider(event, swipeTypeLefttoRight);
    }
  };

  return (
    <div className="slider" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      {slides.length >= 2 ? (
        <button className="slider-btn round -previous" onClick={handleSlider}>
          <FaChevronLeft aria-hidden="true" />
          <span className="visually-hidden">Previous Slide</span>
        </button>
      ) : (
        ""
      )}
      <div className="slider-container">
        {slides
          ? slides.map((slide, index) => {
              return (
                <div key={index} className={(index === 0 ? "show" : "") + " slide"}>
                  {slide.includes(".jpeg") || slide.includes(".jpg") ? (
                    <FallbackImage className="slider-content -img" src={process.env.PUBLIC_URL + `/images/${slide}`} alt="" />
                  ) : (
                    <div className="slider-content -text">
                      <p>{slide}</p>
                    </div>
                  )}
                  <div className="slider-title">
                    <p>
                      {sliderTitle} - {index + 1} / {slides.length}
                    </p>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
      {slides.length >= 2 ? (
        <button className="slider-btn round -next" onClick={handleSlider}>
          <FaChevronRight aria-hidden="true" />
          <span className="visually-hidden">Next Slide</span>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Slider;
