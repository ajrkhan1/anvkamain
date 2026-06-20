"use client";
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useEffect } from "react";


/* =========================
   SERVER SIDE PROPS
========================= */


/* =========================
   COMPONENT
========================= */
const SingleBlog = () => {
  return (
    <>
      <Head>
        <title>
         Details
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<main class="main">
      {/* <div class="site-breadcrumb blogbanner">
            <div class="container">
                <h2 class="breadcrumb-title">Our Blog</h2>
                <ul class="breadcrumb-menu">
                    <li><a href="/">Home</a></li>
                    <li class="active">Our Blog</li>
                </ul>
            </div>
        </div> */}

        <div class="blog-post-detail">

          <div class="page-layout-v04">
                    <div class="img-style">
                        <img class="img-cover" width="1920" height="720" loading="eager" decoding="async" src="/assets/images/thumbs-main-post.jpg" alt="page-title"/>
                    </div>
                    <div class="content">
                        <div class="tf-container align-items-center text-center">
                            {/* <ul class="tf-breadcrumb style-2 mb_16">
                                <li class="text-label text_white lh-16"><a href="/index.html"
                                        class="link text_white">HOME</a>
                                </li>
                                <li class="text_white text-label lh-16">About Us</li>
                            </ul> */}
                     
                        </div>
                    </div>
                </div>
                  <br></br>  <br></br>  <br></br>

                        <div class="tf-container ">
                            <div class="row">
                                <div class="col-md-2">
                                    {/* <ul class="tf-social style-2 flex-column fixed-thumb">   
                                      <li><a href="https://www.linkedin.com/company/anvkahealthcare/" class="icon-LinkedinLogo"></a></li>
                                      <li><a href="https://www.facebook.com/anvkahealthcarec" class="icon-FaceBook-2"></a></li>
                                      <li><a href="https://www.instagram.com/anvkahealthcare/" class="icon-instagram-logo"></a></li>                                        
                                    </ul> */}
                                </div>
                                <div class="col-xl-8 col-md-10">
                                    <div class="content-inner">
                                        <div class="post-detail">
                                            <div class="heading-title mb_40">
                                               
                                                <h3 class="title text-capitalize mb_16">Building A Human-Centered Organization</h3>
                                                <ul class="meta">
                                                    <li>
                                                        <div class="text-caption-1 text_secondary mb_4">Author</div>
                                                        <div class="text-button text_primary">Jordyn Culhane</div>
                                                    </li>
                                                    <li>
                                                        <div class="text-caption-1 text_secondary mb_4">Post Date</div>
                                                        <div class="text-button text_primary">May 18, 2025</div>
                                                    </li>
                                                    <li>
                                                        <div class="text-caption-1 text_secondary mb_4">Comment</div>
                                                        <div class="text-button text_primary">Full-Time</div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p class=" text-body-2  mb_40">
                                                In every successful organization, there’s more happening beneath the
                                                surface
                                                than
                                                what clients and stakeholders see. Behind polished products and
                                                professional
                                                services lies a complex network of people, processes, and purpose—all
                                                working
                                                together to move the business forward.
                                                In this edition of Inside the Enterprise, we open the door to our
                                                internal
                                                operations: how we structure our teams, optimize workflows, and nurture
                                                a
                                                culture
                                                that supports growth, accountability, and innovation.
                                            </p>
                                            <div class="thumbs  mb_40">
                                                <img loading="lazy" decoding="async" width="860" height="512"
                                                    src="/assets/images/thumbs-1.jpg" alt="thumbs"/>
                                            </div>
                                            <div class="passive  d-grid gap_12 mb_28">
                                                <h4>1. People First: Building A Human-Centered Organization</h4>
                                                <div class="text_secondary">
                                                    <p class="text-body-2">
                                                        We believe that great teams build great companies. That’s why we
                                                        focus
                                                        on
                                                        hiring
                                                        not just for skill, but for alignment with our values—curiosity,
                                                        collaboration,
                                                        and ownership.
                                                    </p>
                                                    <p class="text-body-2"> Internally, we maintain:</p>
                                                    <ul class="text-body-2">
                                                        <li>A flat structure that empowers decision-making at all levels
                                                        </li>
                                                        <li>Regular 1:1 check-ins to ensure alignment and address
                                                            blockers</li>
                                                        <li>Ongoing learning & development programs to support career
                                                            growth
                                                        </li>
                                                    </ul>
                                                    <p class="text-body-2">
                                                        We don’t just work together—we invest in each other’s success.
                                                    </p>
                                                </div>
                                                <div class="text_secondary">
                                                    <p class="text-body-2">
                                                        We believe that great teams build great companies. That’s why we
                                                        focus
                                                        on
                                                        hiring
                                                        not just for skill, but for alignment with our values—curiosity,
                                                        collaboration,
                                                        and ownership.
                                                    </p>
                                                    <p class="text-body-2"> Internally, we maintain:</p>
                                                    <ul class="text-body-2">
                                                        <li>A flat structure that empowers decision-making at all levels
                                                        </li>
                                                        <li>Regular 1:1 check-ins to ensure alignment and address
                                                            blockers</li>
                                                        <li>Ongoing learning & development programs to support career
                                                            growth
                                                        </li>
                                                    </ul>
                                                    <p class="text-body-2">
                                                        We don’t just work together—we invest in each other’s success.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="passive d-grid gap_12 mb_40">
                                                <h4>2. Optimizing Process Without Killing Flexibility</h4>
                                                <div class="text_secondary">
                                                    <p class="text-body-2">Corporate processes often get a bad
                                                        reputation: slow,
                                                        rigid, overly
                                                        complex.
                                                        But
                                                        process, when designed well, amplifies creativity rather than
                                                        limits it.
                                                    </p>
                                                    <p class="text-body-2">Here’s how we balance structure and speed:
                                                    </p>
                                                    <ul class="text-body-2">
                                                        <li>Agile sprint cycles with flexibility to pivot
                                                        </li>
                                                        <li>Clear documentation and onboarding materials
                                                        </li>
                                                        <li>Project retrospectives that turn lessons into improvements
                                                        </li>
                                                    </ul>
                                                    <p class="text-body-2">We treat process like product: it must evolve
                                                        with
                                                        our people and goals.</p>
                                                </div>
                                            </div>
                                            <div class="passive d-grid gap_12 mb_40">
                                                <h4>3. Purpose That Drives Action</h4>
                                                <div class="text_secondary">
                                                    <p class="text-body-2">Every decision we make, from who we hire to
                                                        how we
                                                        prioritize work, ties back to a core purpose: helping businesses
                                                        grow
                                                        through smart, sustainable digital transformation.
                                                    </p>
                                                    <p class="text-body-2">This purpose is not just a slogan—it’s
                                                        embedded in
                                                        how we:</p>
                                                    <ul class="text-body-2">
                                                        <li>Set quarterly OKRs that connect individual work to company
                                                            goals
                                                        </li>
                                                        <li>Evaluate project success beyond revenue—looking at client
                                                            impact
                                                        </li>
                                                        <li>Encourage teams to challenge the status quo when needed</li>
                                                    </ul>
                                                    <p class="text-body-2">By aligning purpose with action, we stay
                                                        focused on
                                                        what truly matters.</p>
                                                </div>
                                            </div>
                                            <div class="quote mb_40">
                                                <p class="text-body-2 text_primary mb_24">"My experience with property
                                                    management
                                                    services
                                                    has exceeded expectations. They efficiently manage properties with a
                                                    professional and attentive approach in every situation.”</p>
                                                <div class="author">
                                                    <h5 class="text_primary">Cheyenne Mango</h5>
                                                    <div
                                                        class="text-label text_secondary fw-6 text-uppercase letter-spacing-1">
                                                        CEO
                                                        Avitex</div>
                                                </div>
                                            </div>
                                            <div class="passive d-grid gap_12 mb_40">
                                                <h4>Looking Inward To Grow Outward</h4>
                                                <div>
                                                    <p class="text-body-2 text_secondary">Inside the enterprise is where
                                                        the
                                                        real
                                                        work
                                                        happens—the
                                                        late-night debugging, the strategic debates, the moments of
                                                        quiet
                                                        progress.
                                                        And
                                                        while those things may not always make headlines, they’re what
                                                        allow us
                                                        to
                                                        deliver consistent value to our clients and partners.
                                                    </p>
                                                    <p class="text-body-2 text_secondary"> At the end of the day, strong
                                                        organizations aren’t built by chance. They’re
                                                        built by design—from the inside out.</p>
                                                </div>
                                            </div>
                                            <div class="thumbs mb_40">
                                                <img loading="lazy" decoding="async" width="860" height="512"
                                                    src="/assets/images/thumbs-2.jpg" alt="thumbs"/>
                                            </div>
                                            <div class="passive d-grid gap_12 mb_40">
                                                <h4>Looking Inward To Grow Outward</h4>
                                                <div>
                                                    <p class="text-body-2 text_secondary">Inside the enterprise is where
                                                        the
                                                        real
                                                        work
                                                        happens—the
                                                        late-night debugging, the strategic debates, the moments of
                                                        quiet
                                                        progress.
                                                        And
                                                        while those things may not always make headlines, they’re what
                                                        allow us
                                                        to
                                                        deliver consistent value to our clients and partners.
                                                    </p>
                                                    <p class="text-body-2 text_secondary"> At the end of the day, strong
                                                        organizations aren’t built by chance. They’re
                                                        built by design—from the inside out.</p>
                                                </div>
                                            </div>
                                            <div class="passive d-grid gap_12 mb_40">
                                                <h4 class="text-capitalize">Want to learn more about our culture and how
                                                    we
                                                    work?</h4>
                                                <p class="text-body-2 text_secondary">Follow our blog for more
                                                    behind-the-scenes
                                                    insights, or
                                                    connect with us to explore partnership opportunities.</p>
                                            </div>
                                         
                                            {/* <div class="tf-article-navigation style-1">
                                                <div class="item prev">
                                                    <a href="single-post-1.html"
                                                        class="hover-underline-link text-button text_secondary-color fw-6 mb_6">Previous</a>
                                                    <h5><a href="#" class="link line-clamp-2">Client Success Stories</a>
                                                    </h5>
                                                </div>
                                                <div class="item next">
                                                    <a href="single-post-1.html"
                                                        class="hover-underline-link text-button text_secondary-color fw-6 mb_6">Next</a>
                                                    <h5><a href="#" class="link line-clamp-2">Branded Impact</a></h5>
                                                </div>
                                            </div> */}
                                        </div>
                                     
                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

      </main>
    </>
  )
}

export default SingleBlog