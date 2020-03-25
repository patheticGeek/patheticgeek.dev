import React from "react";
import Link from "next/link";
import WorkCard from "../components/WorkCard";
import Footer from "../components/Footer";

function Index() {
  return (
    <>
      <header>
        <div className="content">
          <h3 className="header-content__subtitle">Web & Mobile developer</h3>
          <h1 className="header-content__title">
            I create <span className="text-accent">performant</span> websites & apps.
          </h1>
          <Link href="#work">
            <a className="btn-solid">
              <span className="btn-solid__text">My Work</span>
              <span className="btn-solid__arrow" />
            </a>
          </Link>
        </div>
        <Link href="#about">
          <a className="header-content__btn-next" />
        </Link>
      </header>

      <section id="about">
        <div className="content">
          <div className="about-text">
            <div className="about-text__title">What can i do for you?</div>
            <div className="about-text__body">
              I can help convert designs into well built apps which are equally performant as their design.
            </div>
          </div>

          <div className="about-services">
            <div className="about-services-col">
              <h2 className="about-services__title">Web</h2>
              <ul className="about-services__list">
                <li>HTML5/CSS3/JS</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Next</li>
                <li>React</li>
                <li>Redux</li>
              </ul>
            </div>

            <div className="about-services-col">
              <h2 className="about-services__title">Mobile</h2>
              <ul className="about-services__list">
                <li>XCode</li>
                <li>Android Studio</li>
                <li>React Native</li>
                <li>React Native Navigation</li>
                <li>RN Firebase</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="work-title">
          <h2>Recent work</h2>
          <Link href="/work">
            <a className="btn-outline">
              <span className="btn-outline__text">All Work</span>
              <span className="btn-outline__arrow" />
            </a>
          </Link>
        </div>

        <div className="work-content">
          <WorkCard />

          <WorkCard />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Index;
