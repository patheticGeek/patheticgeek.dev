import React from "react";
import { useRouter } from "next/router";

function ActiveLink({ children, href, className, activeClassName }) {
  const router = useRouter();
  if (!className) className = "";
  if (!activeClassName) activeClassName = "";

  const handleClick = e => {
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

export default ActiveLink;
