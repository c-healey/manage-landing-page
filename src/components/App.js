import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Features from "./Features";
// import SlideShow from "./SlideShow";
import Testimonials from "./Testimonials";
import FooterCTA from "./FooterCTA";
import Footer from "./Footer";

import "../sass/main.scss";

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Features />
      {/* <SlideShow slidesVisible={3}>
        <div className="slide-show-slide slide-show-slide-0 ">hello 0</div>
        <div className="slide-show-slide slide-show-slide-1 ">hello 1</div>
        <div className="slide-show-slide slide-show-slide-2 ">hello 2</div>
        <div className="slide-show-slide slide-show-slide-3 ">hello 3</div>
        <div className="slide-show-slide slide-show-slide-4 ">hello 4</div>
        <div className="slide-show-slide slide-show-slide-5 ">hello 5</div>
      </SlideShow> */}
      <Testimonials />
      <FooterCTA />
      <Footer />
    </div>
  );
};
export default App;
