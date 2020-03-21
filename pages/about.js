import React from "react";
import Link from "next/link";

function About() {
  return (
    <main>
      <h1>About</h1>
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/work">
        <a>Work</a>
      </Link>
    </main>
  );
}

About.pageTitle = "About";

export default About;
