import React from "react";

let activeCardIdx = 1;
let totalSlides = 1;
const showSlides = (slideIdx) => {
  console.log("showSlides idx = ", slideIdx);
  let slide = document.querySelector(`.slide-show-slide-${slideIdx}`);
  console.log(slide);
  if (slide) {
    slide.classList.toggle("slide-show-slide-active");
  }

  if (slideIdx < totalSlides) {
    let right = document.querySelector(`.slide-show-slide-${slideIdx + 1}`);
    if (right) {
      right.classList.toggle("slide-show-slide-right");
    }
  }

  if (slideIdx > 0) {
    let left = document.querySelector(`.slide-show-slide-${slideIdx - 1}`);
    if (left) {
      left.classList.toggle("slide-show-slide-left");
    }
  }
};
const toggleClass = (slideIdx) => {
  document
    .querySelector(`.dot-${slideIdx}`)
    .classList.toggle("slide-show-dot-active");

  document
    .querySelector(`.slide-show-slide-${slideIdx}`)
    .classList.toggle("slide-show-slide-active");

  let right = document.querySelector(`.slide-show-slide-right`);
  if (right) {
    right.classList.toggle("slide-show-slide-right");
  }
  console.log("slideidx = ", slideIdx, "totalslides = ", totalSlides);
  if (slideIdx < totalSlides - 1) {
    right = document.querySelector(`.slide-show-slide-${slideIdx + 1}`);
    // right.classList.toggle("hide");
    right.classList.toggle("slide-show-slide-right");
  }
  let left = document.querySelector(`.slide-show-slide-left`);
  if (left) {
    left.classList.toggle("slide-show-slide-left");
  }
  if (slideIdx > 0) {
    left = document.querySelector(`.slide-show-slide-${slideIdx - 1}`);
    // left.classList.toggle("hide");
    left.classList.toggle("slide-show-slide-left");
  }
};
const setActiveSlider = (activeCardIndex) => {
  let currentActiveIdx = activeCardIdx;
  console.log("setActiveSlider typeof param", typeof activeCardIndex);
  if (typeof activeCardIndex === "string") {
    activeCardIndex =
      activeCardIndex === "right" ? activeCardIdx + 1 : activeCardIdx - 1;
  }
  console.log("setActiveSlider typeof param", typeof activeCardIndex);

  activeCardIdx =
    activeCardIndex >= totalSlides
      ? totalSlides - 1
      : activeCardIndex < 0
      ? 0
      : activeCardIndex;

  console.log("activecardidx = ", activeCardIdx);
  if (currentActiveIdx !== activeCardIdx) {
    toggleClass(currentActiveIdx);
    toggleClass(activeCardIdx);
  }
};
const renderArrow = (direction) => {
  return (
    <div
      className={`arrow-${direction}`}
      onClick={() => setActiveSlider(direction)}
    ></div>
  );
};
const renderSliderControls = () => {
  let dots = [];
  for (let i = 0; i < totalSlides; i++) {
    let classes = `dot slide-show-dot dot-${i} ${
      i === activeCardIdx ? "slide-show-dot-active" : ""
    }`;
    dots.push(
      <div
        className={classes}
        key={`slide-show-dot-${i}`}
        onClick={() => setActiveSlider(i)}
      ></div>
    );
  }

  return (
    <div className="slide-show-slider-controls full-width grid center">
      {renderArrow("left")}

      {dots}
      {renderArrow("right")}
    </div>
  );
};

class SlideShow extends React.Component {
  componentDidMount() {
    showSlides(1);
  }
  render() {
    totalSlides = this.props.children.length;
    activeCardIdx = this.props.children.length > 1 ? 1 : 0;
    console.log(activeCardIdx);
    return (
      <div className={`grid  center slide-show-${this.props.slidesVisible}`}>
        {this.props.children}

        {renderSliderControls(totalSlides, this.props.slidesVisible)}
        {/* {showSlides(activeCardIdx)} */}
      </div>
    );
  }
}
export default SlideShow;
