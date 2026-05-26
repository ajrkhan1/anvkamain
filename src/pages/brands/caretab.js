import Head from "next/head";

export default function Home() {


	return (
		<>
			<Head>
				<title>Advanced Home Healthcare Services in India</title>
				<meta name="description" content="Get hospital-quality healthcare at home with doctor visits, nursing, ICU care, physiotherapy, diagnostics, and medical equipment support." />
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
                                    <h2 class="text_white">CareTAB.ai</h2>
                                    <p className="headrp">
                                        Healthcare @Home, Simplified
                                    </p>
                                </div>

                                {/* <div className="col-sm-4">
                                    <div class="btn_wrapper ms-lg-auto flotr">
                                            <a href="https://caretab.ai/" class="tf-btn btn-hover-animate-2 anvkacbtn wow fadeInRight btn-item btn-hover">
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

                    <div class="tf-container">
                            <div class="mb_48">
                                <div class="row align-items">
                                    <div class="col-sm-6 caretabwalabg">
                                        <div class="leftimage ">
                                            {/* <img src="/assets/images/portfolio-item-2.jpg" alt="Lintex"/> */}
                                        </div>
                                    </div>
                                    <div class="col-sm-6 textjustfy">                                        
                                        <div className="shdwala">                                          
                                        <h3 class="title text_primary title split-text effect-right font24">Smart Healthcare, Delivered to Your Doorstep</h3>
                                        <br></br>
                                        <p>
                                            CareTAB.ai is redefining home healthcare by bringing hospital-quality medical services directly to patients in the comfort of their homes. Designed to support patients beyond hospital walls, the platform combines advanced technology, AI-powered healthcare assistance, and experienced medical professionals to ensure seamless and dependable care at every stage of recovery.
                                        </p>
                                        <br></br>
                                        <p>
                                            From doctor consultations and nursing services to ICU at home, physiotherapy, diagnostics, and medical equipment support, CareTAB.ai offers a complete ecosystem of personalized healthcare solutions tailored to individual patient needs. Whether it is post-surgical recovery, elderly care, chronic disease management, or routine medical support, patients receive professional attention without the stress of frequent hospital visits. 
                                        </p>
                                        <br></br>
                                        <p>
                                            With a growing network of 300+ healthcare professionals and partnerships with leading hospitals, CareTAB.ai continues to make quality healthcare more accessible, convenient, and patient-centric. Trusted by over 10,200 happy clients, the platform is committed to delivering compassionate care, continuous monitoring, and complete peace of mind for families. 
                                        </p>
                                        <p>
                                            By blending innovation with human care, CareTAB.ai is shaping the future of healthcare where quality treatment reaches patients anytime, anywhere. 
                                        </p>
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
                                            <h3 class="title split-text split-lines-rotation-x cwhite">Start Your Homecare Journey</h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="content">                                           
                                            <div class="wrap-btn d-flex gap_20 flex-wrap wow fadeInUp btnflotright">
                                                <a target="_blank" href="https://caretab.ai/" class="tf-btn btn-hover-animate-2 btn-bg-secondary">
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
