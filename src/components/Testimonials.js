import React from "react";
import SlideShow from "./SlideShow";

const testimonialData = [
  {
    avatar: "./images/avatar-anisha.png",
    name: "Anisha Li",
    summary:
      "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
  },
  {
    avatar: "./images/avatar-ali.png",
    name: "Ali Bravo",
    summary:
      "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
  },
  {
    avatar: "./images/avatar-richard.png",
    name: "Richard Watts",
    summary:
      "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
  },
  {
    avatar: "./images/avatar-shanai.png",
    name: "Shanai Gough",
    summary:
      "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
  },
];
const sliderControls = {
  width: "full-width",
  overflow: "hidden",
  slidesVisible: 3,
  totalSlides: testimonialData.length,
};
let activeCardIdx = Math.ceil(sliderControls.slidesVisible / 2) - 1;
const testimonialCard = () => {
  console.log("activeCard = ", activeCardIdx);
  return testimonialData.map((testimonial, indx) => {
    // let classes =
    //   indx === activeCardIdx - 1 || indx === activeCardIdx + 1
    //     ? "grid col-1 center bg-lt-gray testimonial-card visible"
    //     : indx === activeCardIdx
    //     ? "grid col-1 center bg-lt-gray testimonial-card active"
    //     : "grid col-1 center bg-lt-gray testimonial-card hide";

    return (
      <div
        className={`grid col-1 center bg-lt-gray testimonial-card slide-show-slide slide-show-slide-${indx}`}
        key={`testimonial-${indx}`}
      >
        <img
          className="testimonial-card-avatar"
          src={testimonial.avatar}
          alt={`${testimonial.name} avatar`}
        />
        <h4>{testimonial.name}</h4>
        <p>{testimonial.summary}</p>
      </div>
    );
  });
};

const Testimonials = () => {
  return (
    <div className="grid col-1 center testimonials">
      <h2 className="full-width">What they’ve said</h2>
      <SlideShow slidesVisible={3}>{testimonialCard()}</SlideShow>

      <div className="full-width btn btn--primary">Get Started</div>
    </div>
  );
};
export default Testimonials;
