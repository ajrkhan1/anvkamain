import Head from "next/head";

export default function Home() {


	return (
		<>
			<Head>
				<title>Advanced Patient-Specific 3D Surgical Solutions</title>
				<meta name="description" content="Discover patient-specific implants, guides, and virtual planning solutions designed to improve precision and patient outcomes." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

            <div class="page-layout-v04">
                    <div class="img-style">
                        <img class="img-cover" width="1920" height="720" loading="eager" decoding="async" src="/assets/images/curewith3dabout.webp" alt="page-title"/>
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
                                    <h2 class="text_white"><img className="bannelogo" src="/assets/images/mlogo/cure.webp"/></h2>
                                    {/* <p className="headrp">
                                        Personalized Precision for Every Surgery 
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
                                    <div class="col-sm-6 curewith3dimplants">
                                        <div class="leftimage ">
                                            {/* <img src="/assets/images/portfolio-item-2.jpg" alt="Lintex"/> */}
                                        </div>
                                    </div>
                                    <div class="col-sm-6 textjustfy">                                        
                                        <div className="shdwala">                                          
                                        <h3 class="title text_primary title split-text effect-right font24">Redefining Surgery Through 3D Innovation </h3>
                                        <br></br>
                                        <p>
                                            Every patient is unique. Yet for years, surgeons around the world often relied on standardized implants and surgical tools to address highly individualized medical conditions. While these solutions served many patients well, complex cases involving trauma, tumors, deformities, and reconstructive surgeries frequently demanded a level of precision that conventional approaches could not always provide. 
                                        </p>
                                        <br></br>
                                        <p>
                                            As healthcare technology advanced, a critical question emerged: What if surgical solutions could be designed specifically for each patient rather than forcing patients to adapt to standard solutions? 
                                        </p>
                                        <br></br>
                                        <p>
                                            This question became the foundation of Curewith3D.
                                        </p>
                                        <br></br>
                                        <p>
                                            Born from a vision to bring personalization into the operating room, Curewith3D was established to bridge the gap between medicine, engineering, and advanced manufacturing. By leveraging medical imaging, digital planning, and 3D printing technologies, Curewith3D enables surgeons to move beyond traditional limitations and approach every procedure with greater confidence and precision. 
                                        </p>
                                        <br></br>
                                        <p>
                                            The name itself reflects the brand's purpose—healing through innovation, powered by 3D technology. Every patient-specific implant, customized surgical guide, virtual surgical plan, and anatomical model is developed with one goal: to help surgeons deliver better outcomes tailored to the individual patient. 
                                        </p>
                                        <br></br>
                                        <p>
                                            What began as an effort to solve a surgical challenge has evolved into a platform that is transforming the way complex procedures are planned and performed. Today, Curewith3D partners with surgeons across specialties to create personalized solutions that improve accuracy, optimize surgical workflows, and support better patient recovery. 
                                        </p>
                                        <br></br>
                                        <p>
                                            At its core, Curewith3D is built on a simple belief: when healthcare is personalized, possibilities become limitless. By combining cutting-edge technology with clinical expertise, Curewith3D is helping shape the future of precision medicine—one patient, one surgery, and one innovation at a time. 
                                        </p>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>                         
                        </div>
                    </div>

                 


                     {/* <div class="section-about-3">
                        <div class="tf-container">
                            <div class="heading-section-5 mb_48">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="">
                                            <h3 class="title split-text effect-left">3D Printing Services</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="tf-grid-layout md-col-3 gap_30">
                                <div class="portfolio-item style-2 hover-image-2">
                                    <a href="#" class="img-style">
                                        <img src="/assets/images/patient-specific-implants.webp" alt="about-item"/>
                                    </a>
                                    <div class="content">
                                        <a href="#" class="title mb_8 link h5">Patient Specific Implants</a>
                                        <p class="text_secondary mb_16">You want every procedure to feel well-planned, accurate, and predictable. With patient-specific implants, you move closer to that level of precision.</p>
                                        <div>
                                            <a href="#"
                                                class="hover-underline-link text_primary-color text-button">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-item style-2 hover-image-2">
                                    <a href="#" class="img-style">
                                        <img src="/assets/images/custom-surgical-guides.jpg" alt="about-item"/>
                                    </a>
                                    <div class="content">
                                        <a href="#" class="title mb_8 link h5">Surgical Guides</a>
                                        <p class="text_secondary mb_16">At Curewith3D, you get more than a standard surgical tool — you get a guide created to support your accuracy inside the operating room.</p>
                                        <div>
                                            <a href="#"
                                                class="hover-underline-link text_primary-color text-button">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-item style-2 hover-image-2">
                                    <a href="#" class="img-style">
                                        <img src="/assets/images/virtual-surgery-planning.jpg" alt="about-item"/>
                                    </a>
                                    <div class="content">
                                        <a href="#" class="title mb_8 link h5">Virtual Surgery Planning</a>
                                        <p class="text_secondary mb_16">At CureWith3D, you get a planning workflow built to match the way you operate. Whether you’re reconstructing a jaw, preparing a fibula flap,</p>
                                        <div>
                                            <a href="#"
                                                class="hover-underline-link text_primary-color text-button">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/><br/><br/> */}

                    <div class="section-cta tf-spacing-1">
                        <div class="tf-container">
                            <div class="content">
                                <div class="row align-items-center">
                                    <div class="col-lg-8">
                                        <div class="heading">
                                            <h3 class="title split-text split-lines-rotation-x cwhite">Explore 3D Surgical Innovation</h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="content">
                                            <div class="wrap-btn d-flex gap_20 flex-wrap wow fadeInUp btnflotright">
                                                <a target="_blank" href="https://www.curewith3d.com/" class="tf-btn btn-hover-animate-2 btn-bg-secondary">
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
