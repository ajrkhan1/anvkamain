"use client";
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useEffect } from "react";
import moment from "moment"

/* =========================
   SERVER SIDE PROPS
========================= */
export async function getServerSideProps(context) {
  try {
    const posturl = context.params.blogsSlug

    const [postRes, recentRes, catedata] = await Promise.all([
      fetch(
        `https://woocommerce-1457894-6495841.cloudwaysapps.com/wp-json/wp/v2/posts?slug=${posturl}&_embed`
      ),
      fetch(
        "https://woocommerce-1457894-6495841.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&categories_exclude=8&per_page=10"
      ),
      fetch(
        "https://woocommerce-1457894-6495841.cloudwaysapps.com/wp-json/wp/v2/categories"
      ),
    ])

    const postData = await postRes.json()
    const recentData = await recentRes.json()
    const CatData = await catedata.json()

    if (!postData || postData.length === 0) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        posts: postData[0],
        posts5: recentData || [],
        cat: CatData || [],
      },
    }
  } catch (error) {
    console.log("SERVER ERROR:", error)

    return {
      notFound: true,
    }
  }
}

/* =========================
   COMPONENT
========================= */
const SingleBlog = ({ posts, posts5, cat }) => {

        useEffect(() => {
          document.body.classList.add("headerbodyc");

          return () => {
            document.body.classList.remove("headerbodyc");
          };
        }, []);




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
                        <img class="img-cover" width="1920" height="720" loading="eager" decoding="async"  src={posts.extra_post_image_url} alt="page-title"/>
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
                                               
                                                <h3 class="title text-capitalize mb_16">{posts?.title?.rendered}</h3>
                                                <ul class="meta">
                                                    <li>
                                                        <div class="text-caption-1 text_secondary mb_4">Author</div>
                                                        <div class="text-button text_primary">{posts.yoast_head_json.author}</div>
                                                    </li>
                                                    <li>
                                                        <div class="text-caption-1 text_secondary mb_4">Post Date</div>
                                                        <div class="text-button text_primary">{new Date(
                                  posts.date
                                ).toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "2-digit",
                                  year: "numeric",
                                })}</div>
                                                    </li>
                                                    {/* <li>
                                                        <div class="text-caption-1 text_secondary mb_4">Comment</div>
                                                        <div class="text-button text_primary">Full-Time</div>
                                                    </li> */}
                                                </ul>
                                            </div>
                                            <div dangerouslySetInnerHTML={{
                            __html:
                              posts?.content?.rendered || "",
                          }}></div>
                                        </div>
                                     
                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>   
                <br></br><br></br><br></br>
    </>
  )
}

export default SingleBlog