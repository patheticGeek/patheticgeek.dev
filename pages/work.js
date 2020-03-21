import React from "react";
import Link from "next/link";

function Work() {
  return (
    <main>
      <h1>Work</h1>
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </main>
  );
}

Work.pageTitle = "Work";

export default Work;
