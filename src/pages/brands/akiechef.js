import Head from "next/head";

export default function Home() {


	return (
		<>
			<Head>
				<title>IndiaMD - ANVKA</title>
				<meta name="description" content="For sending DICOM Data Online" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
			</Head>

            <div class="page-layout-v04">
                    <div class="img-style">
                        <img class="img-cover" width="1920" height="720" loading="eager" decoding="async" src="/assets/images/ak.webp" alt="page-title"/>
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
                                    <h2 class="text_white">AkieChef</h2>
                                    {/* <p className="headrp">
                                        CureWith3D, a healthcare-innovation company focused on creating customized, patient-specific 3D-printed surgical guides, orthopedic & dental implants, and anatomical models.
                                    </p> */}
                                </div>

                                <div className="col-sm-4">
                                    <div class="btn_wrapper ms-lg-auto flotr">
                                            <a href="https://www.curewith3d.com/" class="tf-btn btn-hover-animate-2 anvkacbtn wow fadeInRight btn-item btn-hover">
                                                <span class="h4">GO</span>
                                            </a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="main-content">                    
                    <div class="section-contact">
                        <div class="tf-container medium">
                            <div class="mb_48">
                                <div class="row align-items-end">
                                    <div class="col-lg-12">
                                        <br/><br/><br/>
                                        <h3 class="title text_primary title split-text effect-right">AkieChef</h3>
                                        <br></br>
                                        <p>
                                            The journey of ANVKA has always been rooted in care, compassion, and the belief that healthcare extends beyond treatment alone. During the COVID-19 pandemic, hospitals across the country faced immense pressure, and patient attendants often spent countless hours outside hospital wards with limited access to proper meals and refreshments.
                                        </p>
                                        <br></br>
                                        <p>
                                            In those challenging times, simple acts of kindness made a meaningful difference. Food and snacks were distributed to attendants and families waiting outside hospitals, offering comfort and support when it was needed most. What began as a humanitarian initiative gradually evolved into a larger vision — the creation of AkieChef, a brand dedicated to delivering nutritious, convenient, and high-quality food solutions for healthcare environments and beyond. 
                                        </p>
                                        <br></br>
                                        <p>
                                            Today, AkieChef stands as a reflection of ANVKA’s commitment to holistic well-being, combining nutrition, quality, and accessibility into every meal served. 
                                        </p>
                                </div>
                                    <div class="col-lg-12">
                                        
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
                                            <h2 class="title split-text split-lines-rotation-x cwhite">Partner with Us for a Healthier Tomorrow</h2>
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

                </div>

		</>
	);
}
