import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

function ActiveLink({ children, href, className, activeClassName }) {
  const router = useRouter();
  if (!className) className = "";
  if (!activeClassName) activeClassName = "";

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  if (router.pathname === href) {
    className += ` ${activeClassName}`;
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

ActiveLink.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
};

export default ActiveLink;
