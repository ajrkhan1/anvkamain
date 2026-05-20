// pages/_app.js

import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  const canonicalUrl =
    "https://www.curewith3d.com" +
    (router.asPath === "/" ? "" : router.asPath);

  return (
    <>

      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      {/* =========================
          JQUERY
      ========================== */}
      <Script
        src="/assets/js/jquery.min.js"
        strategy="beforeInteractive"
      />

      {/* =========================
          SWIPER
      ========================== */}
      <Script
        src="/assets/js/swiper-bundle.min.js"
        strategy="beforeInteractive"
      />

      {/* =========================
          GSAP CORE
      ========================== */}
      <Script
        src="/assets/js/gsap.min.js"
        strategy="beforeInteractive"
      />

      {/* =========================
          GSAP PLUGINS
      ========================== */}
      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />

      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />

      <Script
        src="/assets/js/SplitText.min.js"
        strategy="beforeInteractive"
      />

      {/* =========================
          BOOTSTRAP
      ========================== */}
      <Script
        src="/assets/js/bootstrap.min.js"
        strategy="beforeInteractive"
      />

      {/* =========================
          OTHER PLUGINS
      ========================== */}
      <Script
        src="/assets/js/infinityslide.js"
        strategy="afterInteractive"
      />

      <Script
        src="/assets/js/magnific-popup.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/assets/js/wow.min.js"
        strategy="afterInteractive"
      />

      {/* =========================
          DEPENDENT FILES
      ========================== */}

      {/* Swiper dependent */}
      <Script
        src="/assets/js/carousel.js"
        strategy="afterInteractive"
      />

      {/* GSAP dependent */}
      <Script
        src="/assets/js/gsapAnimate.js"
        strategy="afterInteractive"
      />

      {/* Main JS LAST */}
      <Script
        src="/assets/js/main.js"
        strategy="lazyOnload"
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>

    </>
  );
}

export default MyApp;