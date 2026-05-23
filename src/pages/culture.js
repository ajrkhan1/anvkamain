import Head from "next/head";
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default function Home() {


	return (
		<>
			<Head>
				<title>Vacancy - ANVKA</title>
				<meta name="description" content="For sending DICOM Data Online" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
			</Head>

            <div class="page-layout-v04">
                    <div class="img-style">
                        <img class="img-cover" width="1920" height="720" loading="eager" decoding="async" src="/assets/images/vacancy.webp" alt="page-title"/>
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
                                    <h2 class="text_white">Culture</h2>
                                    {/* <p className="headrp">
                                        CureWith3D, a healthcare-innovation company focused on creating customized, patient-specific 3D-printed surgical guides, orthopedic & dental implants, and anatomical models.
                                    </p> */}
                                </div>                              
                            </div>
                        </div>
                    </div>
                </div>


                <div class="main-content">                    
                    <div class="hiring ajh">
                            <div class="wrap-box tf-spacing-1">
                                <div class="tf-container medium">
                                    <div class="row">                                    
                                        <div class="content-inner galrm">
                                            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
									
                                                <a href="/assets/images/culture/c1.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c1.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c2.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c2.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c3.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c3.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c4.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c4.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c5.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c5.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c6.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c6.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c7.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c7.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c8.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c8.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c9.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c9.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c10.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c10.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c12.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c12.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c13.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c13.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c14.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c14.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c15.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c15.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c16.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c16.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c17.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c17.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c18.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c18.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c19.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c19.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c20.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c20.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c21.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c21.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c22.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c22.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c23.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c23.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c24.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c24.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c25.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c25.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c26.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c26.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c27.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c27.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c28.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c28.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c29.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c29.webp" />
                                                </a>
                                                <a href="/assets/images/culture/c30.webp">
                                                    <img alt="img1" className="dds" src="/assets/images/culture/c30.webp" />
                                                </a>                                              
                                            </LightGallery>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>

		</>
	);
}
