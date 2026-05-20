// pages/_app.js

import Layout from "../components/Layout/Layout";
import { PagesTopLoader } from "nextjs-toploader/pages";
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
          JQUERY FIRST
      ========================== */}
      <Script
        src="/assets/js/jquery.min.js"
        strategy="beforeInteractive"
      />

      {/* =========================
          SWIPER LOAD BEFORE carousel.js
      ========================== */}
      <Script
        src="/assets/js/swiper-bundle.min.js"
        strategy="beforeInteractive"
      />

      {/* =========================
          BOOTSTRAP
      ========================== */}
      <Script
        src="/assets/js/bootstrap.min.js"
        strategy="afterInteractive"
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
        src="/assets/js/gsap.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/assets/js/SplitText.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/assets/js/gsapAnimate.js"
        strategy="afterInteractive"
      />

      <Script
        src="/assets/js/wow.min.js"
        strategy="afterInteractive"
      />

      {/* =========================
          CAROUSEL AFTER SWIPER
      ========================== */}
      <Script
        src="/assets/js/carousel.js"
        strategy="lazyOnload"
      />

      {/* =========================
          MAIN JS LAST
      ========================== */}
      <Script
        src="/assets/js/main.js"
        strategy="lazyOnload"
      />

      <Layout>
        <PagesTopLoader />
        <Component {...pageProps} />
      </Layout>

    </>
  );
}

export default MyApp;