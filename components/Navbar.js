import React, { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import Proptypes from "prop-types";

import ActiveLink from "./ActiveLink";

function Navbar({ links }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const routeChangeStart = () => setLoading(true);
    const routeChangeEnd = () => {
      setLoading(false);
      if (open) setOpen(false);
    };

    Router.events.on("routeChangeStart", routeChangeStart);
    Router.events.on("routeChangeError", routeChangeEnd);
    Router.events.on("routeChangeComplete", routeChangeEnd);
    return () => {
      Router.events.off("routeChangeStart", routeChangeStart);
      Router.events.off("routeChangeError", routeChangeEnd);
      Router.events.off("routeChangeComplete", routeChangeEnd);
    };
  });

  return (
    <>
      <div className={`page-loader${loading ? " loading" : ""}`} />

      <div className={`navbar${open ? " menu-open" : ""}${loading ? " loading" : ""}`}>
        <div className="content">
          <Link href="/">
            <a className="nav-logo">Pathetic</a>
          </Link>
          <div className="menu-icon__container" onClick={() => setOpen(!open)}>
            <div className="menu-icon" />
          </div>
        </div>
      </div>

      <div className={`menu${open ? " menu-open" : ""}`}>
        <div className="content">
          <div className="mobile-social__links">
            <a className="mobile-social__link" href="mailto:geekpathetic@gmail.com" title="Email">
              <ion-icon name="mail-outline" />
            </a>
            <a href="https://instagram.com/patheticGeek" className="mobile-social__link" title="instagram">
              <ion-icon name="logo-instagram" />
            </a>
            <a href="https://github.com/patheticGeek" className="mobile-social__link" title="Github">
              <ion-icon name="logo-github" />
            </a>
            <a href="https://codesandbox.io/u/patheticGeek" className="mobile-social__link" title="Codesandbox">
              <ion-icon name="logo-codepen" />
            </a>
          </div>

          <div className="content-contact">
            <img className="contact-img" src="/avatar.jpg" alt="avatar" />
            <h2>Contact Details</h2>
            <a className="contact-link" href="mailto:geekpathetic@gmail.com">
              geekpathetic@gmail.com
            </a>
            <h2>Social Media</h2>
            <div className="contact-social__links">
              <a href="https://instagram.com/patheticGeek" className="contact-social__link" title="instagram">
                <ion-icon name="logo-instagram" />
              </a>
              <a href="https://github.com/patheticGeek" className="contact-social__link" title="Github">
                <ion-icon name="logo-github" />
              </a>
              <a href="https://codesandbox.io/u/patheticGeek" className="contact-social__link" title="Codesandbox">
                <ion-icon name="logo-codepen" />
              </a>
            </div>
          </div>

          <div className="content-nav">
            <nav>
              <ul className="content-nav__links">
                {links &&
                  links.map((link, i) => (
                    <li className="content-nav__link" key={i}>
                      <ActiveLink href={link.href} activeClassName="active">
                        {link.title}
                      </ActiveLink>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

Navbar.defaultProps = {
  links: [
    { title: "Home", href: "/" },
    { title: "My Work", href: "/work" },
    { title: "Services", href: "/services" },
    { title: "About Me", href: "/about" },
    { title: "Playground", href: "/playground" },
    { title: "Contact", href: "/contact" },
  ],
};

Navbar.propTypes = {
  links: Proptypes.arrayOf(Proptypes.shape({ title: Proptypes.string, href: Proptypes.string })),
};

export default Navbar;
