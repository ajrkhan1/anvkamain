import Head from "next/head";
import React from "react";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import CountUp, { useCountUp } from 'react-countup';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TypeAnimation } from 'react-type-animation';


import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';



export default function Home() {

	return (
		<>
			{/* <Head>
				<title>Curewith3D: Top Dental & Orthopedic Implant Manufacturer</title>
				<meta name="description" content="Curewith3D is India's leading brand providing patient-specific surgical solutions, such as custom dental & orthopedic implant, surgical guides, models & VSP" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"/>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"/>
			</Head>
		 
		 <div class="tf-slider-1 sw-layout ">
                    <div class="swiperj peffect-content-slide" data-effect="fade" data-autoplay="true">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="hero-banner-1">
                                    <div class="thumbs effect-img-zoom">
                                        <img class="img-zoom" width="1920" height="772" loading="eager" decoding="async"
                                            src="/assets/images/corporate-hero-1.jpg" alt="hero"/>
                                    </div>
                                    <div class="content">
                                        <div class="tf-container">
                                            <div class="wrap-content">
                                                <div class="box-text">
                                                    <h1 class="text_white title  effect-item effect-up delay-1">
                                                        Empowering Your
                                                        Business With Digital
                                                        Excellence</h1>
                                                    <p class="text_white text-body-2 effect-item effect-up delay-2">We
                                                        build
                                                        scalable, high-impact solutions
                                                        to help you
                                                        grow
                                                        with
                                                        confidence.</p>
                                                </div>
                                                <div class="btn_wrapper effect-item effect-right delay-3">
                                                    <a href="services.html"
                                                        class="btn_link btn-item btn-hover h6 text_white ">
                                                        View
                                                        Services
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="hero-banner-1">
                                    <div class="thumbs effect-img-zoom">
                                        <img class="img-zoom" width="1920" height="772" loading="eager" decoding="async"
                                            src="images/corporate-hero-2.jpg" alt="hero"/>
                                    </div>
                                    <div class="content">
                                        <div class="tf-container">
                                            <div class="wrap-content">
                                                <div class="box-text">
                                                    <h1 class="text_white title effect-item effect-up delay-1">
                                                        Empowering Your
                                                        Business With Digital
                                                        Excellence</h1>
                                                    <p class="text_white text-body-2 effect-item effect-up delay-2">We
                                                        build
                                                        scalable, high-impact solutions
                                                        to help you
                                                        grow
                                                        with
                                                        confidence.</p>
                                                </div>
                                                <div class="btn_wrapper effect-item effect-right delay-3">
                                                    <a href="services.html"
                                                        class="btn_link btn-item btn-hover h6 text_white ">
                                                        View
                                                        Services
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="hero-banner-1">
                                    <div class="thumbs effect-img-zoom">
                                        <img class="img-zoom" width="1920" height="772" loading="eager" decoding="async"
                                            src="images/corporate-hero-3.jpg" alt="hero"/>
                                    </div>
                                    <div class="content">
                                        <div class="tf-container">
                                            <div class="wrap-content">
                                                <div class="box-text">
                                                    <h1 class="text_white title effect-item effect-up delay-1">
                                                        Empowering Your
                                                        Business With Digital
                                                        Excellence</h1>
                                                    <p class="text_white text-body-2 effect-item effect-up delay-2">We
                                                        build
                                                        scalable, high-impact solutions
                                                        to help you
                                                        grow
                                                        with
                                                        confidence.</p>
                                                </div>
                                                <div class="btn_wrapper effect-item effect-right delay-3">
                                                    <a href="services.html"
                                                        class="btn_link btn-item btn-hover h6 text_white ">
                                                        View
                                                        Services
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wrap-sw-button">
                            <div class="sw-button style-1 nav-prev-layout">
                                <i class="icon-CaretLeft"></i>
                            </div>
                            <div class="sw-button style-1 nav-next-layout">
                                <i class="icon-CaretRight"></i>
                            </div>
                        </div>
                        <div class="sw-dots style-white sw-pagination-layout text-center">
                        </div>
                    </div>
                </div>


				<div class="main-content">

              
                    <div class="section-about-1 tf-spacing-1">
                        <div class="tf-container">
                            <div class="widget-video overflow-hidden section-triger">
                                <div class="parallax-image ">
                                    <img data-speed="0.9" class="image-inner" loading="lazy" decoding="async"
                                        width="1410" height="680" src="images/bg-video-2.jpg" alt="video"/>
                                    <div class="uncover">
                                        <div class="uncover_slice"></div>
                                        <div class="uncover_slice"></div>
                                        <div class="uncover_slice"></div>
                                    </div>
                                </div>
                                <a href="https://www.youtube.com/watch?v=MLpWrANjFbI" class="popup-youtube">
                                    <div class="icon">
                                        <i class="icon-Play"></i>
                                    </div>
                                </a>
                            </div>
                            <div class="heading-section mb_60">
                                <div class="row align-items-center">
                                    <div class="col-lg-6 d-grid gap_16">
                                        <div class="sub text-label text-uppercase split-text effect-up">About Us</div>
                                        <h2 class="title split-text effect-right">We Turn Vision Into Reality</h2>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right">
                                            <p
                                                class="text-body-2 text_secondary mb_24 split-text split-lines-transform">
                                                As a
                                                trusted corporate partner, we
                                                specialize
                                                in delivering strategic digital solutions, combining technology,
                                                creativity, and
                                                business insight to drive results. Our team is dedicated to helping you
                                                achieve
                                                long-term success.</p>
                                            <div class="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="2s">
                                                <a href="about-us.html" class="tf-btn btn-hover-animate-2 ">
                                                    <span>About Us</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="wrap-counter tf-grid-layout lg-col-4 tf-col-2">
                                <div class="counter-item">
                                    <div class="counter h1 font-2"><span class="numberCounter" data-count="10"
                                            data-duration="700">0</span><span class="sub-counter">+</span></div>
                                    <p class="sub-title text-body-2 text_secondary">Years of Experience </p>
                                </div>
                                <div class="counter-item">
                                    <div class="counter h1 font-2"><span class="numberCounter" data-count="250"
                                            data-duration="700">10</span><span class="sub-counter">+</span></div>
                                    <p class="sub-title text-body-2 text_secondary">Successful Projects</p>
                                </div>
                                <div class="counter-item">
                                    <div class="counter h1 font-2"><span class="numberCounter" data-count="50"
                                            data-duration="700">0</span><span class="sub-counter">+</span></div>
                                    <p class="sub-title text-body-2 text_secondary">Corporate Clients</p>
                                </div>
                                <div class="counter-item">
                                    <div class="counter h1 font-2"><span class="numberCounter" data-count="98"
                                            data-duration="700">0</span><span class="sub-counter">%</span></div>
                                    <p class="sub-title text-body-2 text_secondary">Client Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
       
                    <div class="section-service-2 tf-spacing-1">
                        <div class="tf-container">
                            <div class="heading-section style-1 mb_60">
                                <div class="row align-items-center">
                                    <div class="col-lg-7 d-grid gap_16">
                                        <div class="sub text-label text-uppercase text_white split-text effect-up">Our
                                            Services
                                        </div>
                                        <h2 class="title text_white split-text effect-right">We Turn Vision Into Reality
                                        </h2>
                                    </div>
                                    <div class="col-lg-5">
                                        <div class="wow hover-image wow fadeInRight" data-wow-duration="2s"
                                            data-wow-delay="0.1s">
                                            <a href="services.html"
                                                class="tf-btn btn-hover-animate-2 btn-bg-primary-3  ms-lg-auto">
                                                <span>View More</span>
                                                <span></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tf-grid-layout lg-col-4 sm-col-2">
                                <div class="tf-box-icon style-2 wow fadeIn hover-effect-icon" data-wow-delay=".1s">
                                    <div class="icon">
                                        <i class="icon-stars-shapes"></i>
                                    </div>
                                    <div class="content">
                                        <h5 class="mb_12 title">
                                            <a href="services.html" class="mb_12  link text_white">Business
                                                Strategy</a>
                                        </h5>
                                        <p class="text-body-default text_muted">We help you define clear goals, assess
                                            market
                                            opportunities, and create actionable plans that drive sustainable growth.
                                        </p>
                                    </div>
                                </div>
                                <div class="tf-box-icon style-2 wow fadeIn hover-effect-icon" data-wow-delay=".2s">
                                    <div class="icon">
                                        <i class="icon-stars-shapes-2"></i>
                                    </div>
                                    <div class="content">
                                        <h5 class="mb_12 title">
                                            <a href="services.html" class="mb_12  link text_white">Web
                                                Development</a>
                                        </h5>
                                        <p class="text-body-default text_muted">Robust, responsive, and scalable
                                            websites built
                                            to elevate
                                            your brand and enhance user experience across all devices.</p>
                                    </div>
                                </div>
                                <div class="tf-box-icon style-2 wow fadeIn hover-effect-icon" data-wow-delay=".3s">
                                    <div class="icon">
                                        <i class="icon-stars-shapes-3"></i>
                                    </div>
                                    <div class="content">
                                        <h5 class="mb_12 title">
                                            <a href="services.html" class="mb_12  link text_white">Branding &
                                                Identity</a>
                                        </h5>
                                        <p class="text-body-default text_muted">Crafting visual identities that
                                            communicate
                                            trust,
                                            professionalism, and align perfectly with your business values.</p>
                                    </div>
                                </div>
                                <div class="tf-box-icon style-2 wow fadeIn hover-effect-icon" data-wow-delay=".4s">
                                    <div class="icon">
                                        <i class="icon-stars-shapes-4"></i>
                                    </div>
                                    <div class="content">
                                        <h5 class="mb_12 title">
                                            <a href="services.html" class="mb_12  link text_white">Digital
                                                Marketing</a>
                                        </h5>
                                        <p class="text-body-default text_muted">From SEO to paid ads, we create
                                            data-driven
                                            campaigns that
                                            generate leads, boost visibility, and deliver measurable ROI.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div class="seciton-case-studies tf-spacing-3">
                        <div class="tf-container">
                            <div class="heading-section style-1 mb_60">
                                <div class="row align-items-center">
                                    <div class="col-lg-7 d-grid gap_16">
                                        <div
                                            class="sub text-label text-uppercase text_secondary-color split-text effect-up">
                                            Case Studies</div>
                                        <h2 class="title text_secondary-color split-text effect-right">Client Success
                                            Stories
                                        </h2>
                                    </div>
                                    <div class="col-lg-5 wow fadeInRight" data-duration="2s">
                                        <a href="portfolio.html" class="tf-btn btn-hover-animate-2 ms-lg-auto">
                                            <span>View More</span>
                                            <span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex gap_10 wrap-portfolio-1 wow fadeInLeft">
                                <div class="portfolio-item hover-image-2 cursor-wrapper">
                                    <a href="portfolio-detail.html" class="img-style area-cursor-custom mb_20">
                                        <img loading="eager" decoding="async" width="435" height="580"
                                            src="images/portfolio-item-6.jpg" alt="portfolio"/>
                                        <div class="custom-cursor text-button fw-6">
                                            View
                                        </div>
                                    </a>
                                    <div class="content">
                                        <h4 class="title mb_10">
                                            <a href="portfolio-detail.html" class="link hover-line-text">200% Brand
                                                Growth</a>
                                        </h4>
                                        <div class="category text-label text-uppercase">Branding</div>
                                    </div>
                                </div>
                                <div class="portfolio-item hover-image-2 cursor-wrapper">
                                    <a href="portfolio-detail.html" class="img-style area-cursor-custom mb_20">
                                        <img loading="eager" decoding="async" width="965" height="580"
                                            src="images/portfolio-item-7.jpg" alt="portfolio"/>
                                        <div class="custom-cursor text-button fw-6">
                                            View
                                        </div>
                                    </a>
                                    <div class="content">
                                        <h4 class="title mb_10">
                                            <a href="portfolio-detail.html" class="link hover-line-text">ERP Boosts
                                                Efficiency</a>
                                        </h4>
                                        <div class="category text-label text-uppercase">DigitalShift</div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex gap_10 wrap-portfolio-2 wow fadeInRight">
                                <div class="portfolio-item hover-image-2 cursor-wrapper">
                                    <a href="portfolio-detail.html" class="img-style area-cursor-custom mb_20">
                                        <img loading="eager" decoding="async" width="965" height="580"
                                            src="images/portfolio-item-8.jpg" alt="portfolio"/>
                                        <div class="custom-cursor text-button fw-6">
                                            View
                                        </div>
                                    </a>
                                    <div class="content">
                                        <h4 class="title mb_10">
                                            <a href="portfolio-detail.html" class="link hover-line-text">Cutting Costs
                                                By
                                                30%</a>
                                        </h4>
                                        <div class="category text-label text-uppercase">Manufacturing</div>
                                    </div>
                                </div>
                                <div class="portfolio-item hover-image-2 cursor-wrapper">
                                    <a href="portfolio-detail.html" class="img-style area-cursor-custom mb_20">
                                        <img loading="eager" decoding="async" width="435" height="580"
                                            src="images/portfolio-item-9.jpg" alt="portfolio"/>
                                        <div class="custom-cursor text-button fw-6">
                                            View
                                        </div>
                                    </a>
                                    <div class="content">
                                        <h4 class="title mb_10">
                                            <a href="portfolio-detail.html" class="link hover-line-text">Retail Goes
                                                Digital</a>
                                        </h4>
                                        <div class="category text-label text-uppercase">Logistics</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="section-cta tf-spacing-1">
                        <div class="tf-container">
                            <div class="content-inner">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <div class="heading">
                                            <h2 class="title split-text split-lines-rotation-x">Ready To Take Your
                                                Business
                                                Further?</h2>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="content">
                                            <p class="text-body-2 mb_30 split-text split-lines-transform">Let’s discuss
                                                how we
                                                can help you achieve your business
                                                goals.</p>
                                            <div class="wrap-btn d-flex gap_20 flex-wrap wow fadeInUp">
                                                <a href="#" class="tf-btn btn-hover-animate-2 btn-bg-secondary">
                                                    <span>Schedule A Free Consultation</span>
                                                    <span></span>
                                                </a>
                                                <a href="#" class="tf-btn btn-hover-animate-border style-border-2 ">
                                                    <span>Call Us: 315-666-6688</span>
                                                    <span></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
          
                    <div class="section-testimonial tf-spacing-1">
                        <div class="tf-container">
                            <div class="testimonial-item style-1 flat-thumbs-tes wow fadeInUp">
                                <div class="box-contnet">
                                    <div class="swiper tf-tes-main " data-space-lg="10" data-effect="fade"
                                        data-space="0">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="content">
                                                    <p class="font-3 desc text_white h4 fw-4">"We’ve never experienced
                                                        such a
                                                        patient-focused approach. Kudos to the staff for being
                                                        informative,
                                                        patient, and consistently supportive."</p>
                                                    <div class="author">
                                                        <h5 class="text_white mb_2">Laura Chen</h5>
                                                        <p class="category text-label text-uppercase text_muted">
                                                            Logistics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="content">
                                                    <p class="font-3 desc text_white h4 fw-4">"Writing used to drain my
                                                        energy.
                                                        Now I feel more focused because the AI handles the heavy lifting
                                                        and
                                                        lets me refine"</p>
                                                    <div class="author">
                                                        <h5 class="text_white mb_2">Jamie L</h5>
                                                        <p class="category text-label text-uppercase text_muted">
                                                            Logistics</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="content">
                                                    <p class="font-3 desc text_white h4 fw-4">"They quickly understood
                                                        our
                                                        challenges and
                                                        delivered
                                                        real impact.
                                                        Costs dropped, and internal operations became smoother than ever
                                                        before."</p>
                                                    <div class="author">
                                                        <h5 class="text_white mb_2">Thomas V</h5>
                                                        <p class="category text-label text-uppercase text_muted">
                                                            Logistics</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="wrap-sw-button d-flex gap_12">
                                        <div class="sw-button style-2 nav-prev-tes">
                                            <i class="icon-CaretLeft"></i>
                                        </div>
                                        <div class="sw-button style-2 nav-next-tes">
                                            <i class="icon-CaretRight"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-img">
                                    <div class="swiper tf-thumb-tes " data-space-lg="10" data-space="0">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide hover-image-2">
                                                <div class="img-style">
                                                    <img loading="lazy" decoding="async" width="887" height="665"
                                                        src="images/testimonial-1.jpg" alt="testimonial"/>
                                                </div>
                                            </div>
                                            <div class="swiper-slide hover-image-2">
                                                <div class="img-style">
                                                    <img loading="lazy" decoding="async" width="887" height="665"
                                                        src="images/testimonial-5.jpg" alt="testimonial"/>
                                                </div>
                                            </div>
                                            <div class="swiper-slide hover-image-2">
                                                <div class="img-style">
                                                    <img loading="lazy" decoding="async" width="887" height="665"
                                                        src="images/testimonial-6.jpg" alt="testimonial"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
          
                    <div class="section-insights-1 sw-layout tf-spacing-1 pt-0">
                        <div class="heading-section style-default text-center mb_47">
                            <div class="sub text-label text-uppercase split-text effect-up">News & Insights</div>
                            <h2 class="title split-text effect-right">Latest News & Insights</h2>
                        </div>
                        <div class="swiper" data-preview="3" data-screen-xl="4" data-tablet="2" data-mobile="1"
                            data-mobile-sm="2" data-space-lg="20" data-space-md="20" data-space="15">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide wow fadeInLeft">
                                    <div class="blog-item style-default hover-image-translate">
                                        <a href="blog-detail.html" class="img-style mb_23">
                                            <img loading="lazy" decoding="async" width="445" height="334"
                                                src="images/blog-item-8.jpg" alt="blog"/>
                                            <div class="tag text-label">
                                                Innovation & Tech
                                            </div>
                                        </a>
                                        <div class="content">
                                            <ul class="meta-post mb_12 font-3">
                                                <li class="text-caption-1 ">
                                                    <div>
                                                        by <a href="#" class="link">Mike Hanley</a>
                                                    </div>
                                                </li>
                                                <li class="text-caption-1">June 12, 2025</li>
                                            </ul>
                                            <h5 class="title line-clamp-2">
                                                <a href="blog-detail.html" class=" link hover-line-text ">Launching Our
                                                    New Office in
                                                    Singapore</a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide wow fadeInLeft" data-wow-delay="0.2s">
                                    <div class="blog-item style-default hover-image-translate">
                                        <a href="blog-detail.html" class="img-style mb_23">
                                            <img loading="lazy" decoding="async" width="445" height="334"
                                                src="images/blog-item-9.jpg" alt="blog"/>
                                            <div class="tag text-label">
                                                Culture & People
                                            </div>
                                        </a>
                                        <div class="content">
                                            <ul class="meta-post mb_12 font-3">
                                                <li class="text-caption-1 ">
                                                    <div>
                                                        by <a href="#" class="link">Balla Daniella</a>
                                                    </div>
                                                </li>
                                                <li class="text-caption-1">May 06, 2025</li>
                                            </ul>
                                            <h5 class="titl line-clamp-2e">
                                                <a href="blog-detail.html" class="link hover-line-text ">CEO Talks
                                                    Innovation at Tech Summit 2025</a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide wow fadeInLeft" data-wow-delay="0.4s">
                                    <div class="blog-item style-default hover-image-translate">
                                        <a href="blog-detail.html" class="img-style mb_23">
                                            <img loading="lazy" decoding="async" width="445" height="334"
                                                src="images/blog-item-10.jpg" alt="blog"/>
                                            <div class="tag text-label">
                                                Press Releases
                                            </div>
                                        </a>
                                        <div class="content">
                                            <ul class="meta-post mb_12 font-3">
                                                <li class="text-caption-1 ">
                                                    <div>
                                                        by <a href="#" class="link">Kelemen Krisztina</a>
                                                    </div>
                                                </li>
                                                <li class="text-caption-1">May 08, 2025</li>
                                            </ul>
                                            <h5 class="title line-clamp-2">
                                                <a href="blog-detail.html" class=" link hover-line-text ">New Client
                                                    Onboarding Process Streamlined</a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide wow fadeInLeft" data-wow-delay="0.6s">
                                    <div class="blog-item style-default hover-image-translate">
                                        <a href="blog-detail.html" class="img-style mb_23">
                                            <img loading="lazy" decoding="async" width="445" height="334"
                                                src="images/blog-item-11.jpg" alt="blog"/>
                                            <div class="tag text-label">
                                                Case Studies
                                            </div>
                                        </a>
                                        <div class="content">
                                            <ul class="meta-post mb_12 font-3">
                                                <li class="text-caption-1 ">
                                                    <div>
                                                        by <a href="#" class="link">Kelemen Krisztina</a>
                                                    </div>
                                                </li>
                                                <li class="text-caption-1">May 08, 2025</li>
                                            </ul>
                                            <h5 class="title line-clamp-2">
                                                <a href="blog-detail.html" class=" link hover-line-text ">Partnering
                                                    with GreenFuture to Promote Sustainability</a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sw-dots style-1 sw-pagination-layout text-center mt_24">
                            </div>
                        </div>
                    </div>
          
                    <div class="section-newsletter-1">
                        <div class="tf-grid-layout md-col-2 align-items-center">
                            <div class="img-thumbs tf-animateCLP-left scale-up-img">
                                <img class="scale-up" width="960" height="679" src="images/newsletter-1.jpg"
                                    alt="newsletter"/>
                            </div>
                            <div class="content">
                                <div class="heading-section style-default mb_40">
                                    <div class="sub text-label text-uppercase mb_8 split-text effect-up">Newsletter
                                    </div>
                                    <h3 class="title split-text effect-right">Stay In The Loop</h3>
                                    <p class="desc text-body-default text_on-suface-1 split-text split-lines-transform">
                                        Subscribe to get the latest company news,
                                        expert insights, and industry trends delivered straight to your inbox — no spam,
                                        just
                                        value.</p>
                                </div>
                                <form class="form-newsletter style-1 mb_40 wow fadeInUp" action="#"
                                    accept-charset="utf-8">
                                    <div class="wrap gap_12">
                                        <fieldset class=" position-relative">
                                            <input type="email" class="tb-my-input style-border" name="email"
                                                placeholder="Enter Your Email" required=""/>
                                        </fieldset>
                                        <button name="submit" type="submit" class="tf-btn btn-hover-animate-2 ">
                                            <span class="text-body-1 fw-6">Subscribe</span>
                                        </button>
                                    </div>
                                </form>
                                <div class="trust d-flex align-items-center gap_12">
                                    <div class="group">
                                        <img class="wow fadeInLeft" data-wow-delay="0.1s" width="48" height="48"
                                            src="./assets/images/avatar/group-avatar-4-1.jpg" alt="avatar"/>
                                        <img class="wow fadeInLeft" data-wow-delay="0.2s" width="48" height="48"
                                            src="./assets/images/avatar/group-avatar-2-2.jpg" alt="avatar"/>
                                        <img class="wow fadeInLeft" data-wow-delay="0.3s" width="48" height="48"
                                            src="./assets/images/avatar/group-avatar-2-3.jpg" alt="avatar"/>
                                        <img class="wow fadeInLeft" data-wow-delay="0.4s" width="48" height="48"
                                            src="./assets/images/avatar/group-avatar-2-4.jpg" alt="avatar"/>
                                    </div>
                                    <p class="text-caption-1 text_primary">18K people are already getting
                                        value from our newsletter</p>
                                </div>
                            </div>
                        </div>
                    </div>
               

                </div> */}

                <h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br><h1>Hello Sir</h1><br></br>
		</>
	);
}
