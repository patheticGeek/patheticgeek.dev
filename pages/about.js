import React from "react";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <header className="about-header">
        <div className="content">
          <h3 className="header-content__subtitle">I'm Pathetic</h3>
          <h1 className="header-content__title">
            About me<span className="text-accent">:</span>
          </h1>
          <div className="about-main">
            <img className="about-main-img" src="./avatar.jpg" alt="profile pic" />
            <div className="about-main-text">
              <div className="content">
                <div className="about-stats">
                  <div className="about-stat">
                    <h1>3</h1>
                    <h3 className="text-accent text-uppercase">Years of experience</h3>
                  </div>
                  <div className="about-stat">
                    <h1>18</h1>
                    <h3 className="text-accent text-uppercase">Years old</h3>
                  </div>
                </div>
                <p>
                  Hello world! I'm Pathetic Geek. I've been interested in how computers work from an early age and started
                  learning coding about 5 years ago, now I mainly code in JavaScript and have build some quality websites and apps both
                  professionally and as a personal project. Mainly i make websites with ReactJS and cross platform mobile apps in React
                  Native.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="location">
        <div className="content">
          <div className="location-text">
            <h3 className="text-accent text-uppercase">Where i'm located</h3>
            <h1 className="header-content__title">Ambala</h1>
            <p>
              I was born and am living in Ambala City, Harayana. Most of the works I had done have been remote and have worked with local
              bussines and outside ones.
            </p>
          </div>
          <div className="location-map">
            <div className="dot" />
            <img src="./ambala.svg" alt="Ambala, Harayana, India" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

About.pageTitle = "About me";

export default About;
