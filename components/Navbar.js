import React, { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import Proptypes from "prop-types";

import ActiveLink from "./ActiveLink";

function Navbar({ email, links, socials }) {
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
            <a className="mobile-social__link" href={`mailto:${email}`} title="Email">
              <ion-icon name="mail-outline" />
            </a>
            {socials &&
              socials.map((social) => (
                <a href={social.href} className="mobile-social__link" title={social.title}>
                  <ion-icon name={social.icon} />
                </a>
              ))}
          </div>

          <div className="content-contact">
            <img className="contact-img" src="/avatar.jpg" alt="avatar" />
            <h2>Contact Details</h2>
            <a className="contact-link" href={`mailto:${email}`}>
              {email}
            </a>
            <h2>Social Media</h2>
            <div className="contact-social__links">
              {socials &&
                socials.map((social, i) => (
                  <a href={social.href} className="contact-social__link" title={social.title} key={i}>
                    <ion-icon name={social.icon} />
                  </a>
                ))}
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
  email: "geekpathetic@gmail.com",
  links: [
    { title: "Home", href: "/" },
    { title: "My Work", href: "/work" },
    { title: "Services", href: "/services" },
    { title: "About Me", href: "/about" },
    { title: "Playground", href: "/playground" },
    { title: "Contact", href: "/contact" },
  ],
  socials: [
    { icon: "logo-instagram", title: "Instagram", href: "https://instagram.com/patheticGeek" },
    { icon: "logo-github", title: "GitHub", href: "https://github.com/patheticGeek" },
    { icon: "logo-codepen", title: "CodeSandbox", href: "https://codesandbox.io/u/patheticGeek" },
  ],
};

Navbar.propTypes = {
  email: Proptypes.string,
  links: Proptypes.arrayOf(Proptypes.shape({ title: Proptypes.string, href: Proptypes.string })),
  socials: Proptypes.arrayOf(Proptypes.shape({ icon: Proptypes.string, title: Proptypes.string, href: Proptypes.string })),
};

export default Navbar;
