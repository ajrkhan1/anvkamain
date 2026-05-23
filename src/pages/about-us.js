import Head from "next/head";


export default function Home() {


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
                            <ul class="tf-breadcrumb style-2 mb_16">
                                <li class="text-label text_white lh-16"><a href="/index.html"
                                        class="link text_white">HOME</a>
                                </li>
                                <li class="text_white text-label lh-16">About Us</li>
                            </ul>
                            <h2 class="text_white">About Us</h2>
                        </div>
                    </div>
                </div>


                <div class="main-content">                    
                   <div class="section-about tf-spacing-1">
                        <div class="tf-container">
                            <div class="box-about">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <div class="heading-section style-default mb_28">
                                            <div class="sub text-label text-uppercase split-text effect-up">About Anvka Healthcare</div>
                                            <h2 class="title split-text effect-right">Who We Are</h2>
                                        </div>
                                        <div class="mb_28 wow fadeInUp">
                                            <p class="mb_16 text-body-default">
                                                At Anvka Healthcare, we are committed to delivering innovative and reliable healthcare solutions that improve lives and support medical excellence. With a strong focus on quality, trust, and advancement, we aim to provide modern healthcare products and services that meet the evolving needs of medical professionals and patients alike.</p>                                          
                                        </div>
                                        <a href="/contact-us" class="tf-btn btn-hover-animate-2 wow fadeInUp"
                                            data-wow-delay="0.4s">
                                            <span>Get in Touch</span>
                                            <span></span>
                                        </a>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="wrap-content tf-grid-layout tf-col-2 gap_10">
                                            <div
                                                class="counter-item d-flex flex-column align-items-center justify-content-center bg-1">
                                                <div class="counter h1"><span class="numberCounter" data-count="15"
                                                        data-duration="700">0</span><span class="sub-counter">+</span>
                                                </div>
                                                <p class="sub-title text-body-2">Years of Experience </p>
                                            </div>
                                            <div
                                                class="counter-item d-flex flex-column align-items-center justify-content-center bg-2">
                                                <div class="counter h1"><span class="numberCounter" data-count="6"
                                                        data-duration="700">0</span><span class="sub-counter">k+</span>
                                                </div>
                                                <p class="sub-title text-body-2">Happy Clients</p>
                                            </div>
                                            <div class="img-style">
                                                <img width="308" height="308" src="/assets/images/about-1.jpg" alt=""/>
                                            </div>
                                            <div
                                                class="counter-item d-flex flex-column align-items-center justify-content-center bg-3">
                                                <div class="counter h1 text_white"><span class="numberCounter"
                                                        data-count="120" data-duration="700">0</span><span
                                                        class="sub-counter">+</span></div>
                                                <p class="sub-title text-body-2 text_white">Professional Advisors</p>
                                            </div>
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
                                                    src="assets/images/3d.png" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a href="service-detail.html"
                                                    class="fw-5 text_white title link mb_12 h5">Curewith3D</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Curewith3D is a healthcare innovation company specializing in customized, patient-specific 3D-printed...</p>
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
                                                    src="assets/images/caretab.png" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a href="service-detail.html"
                                                    class="fw-5 text_white title link mb_12 h5">CareTAB</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">CareTAB.ai is building a quality-driven, outcome-focused, technology-enabled ecosystem for healthcare...</p>
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
                                                    src="assets/images/tumble.png" alt="service"/>
                                            </div>
                                            <div class="content">
                                                <a href="service-detail.html"
                                                    class="fw-5 text_white title link mb_12 h5">Tumble Salon</a>
                                                <div class="wrap">
                                                    <p class="font-3 text-body-default text_white desc mb_12">Tumble Salon reflects the philosophy of wellness beyond healthcare by offering professional grooming...</p>
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
