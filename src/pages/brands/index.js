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
                                    <h1 class="title text_white split-text effect-right">Our Verticals</h1>
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
                            <div class="heading-section style-1 mb_40">
                                <div class="row align-items-center">
                                    <div class="col-lg-7 d-grid gap_10">
                                        {/* <div class="sub text-label text-uppercase split-text effect-up">Our Brands
                                        </div> */}
                                        <h3 class="title split-text effect-blur-fade">Our Verticals</h3>
                                    </div>
                                    {/* <div class="col-lg-5">
                                        <a href="/brands"
                                            class="tf-btn btn-hover-animate-2 ms-lg-auto wow fadeInRight">
                                            <span>All Brands</span>
                                            <span></span>
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                            <div class="swiper wow fadeInRight verticalbn" data-screen-xl="4" data-preview="3" data-tablet="3"
                                data-mobile="1" data-mobile-sm="2" data-space-lg="10" data-space-md="10"
                                data-space="10">
                                <div class="swiper-wrapper">

                                    <div class="swiper-slide">
                                        <div class="service-item style-1">
                                            <div class="img-style">
                                                <img width="345" height="460" loading="lazy" decoding="async"
                                                    src="/assets/images/brands/Lintex.webp" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a target="_blank" href="https://lintex.in/"
                                                    class="fw-5 text_white title link mb_12 h5">LINTEX</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Smart uniforms designed for comfort and identity</p>
                                                    <a target="_blank" href="https://lintex.in/"
                                                        class="text-caption-1 text_primary-color fw-4 hover-underline-link">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="service-item style-1">
                                            <div class="img-style">
                                                <img width="345" height="460" loading="lazy" decoding="async"
                                                    src="/assets/images/brands/MedicalImplant.webp" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a target="_blank" href="https://lintex.in/"
                                                    class="fw-5 text_white title link mb_12 h5">Medical Implants</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Access to globally trusted medical implants</p>
                                                    <a target="_blank" href="#"
                                                        class="text-caption-1 text_primary-color fw-4 hover-underline-link">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="service-item style-1">
                                            <div class="img-style">
                                                <img width="345" height="460" loading="lazy" decoding="async"
                                                    src="assets/images/brands/Curewith3D.webp" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a target="_blank" href="https://www.curewith3d.com/"
                                                    class="fw-5 text_white title link mb_12 h5">Curewith3D</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Patient-specific 3D innovations enabling surgical precision</p>
                                                    <a target="_blank" href="https://www.curewith3d.com/"
                                                        class="text-caption-1 text_primary-color fw-4 hover-underline-link">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="service-item style-1">
                                            <div class="img-style">
                                                <img width="345" height="460" loading="lazy" decoding="async"
                                                    src="assets/images/brands/IndiaMD.webp" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a target="_blank" href="#"
                                                    class="fw-5 text_white title link mb_12 h5">IndiaMD</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Seamless healthcare access for international patients</p>
                                                    <a target="_blank" href="#"
                                                        class="text-caption-1 text_primary-color fw-4 hover-underline-link">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="service-item style-1">
                                            <div class="img-style">
                                                <img width="345" height="460" loading="lazy" decoding="async"
                                                    src="assets/images/brands/CareTAB.webp" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a target="_blank" href="https://caretab.ai/"
                                                    class="fw-5 text_white title link mb_12 h5">CareTAB</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Technology bringing hospital-level care to homes</p>
                                                    <a target="_blank" href="https://caretab.ai/"
                                                        class="text-caption-1 text_primary-color fw-4 hover-underline-link">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="service-item style-1">
                                            <div class="img-style">
                                                <img width="345" height="460" loading="lazy" decoding="async"
                                                    src="assets/images/brands/Akiechef.webp" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a target="_blank" href="#"
                                                    class="fw-5 text_white title link mb_12 h5">AkieChef</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Nutrition designed for healing and recovery </p>
                                                    <a target="_blank" href="#"
                                                        class="text-caption-1 text_primary-color fw-4 hover-underline-link">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="service-item style-1">
                                            <div class="img-style">
                                                <img width="345" height="460" loading="lazy" decoding="async"
                                                    src="assets/images/brands/Tumble.webp" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a target="_blank" href="https://www.instagram.com/tumblesalon"
                                                    class="fw-5 text_white title link mb_12 h5">Tumble Salon</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Hygiene solutions that go beyond medical care</p>
                                                    <a target="_blank" href="https://www.instagram.com/tumblesalon"
                                                        class="text-caption-1 text_primary-color fw-4 hover-underline-link">Explore</a>
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
