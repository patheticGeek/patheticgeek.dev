import React from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";

import "../assets/index.css";
import "../assets/navbar.css";

function MyApp({ Component, pageProps }) {
  const title = Component.pageTitle
    ? `${Component.pageTitle} - Pathetic Geek`
    : "Pathetic Geek";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="og:title" content="Pathetic Geek" />
        <meta name="og:image" content="/favicon.ico" />
        <meta
          name="og:description"
          content="Pathetic Geek's online portfolio"
        />
        <meta name="description" content="Pathetic Geek's online portfolio" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#db5945" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js"
        />
        <script
          noModule=""
          src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
