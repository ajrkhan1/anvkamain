import Head from "next/head";

export default function Home() {


	return (
		<>
			<Head>
				<title>Affordable Medical Travel & Healthcare in India</title>
				<meta name="Access trusted hospitals, expert doctors, and complete medical travel assistance in India with seamless end-to-end patient support." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
			</Head>
            <div class="page-layout-v04">
                    <div class="img-style">
                        <img class="img-cover" width="1920" height="720" loading="eager" decoding="async" src="/assets/images/indiamd.webp" alt="page-title"/>
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
                                    <h2 class="text_white newcolorx"><img className="bannelogo" src="/assets/images/mlogo/indiamd.webp"/></h2>
                                    {/* <p className="headrp">
                                        The Global Care Pathway
                                    </p> */}
                                </div>

                                {/* <div className="col-sm-4">
                                    <div class="btn_wrapper ms-lg-auto flotr">
                                            <a href="https://www.curewith3d.com/" class="tf-btn btn-hover-animate-2 anvkacbtn wow fadeInRight btn-item btn-hover">
                                                <span class="h4">GO</span>
                                            </a>
                                        </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                 <br></br><br></br><br></br><br></br><br></br><br></br>
                <div class="main-content">

                    <div class="section-contact">
                        <div class="tf-container">
                            <div class="mb_48">
                                <div class="row align-items">
                                    <div class="col-sm-6 indiamdbg">
                                        <div class="leftimage ">
                                            {/* <img src="/assets/images/portfolio-item-2.jpg" alt="Lintex"/> */}
                                        </div>
                                    </div>
                                    <div class="col-sm-6 textjustfy">
                                        <div className="shdwala">
                                        <h3 class="title text_primary title split-text effect-right font24">Premium Medical Value Travel Experience</h3>
                                        <br></br>
                                        <p>
                                            IndiaMD was created with a vision to make quality healthcare in India more accessible, seamless, and trustworthy for international patients. As India continues to emerge as a global destination for advanced and affordable medical care, IndiaMD serves as a premium medical concierge platform that simplifies every step of the patient journey.
                                        </p>
                                        <br></br>
                                        <p>
                                            From treatment planning and hospital selection to travel coordination and post-treatment support, IndiaMD offers end-to-end assistance through a patient-first approach. The platform connects patients with trusted hospitals, experienced doctors, and customized treatment packages across multiple specialties, ensuring transparency, comfort, and confidence throughout the process.
                                        </p>
                                        <br></br>
                                        <p>
                                            With app-enabled care and dedicated patient support, IndiaMD manages everything from medical visa guidance, accommodation, and airport transfers to follow-up consultations and recovery assistance. Every service is designed to reduce stress and help patients focus on what matters most — healing and recovery.
                                        </p>
                                        <br></br>
                                        <p>By combining healthcare expertise, technology, and personalized care coordination, IndiaMD is contributing to a larger vision of positioning India as a global hub for trusted medical excellence and compassionate healthcare delivery.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div class="section-cta tf-spacing-1">
                        <div class="tf-container">
                            <div class="content">
                                <div class="row align-items-center">
                                    <div class="col-lg-8">
                                        <div class="heading">
                                            <h3 class="title split-text split-lines-rotation-x cwhite">Start Your Treatment Journey</h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="content">
                                            <div class="wrap-btn d-flex gap_20 flex-wrap wow fadeInUp btnflotright">
                                                <a target="" href="#" class="tf-btn btn-hover-animate-2 btn-bg-secondary">
                                                    <span>Visit Our Website</span>
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
