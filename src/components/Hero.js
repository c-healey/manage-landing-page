import React from "react";

class Hero extends React.Component {
  render() {
    return (
      <div className="container ">
        <div className="center-col grid col-2 left hero">
          <div className="grid left-mobile-center hero-col-1">
            <h1>Bring everyone together to build better products.</h1>
            <p className="p-large">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>

            <a className=" btn btn--primary" href="./">
              Get Started
            </a>
          </div>

          <div className="hero-col-2">
            <img
              className="bg-img"
              src="./images/illustration-intro.svg"
              alt="mockup of devices"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Hero;
