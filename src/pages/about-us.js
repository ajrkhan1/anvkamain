import Head from "next/head";
import React from "react";
import Slider from "react-slick";


export default function Home() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay:1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


	return (
		<>
			<Head>
				<title>Contact Us - ANVKA</title>
				<meta name="description" content="For sending DICOM Data Online" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
			</Head>

            <div class="page-layout-v04">
                    <div class="img-style">
                        <img class="img-cover" width="1920" height="720" loading="eager" decoding="async" src="/assets/images/thumbs-portfolio.jpg" alt="page-title"/>
                    </div>
                    <div class="content">
                        <div class="tf-container">
                            {/* <ul class="tf-breadcrumb style-2 mb_16">
                                <li class="text-label text_white lh-16"><a href="/index.html"
                                        class="link text_white">HOME</a>
                                </li>
                                <li class="text_white text-label lh-16">About Us</li>
                            </ul> */}
                            <h1 class="text_white newcolorx">About Us</h1>
                        </div>
                    </div>
                </div>


                <div class="main-content">
                   <div class="section-about tf-spacing-1">

                    <div class="tf-container">
                            <div class="mb_48">
                                <div class="row align-items">

                                    <div class="col-sm-6 textjustfy">
                                        <div className="shdwala">
                                        <div class="heading-section style-default">
                                            <h2 class="title split-text effect-right">Who We Are</h2>
                                        </div>

                                        <br></br>
                                        <p>
                                            ANVKA is a growing ecosystem of ideas, innovation, and purpose-driven initiatives built around improving the healthcare environment and the lives connected to it. What began as a vision to create meaningful solutions has evolved into a network of brands and services that work across healthcare, technology, wellness, innovation, and community support.
                                        </p>
                                        <br></br>
                                        <p>
                                            At its core, ANVKA believes that healthcare is not limited to hospitals alone. It extends to the experiences of patients, the comfort of caregivers, the efficiency of healthcare professionals, and the support systems that surround them. With this understanding, ANVKA was created to build solutions that go beyond treatment and contribute to a more connected, compassionate, and human-centered ecosystem.
                                        </p>
                                        <br></br>
                                        <p>
                                            The name ANVKA represents the belief that every initiative should be nurtured with sincerity, purpose, and commitment—just like a family.
                                        </p>
                                        <br></br>
                                        <p>
                                           Over time, ANVKA has grown into a diverse collective of brands, each addressing a unique need while contributing to a shared vision. From healthcare innovation and medical technology to patient support, garments, wellness, and entrepreneurship, every initiative under ANVKA is designed to create a meaningful impact.
                                        </p>

                                        <a href="/contact-us" class="tf-btn btn-hover-animate-2 wow fadeInUp"
                                            data-wow-delay="0.4s">
                                            <span>Get in Touch</span>
                                            <span></span>
                                        </a>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 whowearex">
                                        <div class="leftimage ">
                                            {/* <img src="/assets/images/portfolio-item-2.jpg" alt="Lintex"/> */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>

                    {/* <div class="section-video">
                        <div class="wrap-infiniteslide">
                            <div class="infiniteslide " data-clone="2" data-style="left">
                                <div class="marquee-item ">
                                    <h3>Work Together</h3>
                                </div>
                                <div class="marquee-item ">
                                    <div class="icon">
                                        <i class="icon-icon-1"></i>
                                    </div>
                                </div>
                                <div class="marquee-item ">
                                    <h3>Start Now</h3>
                                </div>
                                <div class="marquee-item ">
                                    <div class="icon">
                                        <i class="icon-icon-1"></i>
                                    </div>
                                </div>
                                <div class="marquee-item ">
                                    <h3>Design Smart</h3>
                                </div>
                                <div class="marquee-item ">
                                    <div class="icon">
                                        <i class="icon-icon-1"></i>
                                    </div>
                                </div>
                                <div class="marquee-item ">
                                    <h3>Grow Faster</h3>
                                </div>
                                <div class="marquee-item ">
                                    <div class="icon">
                                        <i class="icon-icon-1"></i>
                                    </div>
                                </div>
                                <div class="marquee-item ">
                                    <h3>Build Bold</h3>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div class="section-service-4 tf-spacing-1 sw-layout">
                        <div class="tf-container">
                            <div class="heading-section style-1 mb_40">
                                <div class="row align-items-center">
                                    <div class="col-lg-7 d-grid gap_10">
                                        {/* <div class="sub text-label text-uppercase split-text effect-up">Our Brands
                                        </div> */}
                                        <h3 class="title split-text effect-blur-fade">Our Brands</h3>
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
                            <div class="wow fadeInRight verticalbn" data-screen-xl="4" data-preview="3" data-tablet="3"
                                data-mobile="1" data-mobile-sm="2" data-space-lg="10" data-space-md="10"
                                data-space="10">
                                <div class="swiper-wrapper1">
                                    <Slider {...settings}>
                                    <div class="swiper-slide axg">
                                        <div class="service-item style-1">
                                            <div class="img-style">
                                                <img width="345" height="460" loading="lazy" decoding="async"
                                                    src="/assets/images/brands/Lintex.webp" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a href="/brands/lintex/"
                                                    class="fw-5 text_white title link mb_12 h5">LINTEX</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Smart uniforms designed for comfort and identity</p>
                                                    <a href="/brands/lintex"
                                                        class="text-caption-1 text_primary-color fw-4 hover-underline-link">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="swiper-slihde axg">
                                        <div class="service-item style-1">
                                            <div class="img-style">
                                                <img width="345" height="460" loading="lazy" decoding="async"
                                                    src="/assets/images/brands/MedicalImplant.webp" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a href="/brands/medical-implats"
                                                    class="fw-5 text_white title link mb_12 h5">Medical Implants</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Access to globally trusted medical implants</p>
                                                    <a href="/brands/medical-implats"
                                                        class="text-caption-1 text_primary-color fw-4 hover-underline-link">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="swiper-slhide axg">
                                        <div class="service-item style-1">
                                            <div class="img-style">
                                                <img width="345" height="460" loading="lazy" decoding="async"
                                                    src="assets/images/brands/Curewith3D.webp" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a href="/brands/curewith3d"
                                                    class="fw-5 text_white title link mb_12 h5">Curewith3D</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Patient-specific 3D innovations enabling surgical precision</p>
                                                    <a href="/brands/curewith3d"
                                                        class="text-caption-1 text_primary-color fw-4 hover-underline-link">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="swiper-slhide axg">
                                        <div class="service-item style-1">
                                            <div class="img-style">
                                                <img width="345" height="460" loading="lazy" decoding="async"
                                                    src="assets/images/brands/IndiaMD.webp" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a href="/brands/Indiamd"
                                                    class="fw-5 text_white title link mb_12 h5">IndiaMD</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Seamless healthcare access for international patients</p>
                                                    <a href="/brands/Indiamd"
                                                        class="text-caption-1 text_primary-color fw-4 hover-underline-link">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="swiper-slihde axg">
                                        <div class="service-item style-1">
                                            <div class="img-style">
                                                <img width="345" height="460" loading="lazy" decoding="async"
                                                    src="assets/images/brands/CareTAB.webp" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a href="/brands/caretab"
                                                    class="fw-5 text_white title link mb_12 h5">CareTAB</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Technology bringing hospital-level care to homes</p>
                                                    <a href="/brands/caretab"
                                                        class="text-caption-1 text_primary-color fw-4 hover-underline-link">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="swiper-slihde axg">
                                        <div class="service-item style-1">
                                            <div class="img-style">
                                                <img width="345" height="460" loading="lazy" decoding="async"
                                                    src="assets/images/brands/Akiechef.webp" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a href="/brands/akiechef"
                                                    class="fw-5 text_white title link mb_12 h5">AkieChef</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Nutrition designed for healing and recovery </p>
                                                    <a href="/brands/akiechef"
                                                        class="text-caption-1 text_primary-color fw-4 hover-underline-link">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="swiper-slhide axg">
                                        <div class="service-item style-1">
                                            <div class="img-style">
                                                <img width="345" height="460" loading="lazy" decoding="async"
                                                    src="assets/images/brands/Tumble.webp" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a href="/brands/tumble-salon"
                                                    class="fw-5 text_white title link mb_12 h5">Tumble Salon</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Hygiene solutions that go beyond medical care</p>
                                                    <a href="/brands/tumble-salon"
                                                        class="text-caption-1 text_primary-color fw-4 hover-underline-link">Explore</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    </Slider>
                                </div>
                                <div
                                    class="sw-dots style-3 sw-pagination-layout justify-content-center d-flex mt_24">
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

		</>
	);
}
