"use client";

import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import YoutubeSlider from '@/components/YoutubeSlider'

export async function getServerSideProps() {
  try {
    const res = await fetch(
      "https://woocommerce-1457894-6495841.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&categories_exclude=52505&per_page=6&page=1",
      {
        headers: {
          Accept: "application/json",
          "User-Agent": "Next.js Server",
        },
      }
    )

    const posts = await res.json()

    return {
      props: {
        initialPosts: posts || [],
        totalPages:
          Number(res.headers.get("X-WP-TotalPages")) || 1,
      },
    }
  } catch (error) {
    return {
      props: {
        initialPosts: [],
        totalPages: 1,
      },
    }
  }
}


export default function Home({
  initialPosts,
  totalPages,
}) {

    const [posts, setPosts] = useState(initialPosts)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const loadMoreRef = useRef(null)

  /* =========================
     LOAD MORE POSTS
  ========================= */
  const loadMorePosts = async () => {
    if (loading || page >= totalPages) return

    try {
      setLoading(true)

      const nextPage = page + 1

      const res = await fetch(
        `https://woocommerce-1457894-6495841.cloudwaysapps.com//wp-json/wp/v2/posts?_embed&categories_exclude=52505&per_page=6&page=${nextPage}`
      )

      const newPosts = await res.json()

      setPosts((prev) => [...prev, ...newPosts])

      setPage(nextPage)
    } catch (error) {
      console.log("Load More Error:", error)
    } finally {
      setLoading(false)
    }
  }

  /* =========================
     INTERSECTION OBSERVER
  ========================= */
  useEffect(() => {
    if (!loadMoreRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMorePosts()
        }
      },
      {
        rootMargin: "300px",
      }
    )

    observer.observe(loadMoreRef.current)

    return () => observer.disconnect()
  }, [page, loading])

    
    const [selectedService, setSelectedService] = useState(''); // Initial empty selection



      useEffect(() => {
    document.body.classList.add("changelogo");

    return () => {
      document.body.classList.remove("changelogo");
    };
  }, []);

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
				<title>ANVKA HEALTHCARE</title>
				<meta name="description" content="Curewith3D is India's leading brand providing patient-specific surgical solutions, such as custom dental & orthopedic implant, surgical guides, models & VSP" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"/>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"/>
			</Head>

            <div class="hero-banner-3 parallax-container overflow-hidden">
                    <div class="parallax-video videsl" style={{ opacity: 0.8}}>
                        <video className="thumbs-video video-inner" autoPlay muted loop playsInline>
                            <source src="/assets/images/vix1.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div class="content">
                        <div class="tf-container">
                            <div class="row align-items-center">
                                <div class="col-lg-8">
                                    <h2 class="title text_white split-text effect-right">Where Excellence <br></br>Meets Innovation!</h2>
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
                        {/* <div class="support">
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
                        </div> */}
                    </div>
                </div>

                <div class="main-content">

                   
                    <div class="section-about-1 tf-spacing-1">
                        <div class="tf-container">
                         
                            <div class="heading-section mb_20">
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
                                                    <span>Read More</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* <div class="wrap-counter tf-grid-layout lg-col-4 tf-col-2">
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
                            </div> */}
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

                    <div class="section-insights-1 sw-layout tf-spacing-1 pt-0">
                        <div class="heading-section style-default text-center mb_47">
                            <br></br><br></br><br></br>
                            <h3 class="title split-text effect-right">Our Journey</h3>
                        </div> 

                        <div>
                            <img width="100%" src="/assets/images/ANVKAJOURNEY.webp" alt="service"/>
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
                            <h3 class="title split-text effect-right">Latest News & Insights</h3>
                        </div>
                        <div class="swiper" data-preview="3" data-screen-xl="4" data-tablet="2" data-mobile="1"
                            data-mobile-sm="2" data-space-lg="20" data-space-md="20" data-space="15">
                            <div class="swiper-wrapper">
                               
                                {posts?.map((post) => (
                                <div class="swiper-slide wow fadeInLeft" data-wow-delay="0.2s">
                                    <div class="blog-item style-default hover-image-translate">
                                        <a  href={`/news/${post.slug}`} class="img-style mb_23">
                                            <img loading="lazy" decoding="async" width="445" height="334"
                                                src={post?.yoast_head_json?.og_image?.[0]?.url} alt="blog"/>
                                            {/* <div class="tag text-label">
                                                Culture & People
                                            </div> */}
                                        </a>
                                        <div class="content">
                                            <ul class="meta-post mb_12 font-3">
                                                <li class="text-caption-1 ">
                                                    <div>
                                                        by <a href="#" class="link">{post.yoast_head_json.author}</a>
                                                    </div>
                                                </li>
                                                <li class="text-caption-1">{new Date(
                                  post.date
                                ).toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "2-digit",
                                  year: "numeric",
                                })}</li>
                                            </ul>
                                            <h5 class="titl line-clamp-2e">
                                                <a  href={`/news/${post.slug}`} class="link hover-line-text ">{post.title.rendered}</a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                ))}
                               
                            </div>
                            <div class="sw-dots style-1 sw-pagination-layout text-center mt_24">
                            </div>
                        </div>
                    </div>
                  

                     <div class="section-faqs-1 tf-spacing-1">
                        <div class="tf-container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="heading-section style-default">
                                       <div class="heading-section style-default text-center mb_47">
                                            <br/>                                    
                                            <h3 class="title split-text effect-right">The ANVKA Collective</h3>
                                        </div>
                                        <YoutubeSlider />
                                    </div>
                                </div>                          
                            </div>
                        </div>
                    </div>
                </div>
		 
		   
		</>
	);
}
