import React from "react";
import Link from "next/link";

function Index() {
  return (
    <main>
      <h1>Index</h1>
      <Link href="/work">
        <a>Work</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </main>
  );
}

export default Index;
