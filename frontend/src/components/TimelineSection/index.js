import React from "react";
import "./index.css";

const items = [
  {
    title: "Ready to Go Algos",
    description:
      "We have ready accelerators embedded with learnings from hundreds of past projects, generating actionable results.",
    icon: "➡️",
  },
  {
    title: "Internal capability building",
    description:
      "We productize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them.",
    icon: "📦",
  },
  {
    title: "Multi-source data",
    description:
      "Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.",
    icon: "🗃️",
  },
  {
    title: "Stakeholder alignment",
    description:
      "Stakeholders understand the “how”, “so what” and “now what”, leading to clear decision-making trade offs.",
    icon: "🧑‍💼",
  },
  {
    title: "Continuous engagement",
    description:
      "We engage in the long-term to enhance, course-correct, and adopt new models to continuously refine your work.",
    icon: "🔄",
  },
];

const TimelineSection = () => {
  return (
    <section className="timeline-container">
      <div className="timeline-grid">
        {/* Top Row */}
        <div className="top-row">
          <div className="timeline-card">{items[0] && (
            <>
              <div className="icon-bubble">{items[0].icon}</div>
              <h3>{items[0].title}</h3>
              <p>{items[0].description}</p>
            </>
          )}</div>

          <div className="timeline-card">{items[1] && (
            <>
              <div className="icon-bubble">{items[1].icon}</div>
              <h3>{items[1].title}</h3>
              <p>{items[1].description}</p>
            </>
          )}</div>
        </div>

        {/* Timeline Dots */}
        <div className="timeline-track">
          <div className="dot active" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>

        {/* Bottom Row */}
        <div className="bottom-row">
          <div className="timeline-card">{items[2] && (
            <>
              <div className="icon-bubble">{items[2].icon}</div>
              <h3>{items[2].title}</h3>
              <p>{items[2].description}</p>
            </>
          )}</div>

          <div className="timeline-card">{items[3] && (
            <>
              <div className="icon-bubble">{items[3].icon}</div>
              <h3>{items[3].title}</h3>
              <p>{items[3].description}</p>
            </>
          )}</div>

          <div className="timeline-card">{items[4] && (
            <>
              <div className="icon-bubble">{items[4].icon}</div>
              <h3>{items[4].title}</h3>
              <p>{items[4].description}</p>
            </>
          )}</div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
