import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="footer-text">
        <div className="footer-text__subtitle">Do you like my work?</div>
        <div className="footer-text__title">
          Let's <span className="text-accent">work</span> together!
        </div>
        <Link href="/contact">
          <a className="btn-outline">
            <span className="btn-outline__text">Get in touch</span>
            <span className="btn-outline__arrow" />
          </a>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
