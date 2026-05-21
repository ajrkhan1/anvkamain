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
                        <img class="img-cover" width="1920" height="720" loading="eager" decoding="async" src="/assets/images/tumble-salon.webp" alt="page-title"/>
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
                                    <h2 class="text_white">Tumble Salon</h2>
                                    {/* <p className="headrp">
                                        CureWith3D, a healthcare-innovation company focused on creating customized, patient-specific 3D-printed surgical guides, orthopedic & dental implants, and anatomical models.
                                    </p> */}
                                </div>

                                <div className="col-sm-4">
                                    <div class="btn_wrapper ms-lg-auto flotr">
                                            <a target="_blank" href="https://www.instagram.com/tumblesalon/?hl=en" class="tf-btn btn-hover-animate-2 anvkacbtn wow fadeInRight btn-item btn-hover">
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
                                        <h3 class="title text_primary title split-text effect-right">Tumble Salon</h3>
                                        <br></br>
                                        <p>
                                            Finally, ANVKA also recognizes that well-being is closely linked with confidence and self-care. Tumble Salon reflects this belief by offering grooming and wellness services that help individuals look and feel their best, reinforcing the idea that personal care is an essential part of overall well-being.   
                                        </p>

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
