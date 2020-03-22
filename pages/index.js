import React from "react";
import Link from "next/link";

function Index() {
  return (
    <main>
      <header>
        <div className="content">
          <h3 className="header-content__subtitle">Web & Mobile developer</h3>
          <h1 className="header-content__title">
            I create <span className="text-accent">beautifully usable</span> websites & apps.
          </h1>
          <Link href="/work">
            <a className="header-content__btn">
              <span className="header-content__btn-text">My Work</span>
              <span className="header-content__btn-arrow" />
            </a>
          </Link>
        </div>
        <Link href="#home-about">
          <a className="header-content__btn-next" />
        </Link>
      </header>
      <section id="home-about"></section>
    </main>
  );
}

export default Index;
