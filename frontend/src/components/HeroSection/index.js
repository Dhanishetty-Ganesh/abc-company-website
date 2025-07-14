import React, { useEffect, useState } from "react";
import "./index.css";

const HeroSection = () => {
  const DEFAULT_HEADING = `Hyper boost your <span class="highlight">Revenue Management, Marketing</span> and Commercial Functions with <strong>Business Ready AI</strong>`;
  const [headingText, setHeadingText] = useState(DEFAULT_HEADING);
  const [loading, setLoading] = useState(false);

  const fetchHeading = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/api/heading");
      const data = await res.json();
      if (data && data.text) setHeadingText(data.text);
    } catch (err) {
      console.error("Failed to fetch heading:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHeading();
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        {loading ? (
          <div className="heading-loader">⏳ Loading heading...</div>
        ) : (
          <h1 dangerouslySetInnerHTML={{ __html: headingText }} />
        )}
        <p>
          Powerful AI solutions that go beyond mere data sorting and exploration.
          Use our array of AI enabled solutions that understand your business and recommend the optimal way forward.
        </p>
        <button>Get started</button>
      </div>

      <div className="hero-background">
        <img
          src="https://res.cloudinary.com/dvwnbhpcy/image/upload/v1752334659/c257a9595ce3eddd17534d8cb91a80062f10fbff_mekyxr.png"
          alt="Decorative AI lines"
        />
      </div>
    </section>
  );
};

export default HeroSection;
