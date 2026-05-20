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
                            <source src="/assets/images/vix1.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div class="content">
                        <div class="tf-container">
                            <div class="row align-items-center">
                                <div class="col-lg-8">
                                    <h1 class="title text_white split-text effect-right">ANVKA HEALTHCARE</h1>
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
                        <div class="support">
                            <div class="tf-container">
                                <div class="wrap d-flex">
                                    <h6 class="font-main text_white flex-0 title">The Support You Deserve:</h6>
                                    <ul class="tf-grid-layout xl-col-4 sm-col-2 ">
                                        <li class="d-flex align-items-center gap_8 text-button text_white"><i
                                                class="icon-CheckCircle"></i>24/7 Claims Support</li>
                                        <li class="d-flex align-items-center gap_8 text-button text_white"><i
                                                class="icon-CheckCircle"></i>Flexible Plans</li>
                                        <li class="d-flex align-items-center gap_8 text-button text_white"><i
                                                class="icon-CheckCircle"></i>Trusted Advisors</li>
                                        <li class="d-flex align-items-center gap_8 text-button text_white"><i
                                                class="icon-CheckCircle"></i>Financial Peace Of Mind</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="main-content">

                   
                    <div class="section-about-1 tf-spacing-1">
                        <div class="tf-container">
                         
                            <div class="heading-section mb_60">
                                <div class="row align-items-center">
                                    <div class="col-lg-6 d-grid gap_16">
                                        <div class="sub text-label text-uppercase split-text effect-up">About Anvka Healthcare</div>
                                        <h2 class="title split-text effect-right">Who We Are</h2>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right">
                                            <p class="text-body-2 text_secondary mb_24 split-text split-lines-transform">
                                                ANVKA is a growing ecosystem of ideas, innovation, and purpose-driven initiatives built around improving the healthcare environment and the lives connected to it. What began as a vision to create meaningful solutions has evolved into a network of brands and services that work across healthcare, technology, wellness, innovation, and community support. 
                                            </p>
                                            <div class="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="2s">
                                                <a href="/about-us" class="tf-btn btn-hover-animate-2 ">
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
             
                    {/* <div class="section-overview">
                        <div class="wrap-box">
                            <div class="col-content about">
                                <div class="tf-grid-layout tf-col-2 gap-0">
                                    <div class="counter-item">
                                        <div class="counter h1 text_secondary-color mb_6"><span class="numberCounter"
                                                data-count="99" data-duration="700">0</span><span
                                                class="sub-counter">%</span>
                                        </div>
                                        <p class="sub-title text-body-2">Customer Satisfaction</p>
                                        <div class="shape">
                                            <img src="assets/images/shape/shape-overview-1.png" alt="shape"/>
                                        </div>
                                    </div>
                                    <div class="thumbs">
                                        <img width="478" height="210" loading="lazy" decoding="async"
                                            src="/assets/images/overview-1.jpg" alt="overview"/>
                                    </div>
                                </div>
                                <div class="testimonial">
                                    <p class="text_white h4">"My experience with property management services has
                                        exceeded
                                        expectations. They efficiently manage properties with a professional and
                                        attentive
                                        approach in every situation.”
                                    </p>
                                    <div>
                                        <a href="#" class="text_white h5 link font-main mb_10">Cheyenne Mango</a>
                                        <div class="text-label letter-spacing-1 text-uppercase fw-6 text_white">
                                            CEO Themeflat
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-content mission">
                                <div class="heading">
                                    <h3 class="title mb_7">3M+ Coverage Value</h3>
                                    <p class="text-body-2"> Total insured value we've protected</p>
                                </div>
                                <a href="#" class="tf-btn btn-hover-animate-2 btn-bg-white">
                                    <span>Get A Free Quote</span>
                                    <span></span>
                                </a>
                                <div class="shape">
                                    <img src="assets/images/shape/shape-overview-2.png" alt="shape"/>
                                </div>
                            </div>
                            <div class="col-content vision">
                                <div class="thumbs">
                                    <img loading="lazy" decoding="async" width="428" height="630"
                                        src="/assets/images/overview-2.jpg" alt="overview"/>
                                </div>
                                <div class="content">
                                    <h3 class="text_white mb_8">95% Claims Approved</h3>
                                    <p class="text-body-2 text_white">High claim success rate — fast and reliable</p>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    

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
                                        <a href="/brands"
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
                                                    <p class="font-3 text-body-default text_white desc mb_12">LINTEX is a specialized uniform and fashion brand that designs high-quality, comfortable, and durable apparel.</p>
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
                                                    <p class="font-3 text-body-default text_white desc mb_12">Curewith3D is a healthcare innovation company specializing in customized, patient-specific 3D-printed...</p>
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
                                                    <p class="font-3 text-body-default text_white desc mb_12">CareTAB.ai is building a quality-driven, outcome-focused, technology-enabled ecosystem for healthcare...</p>
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
                                                    <p class="font-3 text-body-default text_white desc mb_12">Tumble Salon reflects the philosophy of wellness beyond healthcare by offering professional grooming...</p>
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

                    <div class="section-insights-1 sw-layout tf-spacing-1 pt-0">
                        <div class="heading-section style-default text-center mb_47">
                            <br></br><br></br><br></br>
                            <h2 class="title split-text effect-right">Latest News & Insights</h2>
                        </div> 

                        <div>
                            <img width="100%" height="400px" src="/assets/images/ANVKAJOURNEY.webp" alt="service"/>
                        </div>                       
                    </div>

                    

             
                    {/* <div class="section-service-2 tf-spacing-1">
                        <div class="tf-container">
                            <div class="heading-section style-1 mb_60">
                                <div class="row align-items-center">
                                    <div class="col-lg-7 d-grid gap_16">
                                        <div class="sub text-label text-uppercase text_white split-text effect-up">Our
                                            Services
                                        </div>
                                        <h2 class="title text_white split-text effect-right">We Turn Vision Into Reality </h2>
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
                                            <a href="services.html" class="mb_12  link text_white">Uniform Production</a>
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
                                            <a href="services.html" class="mb_12  link text_white">Scrub Manufacturing</a>
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
                                            <a href="services.html" class="mb_12  link text_white">Custom Medical Implants</a>
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
                                            <a href="services.html" class="mb_12  link text_white">3D Implant Manufacturing</a>
                                        </h5>
                                        <p class="text-body-default text_muted">From SEO to paid ads, we create
                                            data-driven
                                            campaigns that
                                            generate leads, boost visibility, and deliver measurable ROI.</p>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div> */}
                   
                    <div class="section-cta tf-spacing-1">
                        <div class="tf-container">
                            <div class="content-inner">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <div class="heading">
                                            <h2 class="title split-text split-lines-rotation-x cwhite">Ready To Take Your Business Further?</h2>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="content">                                           
                                            <div class="wrap-btn d-flex gap_20 flex-wrap wow fadeInUp">
                                                <a href="#" class="tf-btn btn-hover-animate-2 btn-bg-secondary">
                                                    <span>Schedule A Free Consultation</span>
                                                    <span></span>
                                                </a>
                                                <a href="#" class="tf-btn btn-hover-animate-border style-border-2 bwhite">
                                                    <span>Call Us: +91-92055 59801</span>
                                                    <span></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               
                    {/* <div class="section-testimonial tf-spacing-1">
                        <div class="tf-container">
                            <div class="testimonial-item style-1 flat-thumbs-tes wow fadeInUp">
                                <div class="box-contnet">
                                    <div class="swiper tf-tes-main " data-space-lg="10" data-effect="fade"
                                        data-space="0">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="content">
                                                    <p class="font-3 desc text_white h4 fw-4">"We’ve never experienced such a patient-focused approach. Kudos to the staff for being informative, patient, and consistently supportive."</p>
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
                                                    <p class="font-3 desc text_white h4 fw-4">"They quickly understood our challenges and delivered real impact. Costs dropped, and internal operations became smoother than ever before."</p>
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
                                                        src="/assets/images/testimonial-1.jpg" alt="testimonial"/>
                                                </div>
                                            </div>
                                            <div class="swiper-slide hover-image-2">
                                                <div class="img-style">
                                                    <img loading="lazy" decoding="async" width="887" height="665"
                                                        src="/assets/images/testimonial-5.jpg" alt="testimonial"/>
                                                </div>
                                            </div>
                                            <div class="swiper-slide hover-image-2">
                                                <div class="img-style">
                                                    <img loading="lazy" decoding="async" width="887" height="665"
                                                        src="/assets/images/testimonial-6.jpg" alt="testimonial"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div class="section-insights-1 sw-layout tf-spacing-1 pt-0">
                        <div class="heading-section style-default text-center mb_47">
                            <br></br><br></br><br></br>
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
                                                src="/assets/images/blog-item-8.jpg" alt="blog"/>
                                            <div class="tag text-label">
                                                Innovation & Tech
                                            </div>
                                        </a>
                                        <div class="content">
                                            <ul class="meta-post mb_12 font-3">
                                                <li class="text-caption-1 ">
                                                    <div>
                                                        by <a href="#" class="link">Monu Singh</a>
                                                    </div>
                                                </li>
                                                <li class="text-caption-1">June 12, 2026</li>
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
                                                src="/assets/images/blog-item-9.jpg" alt="blog"/>
                                            <div class="tag text-label">
                                                Culture & People
                                            </div>
                                        </a>
                                        <div class="content">
                                            <ul class="meta-post mb_12 font-3">
                                                <li class="text-caption-1 ">
                                                    <div>
                                                        by <a href="#" class="link">Balla Yadav</a>
                                                    </div>
                                                </li>
                                                <li class="text-caption-1">May 06, 2026</li>
                                            </ul>
                                            <h5 class="titl line-clamp-2e">
                                                <a href="blog-detail.html" class="link hover-line-text ">CEO Talks
                                                    Innovation at Tech Summit 2026</a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide wow fadeInLeft" data-wow-delay="0.4s">
                                    <div class="blog-item style-default hover-image-translate">
                                        <a href="blog-detail.html" class="img-style mb_23">
                                            <img loading="lazy" decoding="async" width="445" height="334"
                                                src="/assets/images/blog-item-10.jpg" alt="blog"/>
                                            <div class="tag text-label">
                                                Press Releases
                                            </div>
                                        </a>
                                        <div class="content">
                                            <ul class="meta-post mb_12 font-3">
                                                <li class="text-caption-1 ">
                                                    <div>
                                                        by <a href="#" class="link">Nishu Neggi</a>
                                                    </div>
                                                </li>
                                                <li class="text-caption-1">May 08, 2026</li>
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
                                                src="/assets/images/blog-item-11.jpg" alt="blog"/>
                                            <div class="tag text-label">
                                                Case Studies
                                            </div>
                                        </a>
                                        <div class="content">
                                            <ul class="meta-post mb_12 font-3">
                                                <li class="text-caption-1 ">
                                                    <div>
                                                        by <a href="#" class="link">Vijay Kumar</a>
                                                    </div>
                                                </li>
                                                <li class="text-caption-1">May 08, 2026</li>
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
                  
                    {/* <div class="section-request">
                        <div class="thumbs overflow-hidden">
                            <img data-speed="0.8" data-lag="0" loading="eager" decoding="async" width="1920"
                                height="975" src="/assets/images/banner-request.jpg" alt="request"/>
                        </div>
                        <div class="box-request">
                            <div class="tf-container">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <div class="box-left">
                                            <h2 class="text_white mb_36 split-text effect-blur-fade">Get Your Free
                                                Insurance
                                                Quote Today</h2>
                                            <p class="text_white text-body-default split-text split-lines-rotation-x">
                                                Fill
                                                out
                                                the quick form our experts will
                                                contact
                                                you to find the best
                                                coverage
                                                for your needs. No pressure, no hidden fees. Just honest advice.</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <form class="form-request">
                                            <div class="heading mb_24 text-center mb_32">
                                                <h5 class="mb_8 ">Let’s Talk Or Ask Us Anything</h5>
                                                <p class="text-body-default text_secondary">Fill out the form and
                                                    we’ll be
                                                    in
                                                    touch
                                                    soon.</p>
                                            </div>
                                            <div class="wrap d-grid gap_8 mb_32">
                                                <fieldset class="">
                                                    <input class="" id="Name" type="text" placeholder="Full name"
                                                        name="text" tabindex="2" value="" aria-required="true"
                                                        required=""/>
                                                </fieldset>
                                                <fieldset class="">
                                                    <input class="" id="email" type="email" placeholder="Email address"
                                                        name="email" tabindex="2" value="" aria-required="true"
                                                        required=""/>
                                                </fieldset>
                                                <fieldset class="">
                                                    <input class="" id="phone" type="number" placeholder="Phone Number"
                                                        name="text" tabindex="2" value="" aria-required="true"
                                                        required=""/>
                                                </fieldset>

                                                <fieldset>
                                                    <textarea id="comment" class="" rows="4"
                                                        placeholder="How can we help you?" tabindex="2"
                                                        aria-required="true" required=""></textarea>
                                                </fieldset>
                                            </div>
                                            <button class="tf-btn btn-hover-animate-2  btn-bg-1 btn-px-24"
                                                type="submit">
                                                <span>Submit Request</span>
                                                <span class="bg-effect"></span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    
                    

                     {/* <div class="section-faqs-1 tf-spacing-1">
                        <div class="tf-container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="heading-section style-default">
                                        <div class="sub text-label text-uppercase lh-20 split-text effect-up">FAQs</div>
                                        <h2 class="title split-text effect-blur-fade">Frequently Asked Questions</h2>
                                        <p
                                            class="desc text-body-default text_secondary split-text split-lines-transform">
                                            Subscribe to get the latest company
                                            news, expert
                                            insights, and industry
                                            trends delivered straight to your inbox — no spam, just value.</p>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <ul class="accordion-wrap d-grid gap_16" id="accordion-faq">
                                        <li class="accordion-item style-2 action_click wow fadeInRight"
                                            data-wow-delay=".1s">
                                            <a href="#accordion-faq-1" class="accordion-title action "
                                                data-bs-toggle="collapse" aria-expanded="true"
                                                aria-controls="accordion-faq-1">
                                                <div class="heading">
                                                    <h5 class="title text-capitalize">
                                                        Q1: What types of insurance do you offer?
                                                    </h5>
                                                    <span class="icon"></span>
                                                </div>
                                            </a>
                                            <div id="accordion-faq-1" class="collapse show"
                                                data-bs-parent="#accordion-faq">
                                                <div class="accordion-faqs-content">
                                                    <p class="text-body-default text_secondary">
                                                        Simply fill out our online form or contact us directly — we’ll
                                                        send you
                                                        a personalized quote within 24 hours.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="accordion-item style-2 action_click wow fadeInRight"
                                            data-wow-delay=".2s">
                                            <a href="#accordion-faq-2" class="accordion-title action  collapsed"
                                                data-bs-toggle="collapse" aria-expanded="false"
                                                aria-controls="accordion-faq-2">
                                                <div class="heading">
                                                    <h5 class="title text-capitalize">
                                                        Q2: How do I get a quote?</h5>
                                                    <span class="icon"></span>
                                                </div>
                                            </a>
                                            <div id="accordion-faq-2" class="collapse" data-bs-parent="#accordion-faq">
                                                <div class="accordion-faqs-content">
                                                    <p class="text-body-default text_secondary">
                                                        Simply fill out our online form or contact us directly — we’ll
                                                        send you
                                                        a personalized quote within 24 hours.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="accordion-item style-2 action_click wow fadeInRight"
                                            data-wow-delay=".3s">
                                            <a href="#accordion-faq-3" class="accordion-title action  collapsed"
                                                data-bs-toggle="collapse" aria-expanded="false"
                                                aria-controls="accordion-faq-3">
                                                <div class="heading">
                                                    <h5 class="title text-capitalize">
                                                        Q3: Is there a free consultation before I buy a plan?</h5>
                                                    <span class="icon"></span>
                                                </div>
                                            </a>
                                            <div id="accordion-faq-3" class="collapse" data-bs-parent="#accordion-faq">
                                                <div class="accordion-faqs-content">
                                                    <p class="text-body-default text_secondary">
                                                        Simply fill out our online form or contact us directly — we’ll
                                                        send you
                                                        a personalized quote within 24 hours.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="accordion-item style-2 action_click wow fadeInRight"
                                            data-wow-delay=".4s">
                                            <a href="#accordion-faq-4" class="accordion-title action  collapsed"
                                                data-bs-toggle="collapse" aria-expanded="false"
                                                aria-controls="accordion-faq-4">
                                                <div class="heading">
                                                    <h5 class="title text-capitalize">
                                                        Q4: Can I customize my insurance plan?</h5>
                                                    <span class="icon"></span>
                                                </div>
                                            </a>
                                            <div id="accordion-faq-4" class="collapse" data-bs-parent="#accordion-faq">
                                                <div class="accordion-faqs-content">
                                                    <p class="text-body-default text_secondary">
                                                        Simply fill out our online form or contact us directly — we’ll
                                                        send you
                                                        a personalized quote within 24 hours.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="accordion-item style-2 action_click wow fadeInRight"
                                            data-wow-delay=".5s">
                                            <a href="#accordion-faq-5" class="accordion-title action  collapsed"
                                                data-bs-toggle="collapse" aria-expanded="false"
                                                aria-controls="accordion-faq-5">
                                                <div class="heading">
                                                    <h5 class="title text-capitalize">
                                                        Q5: What if I want to cancel my policy?
                                                    </h5>
                                                    <span class="icon"></span>
                                                </div>
                                            </a>
                                            <div id="accordion-faq-5" class="collapse" data-bs-parent="#accordion-faq">
                                                <div class="accordion-faqs-content">
                                                    <p class="text-body-default text_secondary">
                                                        Simply fill out our online form or contact us directly — we’ll
                                                        send you
                                                        a personalized quote within 24 hours.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
		 
		   
		</>
	);
}
