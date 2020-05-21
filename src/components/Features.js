import React from "react";
const featureItem = () => {
  const featureData = [
    {
      count: "01",
      title: " Track company-wide progress",
      summary:
        "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      count: "02",
      title: "Advanced built-in reports",
      summary:
        "Set internal delivery estimates and track progress toward company  goals. Our customisable dashboard helps you build out the reports  you need to keep key stakeholders informed.",
    },
    {
      count: "03",
      title: "Everything you need in one place",
      summary:
        "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];
  return (
    <div className="grid col-1 left ">
      {featureData.map((feature, indx) => {
        return (
          <div className="grid left feature-card-item" key={`feature-${indx}`}>
            <div className="feature-card-btn-title feature-card-btn-bg">
              <div className="btn btn--primary btn-sm feature-card-btn">
                {feature.count}
              </div>
            </div>
            <h4 className="feature-card-title feature-card-btn-title">
              {feature.title}
            </h4>
            <p className="feature-card-summary">{feature.summary}</p>
          </div>
        );
      })}
    </div>
  );
};

const Features = () => {
  return (
    <div className="container">
      <div className="center-col grid col-2 left features">
        <div className="grid col-1 left ">
          <h2>What’s different about Manage?</h2>
          <p className="feature-summary">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.{" "}
          </p>
        </div>
        {featureItem()}
      </div>
    </div>
  );
};

export default Features;
