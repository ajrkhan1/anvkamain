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
                                            <ul class="meta-post font-3">
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
                                            <h5 class="titl line-clamp-2e blofont">
                                                <a  href={`/news/${post.slug}`} class="link hover-line-text " dangerouslySetInnerHTML={{ __html: post.title.rendered }}></a>
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
