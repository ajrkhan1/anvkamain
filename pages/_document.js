// pages/_document.js

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />

        <meta
          httpEquiv="X-UA-Compatible"
          content="IE=edge,chrome=1"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <meta
          name="description"
          content="Curewith3D - Dental & Orthopedic Implant Manufacturer"
        />

        {/* CSS */}
        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/assets/css/styles.css" />
        <link rel="stylesheet" href="/assets/css/corporate.css" />

        {/* FONTS */}
        <link rel="stylesheet" href="/assets/font/fonts.css" />
        <link
          rel="stylesheet"
          href="/assets/icons/icomoon/style.css"
        />

        {/* FAVICON */}
        <link rel="shortcut icon" href="/assets/favicon.svg" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}