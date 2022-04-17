import React from "react";
import "./About.css";

const About = () => {
  return (
    <section
      className="about-page container d-flex justify-content-center align-items-center my-5"
      style={{ gap: "20px" }}
    >
      <div className="thumb">
        <img src="" alt="ASAD" />
      </div>
      <div className="info ">
        <div className="fw-bolder ">
          <span>hello</span>
        </div>
        <div className="fw-bolder fs-1">
          <span>I am Asad</span>
        </div>
        <div>
          <p className="lead">
            Passionate at web development. I’m working minimum of 13-14 hours
            every day, I love to do this it’s my life-everything. My goal is to
            satisfy clients, try to understand what they want for there website,
            help them from beginning to end the project and give support for
            every problem. If need I communicate by video or audio conversations
            to understand the problems and project requirements. After
            completing website and projects I give instructions, How they can
            manage, edit, update, add page and post on the website by
            themselves. if needed I send video tutorials.
          </p>
        </div>
        <div>
          <button className="b-btn py-1 px-5 bg-transparent text-light">
            Contact me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
