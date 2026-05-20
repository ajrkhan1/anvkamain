import Head from "next/head";
import React from "react";


export default function Home() {

	return (
		<>
			 <Head>
				<title>ANVKA HEALTHCARE</title>
				<meta name="description" content="Curewith3D is India's leading brand providing patient-specific surgical solutions, such as custom dental & orthopedic implant, surgical guides, models & VSP" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"/>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"/>
			</Head>

            <div class="hero-banner-3 parallax-container overflow-hidden">
                    <div class="parallax-video videsl">
                        <video className="thumbs-video video-inner" autoPlay muted loop playsInline>
                            <source src="/assets/images/brands.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div class="content">
                        <div class="tf-container">
                            <div class="row align-items-center">
                                <div class="col-lg-8">
                                    <h1 class="title text_white split-text effect-right">ANVKA Brands</h1>
                                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                </div>
                                {/* <div class="col-lg-6">
                                    <div class="right">
                                        <p class="text-body-2 text_white mb_24  split-text split-lines-transform">Welcome to ANVKA Healthcare, where excellence and innovation converge. Established in 2021 and headquartered in New Delhi, we’re on a mission to transform industries such as Healthcare, Garments, Food & Beverages, and Beauty Wellness.</p>
                                        <a href="#" class="tf-btn btn-hover-animate-2  wow fadeInUp ">
                                            <span>Get a Quote</span>
                                            <span></span>
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                 
                    </div>
                </div>



                <div class="main-content">

                   
                    <div class="section-service-4 tf-spacing-1 sw-layout">
                        <div class="tf-container">
                            <div class="heading-section style-1 mb_60">
                                <div class="row align-items-center">
                                    <div class="col-lg-7 d-grid gap_16">
                                        <div class="sub text-label text-uppercase split-text effect-up">Our Brands
                                        </div>
                                        <h2 class="title split-text effect-blur-fade">ANVKA Brands</h2>
                                    </div>
                                    <div class="col-lg-5">
                                        <a href="#"
                                            class="tf-btn btn-hover-animate-2 ms-lg-auto wow fadeInRight">
                                            <span>All Brands</span>
                                            <span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper wow fadeInRight" data-screen-xl="4" data-preview="3" data-tablet="3"
                                data-mobile="1" data-mobile-sm="2" data-space-lg="10" data-space-md="10"
                                data-space="10">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="service-item style-1">
                                            <div class="img-style">
                                                <img width="345" height="460" loading="lazy" decoding="async"
                                                    src="/assets/images/lintex.png" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a href="service-detail.html"
                                                    class="fw-5 text_white title link mb_12 h5">Lintex</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Implement
                                                        Lintex is redefining uniforms across various professional sectors including healthcare, hospitality...</p>
                                                    <a href="#"
                                                        class="text-caption-1 text_primary-color fw-4 hover-underline-link">Explore
                                                        Plans</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="service-item style-1">
                                            <div class="img-style">
                                                <img width="345" height="460" loading="lazy" decoding="async"
                                                    src="assets/images/3d.png" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a href="service-detail.html"
                                                    class="fw-5 text_white title link mb_12 h5">Curewith3D</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Cure with 3D, is a one-stop destination for cutting-edge 3D printing solutions in healthcare.</p>
                                                    <a href="#"
                                                        class="text-caption-1 text_primary-color fw-4 hover-underline-link">Explore
                                                        Plans</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="service-item style-1">
                                            <div class="img-style">
                                                <img width="345" height="460" loading="lazy" decoding="async"
                                                    src="assets/images/caretab.png" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a href="service-detail.html"
                                                    class="fw-5 text_white title link mb_12 h5">CareTAB</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Tumble is your haven for all things beauty and wellness. Located in the heart of Delhi...</p>
                                                    <a href="#"
                                                        class="text-caption-1 text_primary-color fw-4 hover-underline-link">Explore
                                                        Plans</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="service-item style-1">
                                            <div class="img-style">
                                                <img width="345" height="460" loading="lazy" decoding="async"
                                                    src="assets/images/tumble.png" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a href="service-detail.html"
                                                    class="fw-5 text_white title link mb_12 h5">Tumble Salon</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Care[T.A.B].ai envisions building a quality-driven, outcome-focused, and tech-enabled...</p>
                                                    <a href="#"
                                                        class="text-caption-1 text_primary-color fw-4 hover-underline-link">Explore
                                                        Plans</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="sw-dots style-3 sw-pagination-layout justify-content-center d-flex mt_24 d-xl-none">
                                </div>
                            </div>
                        </div>
                    </div>

              

                </div>
		 
		   
		</>
	);
}
