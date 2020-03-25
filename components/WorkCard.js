import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Proptypes from "prop-types";

function WorkCard({ link, subtitle, title, type, img, bgColor, big }) {
  const [inView, setInView] = useState(false);
  const workCard = useRef();

  const onScroll = e => {
    const offsetTop = workCard.current.getBoundingClientRect().top;
    const innerHeight = window.innerHeight;
    const isInView = offsetTop <= innerHeight;
    if (!inView && isInView) setInView(true);
    else if (inView && !isInView) setInView(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <Link href={link}>
      <a className={`work-card${big ? " big" : ""}${inView ? " inView" : ""}`} ref={workCard} style={{ backgroundColor: bgColor }}>
        <div className="work-card__subtitle">{subtitle}</div>
        <div className="work-card__main">
          <div className="work-card__main-text">
            <div className="work-card__title">{title}</div>
            <div className="work-card__type">{type}</div>
          </div>
          <div className="work-card__image-container">
            <img src={img} className="work-card__image" alt="work" />
          </div>
        </div>
        <div className="work-card__bottom">
          <div className="work-card__arrow" />
          <div className="work-card__visit">View Work</div>
        </div>
      </a>
    </Link>
  );
}

WorkCard.defaultProps = {
  link: "/work",
  subtitle: "Personal Project",
  title: "Linkflix",
  type: "Website",
  img: "https://linkflix.tk/home.png",
  bgColor: "#eeeee5",
  big: false
};

WorkCard.propTypes = {
  link: Proptypes.string.isRequired,
  subtitle: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  img: Proptypes.string.isRequired,
  bgColor: Proptypes.string,
  big: Proptypes.bool
};

export default WorkCard;
