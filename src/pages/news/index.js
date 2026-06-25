"use client";

import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";

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
        `https://woocommerce-1457894-6495841.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&categories_exclude=52505&per_page=6&page=${nextPage}`
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

    
    const [selectedService, setSelectedService] = useState(''); // Initial empty selection) {


	return (
		<>
			<Head>
				<title>News & Media - ANVKA</title>
				<meta name="description" content="For sending DICOM Data Online" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
			</Head>

            <div class="page-layout-v04">
                    <div class="img-style">
                        <img class="img-cover" width="1920" height="720" loading="eager" decoding="async" src="/assets/images/newsart.webp" alt="page-title"/>
                    </div>
                    <div class="content">
                        <div class="tf-container">
                            {/* <ul class="tf-breadcrumb style-2 mb_16">
                                <li class="text-label text_white lh-16"><a href="/index.html"
                                        class="link text_white">HOME</a>
                                </li>
                                <li class="text_white text-label lh-16">Contact Us</li>
                            </ul> */}
                            <div className="row">
                                <div className="col-sm-8">
                                    <h2 class="text_white newcolorx">News & Media</h2>
                                    {/* <p className="headrp">
                                        CureWith3D, a healthcare-innovation company focused on creating customized, patient-specific 3D-printed surgical guides, orthopedic & dental implants, and anatomical models.
                                    </p> */}
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>


                <div class="main-content">
                    <div class="blog-post-3 tf-spacing-1">
                        <div class="tf-container">
                            <div class="tf-grid-layout lg-col-3 sm-col-2">

                               {posts?.map((post) => (
                                <div class="blog-item style-default hover-image-translate">
                                    <a  href={`/news/${post.slug}`} class="img-style mb_23">
                                        <img loading="lazy" decoding="async"  src={post?.yoast_head_json?.og_image?.[0]?.url} alt="blog"/>
                                        {/* <div class="tag text-label">
                                            Life Insurance
                                        </div> */}
                                    </a>
                                    <div class="content">
                                        <ul class="meta-post font-3">
                                            <li class="text-caption-1 ">
                                                <div>
                                                    by <a href="#" class="link">{post.yoast_head_json.author}</a>
                                                </div>
                                            </li>
                                            <li class="text-caption-1"> {new Date(
                                                post.date
                                                ).toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "2-digit",
                                                year: "numeric",
                                                })}</li>
                                        </ul>
                                        <h5 class="title line-clamp-2 blofont">
                                            <a  href={`/news/${post.slug}`} class=" link hover-line-text " dangerouslySetInnerHTML={{ __html: post.title.rendered }}></a>
                                        </h5>
                                    </div>
                                </div>
                               ))}
                               <div ref={loadMoreRef}></div>

                                 {/* LOADING */}
                                {loading && (
                                    <p className="text-center">
                                    Loading...
                                    </p>
                                )}

                                {/* END */}
                                {page >= totalPages && (
                                    <p className="text-center">
                                    No more posts
                                    </p>
                                )}

                            </div>

                            {/* <ul class="wg-pagination style-1 justify-content-center">
                                <li class="active">
                                    <a href="#">1</a>
                                </li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li class="arrow">
                                    <a href="#"><i class="icon-CaretRight"></i></a>
                                </li>
                            </ul> */}
                        </div>
                    </div>

                </div>

		</>
	);
}
