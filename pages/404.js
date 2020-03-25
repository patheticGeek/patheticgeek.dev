import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <header>
      <div className="content">
        <h3 className="header-content__subtitle">Woops, something went wrong</h3>
        <h1 className="header-content__title">
          PAGE <span className="text-accent">NOT</span> FOUND
        </h1>
        <Link href="/">
          <a className="btn-solid">
            <span className="btn-solid__text">Go to home</span>
            <span className="btn-solid__arrow" />
          </a>
        </Link>
      </div>
    </header>
  );
}

export default NotFound;
