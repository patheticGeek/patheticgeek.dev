import React from "react";
import { useRouter } from "next/router";

function ActiveLink({ children, href, onClick, className, activeClassName }) {
  const router = useRouter();
  if (!className) className = "";
  if (!activeClassName) activeClassName = "";

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
    if (onClick) onClick();
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

export default ActiveLink;
