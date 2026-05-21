import Head from "next/head";

export default function Home() {


	return (
		<>
			<Head>
				<title>Curewith3D - ANVKA</title>
				<meta name="description" content="For sending DICOM Data Online" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
			</Head>

            <div class="page-layout-v04">
                    <div class="img-style">
                        <img class="img-cover" width="1920" height="720" loading="eager" decoding="async" src="/assets/images/caretab.webp" alt="page-title"/>
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
                                    <h2 class="text_white">Your health partner for life</h2>
                                    {/* <p className="headrp">
                                        Care(T.A.B).ai envisions building a quality-driven, outcome-focused, and tech-enabled ecosystem for healthcare delivery beyond hospital walls.
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
                                        <h3 class="title text_primary title split-text effect-right">CareTAB.ai</h3>
                                        <br></br>
                                        <p>
                                            Healthcare does not end when a patient leaves the hospital. Recovery, rehabilitation, chronic disease management, and elderly care often require continuous medical attention at home. For many families, finding trusted healthcare professionals who can deliver reliable and timely support becomes a major challenge. 
                                        </p>
                                        <br></br>
                                        <p>
                                            To bridge this gap, ANVKA introduced CareTAB.ai — an innovative home healthcare platform designed to deliver hospital-quality care directly to patients in the comfort of their homes. Combining advanced technology, AI-powered healthcare support, and professionally trained medical experts, CareTAB.ai ensures that patients receive continuous, compassionate, and personalized care whenever they need it. 
                                        </p>
                                    </div>
                                     
                                </div>
                            </div>                         
                        </div>
                    </div>


                     <div class="section-about-3">
                        <div class="tf-container medium">
                            <div class="heading-section-5 mb_48">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="">                                            
                                            <h3 class="title split-text effect-left">Caring Healthcare You Can Trust</h3>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                            <div class="tf-grid-layout md-col-3 gap_30">
                                <div class="portfolio-item style-2 hover-image-2">
                                    <a href="#" class="img-style">
                                        <img src="/assets/images/doctor-consultations.webp" alt="about-item"/>
                                    </a>
                                    <div class="content">
                                        <a href="#" class="title mb_8 link h5">Doctor Consultations</a>
                                        <p class="text_secondary mb_16">From tele-consultations to emergency visits, expert care is just one call away.</p>
                                        <div>
                                            <a href="#"
                                                class="hover-underline-link text_primary-color text-button">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-item style-2 hover-image-2">
                                    <a href="#" class="img-style">
                                        <img src="/assets/images/nursing-care.webp" alt="about-item"/>
                                    </a>
                                    <div class="content">
                                        <a href="#" class="title mb_8 link h5">Nursing Care</a>
                                        <p class="text_secondary mb_16">Short & long-term nursing care including post-op, palliative & respiratory care.</p>
                                        <div>
                                            <a href="#"
                                                class="hover-underline-link text_primary-color text-button">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-item style-2 hover-image-2">
                                    <a href="#" class="img-style">
                                        <img src="/assets/images/icu.webp" alt="about-item"/>
                                    </a>
                                    <div class="content">
                                        <a href="#" class="title mb_8 link h5">ICU Setup at Home</a>
                                        <p class="text_secondary mb_16">Complete intensive care environment setup with ventilators, monitors, & skilled staff.</p>
                                        <div>
                                            <a href="#"
                                                class="hover-underline-link text_primary-color text-button">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/><br/><br/>

                    <div class="section-faqs-1 tf-spacing-1">
                        <div class="tf-container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="heading-section style-default">
                                        <div class="sub text-label text-uppercase lh-20 split-text effect-up">FAQs</div>
                                        <h2 class="title split-text effect-blur-fade">Frequently Asked Questions</h2>
                                        <p
                                            class="desc text-body-default text_secondary split-text split-lines-transform blc">
                                            Subscribe to get the latest company news, expert insights, and industry trends delivered straight to your inbox — no spam, just value.</p>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <ul class="accordion-wrap d-grid gap_16" id="accordion-faq">
                                        <li class="accordion-item style-2 action_click wow fadeInRight active"
                                            data-wow-delay=".1s">
                                            <a href="#accordion-faq-1" class="accordion-title action "
                                                data-bs-toggle="collapse" aria-expanded="true"
                                                aria-controls="accordion-faq-1">
                                                <div class="heading">
                                                    <h5 class="title text-capitalize">
                                                        Q1: What types of insurance do you offer?
                                                    </h5>
                                                    <span class="icon"></span>
                                                </div>
                                            </a>
                                            <div id="accordion-faq-1" class="collapse show"
                                                data-bs-parent="#accordion-faq">
                                                <div class="accordion-faqs-content">
                                                    <p class="text-body-default text_secondary">
                                                        Simply fill out our online form or contact us directly — we’ll
                                                        send you
                                                        a personalized quote within 24 hours.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="accordion-item style-2 action_click wow fadeInRight"
                                            data-wow-delay=".2s">
                                            <a href="#accordion-faq-2" class="accordion-title action  collapsed"
                                                data-bs-toggle="collapse" aria-expanded="false"
                                                aria-controls="accordion-faq-2">
                                                <div class="heading">
                                                    <h5 class="title text-capitalize">
                                                        Q2: How do I get a quote?</h5>
                                                    <span class="icon"></span>
                                                </div>
                                            </a>
                                            <div id="accordion-faq-2" class="collapse" data-bs-parent="#accordion-faq">
                                                <div class="accordion-faqs-content">
                                                    <p class="text-body-default text_secondary">
                                                        Simply fill out our online form or contact us directly — we’ll
                                                        send you
                                                        a personalized quote within 24 hours.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="accordion-item style-2 action_click wow fadeInRight"
                                            data-wow-delay=".3s">
                                            <a href="#accordion-faq-3" class="accordion-title action  collapsed"
                                                data-bs-toggle="collapse" aria-expanded="false"
                                                aria-controls="accordion-faq-3">
                                                <div class="heading">
                                                    <h5 class="title text-capitalize">
                                                        Q3: Is there a free consultation before I buy a plan?</h5>
                                                    <span class="icon"></span>
                                                </div>
                                            </a>
                                            <div id="accordion-faq-3" class="collapse" data-bs-parent="#accordion-faq">
                                                <div class="accordion-faqs-content">
                                                    <p class="text-body-default text_secondary">
                                                        Simply fill out our online form or contact us directly — we’ll
                                                        send you
                                                        a personalized quote within 24 hours.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="accordion-item style-2 action_click wow fadeInRight"
                                            data-wow-delay=".4s">
                                            <a href="#accordion-faq-4" class="accordion-title action  collapsed"
                                                data-bs-toggle="collapse" aria-expanded="false"
                                                aria-controls="accordion-faq-4">
                                                <div class="heading">
                                                    <h5 class="title text-capitalize">
                                                        Q4: Can I customize my insurance plan?</h5>
                                                    <span class="icon"></span>
                                                </div>
                                            </a>
                                            <div id="accordion-faq-4" class="collapse" data-bs-parent="#accordion-faq">
                                                <div class="accordion-faqs-content">
                                                    <p class="text-body-default text_secondary">
                                                        Simply fill out our online form or contact us directly — we’ll
                                                        send you
                                                        a personalized quote within 24 hours.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="accordion-item style-2 action_click wow fadeInRight"
                                            data-wow-delay=".5s">
                                            <a href="#accordion-faq-5" class="accordion-title action  collapsed"
                                                data-bs-toggle="collapse" aria-expanded="false"
                                                aria-controls="accordion-faq-5">
                                                <div class="heading">
                                                    <h5 class="title text-capitalize">
                                                        Q5: What if I want to cancel my policy?
                                                    </h5>
                                                    <span class="icon"></span>
                                                </div>
                                            </a>
                                            <div id="accordion-faq-5" class="collapse" data-bs-parent="#accordion-faq">
                                                <div class="accordion-faqs-content">
                                                    <p class="text-body-default text_secondary">
                                                        Simply fill out our online form or contact us directly — we’ll
                                                        send you
                                                        a personalized quote within 24 hours.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

		</>
	);
}
