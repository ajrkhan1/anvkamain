import Head from "next/head";

export default function Home() {


	return (
		<>
			<Head>
				<title>Azure Innovation Labs</title>
				<meta name="description" content="Azure Innovation Labs" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
			</Head>

            <div class="page-layout-v04">
                    <div class="img-style">
                        <img class="img-cover" width="1920" height="720" loading="eager" decoding="async" src="/assets/images/azureinno.webp" alt="page-title"/>
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
                                    <h2 class="text_white"><img className="bannelogo" src="/assets/images/mlogo/azureinno.webp"/></h2>
                                    {/* <p className="headrp">
                                        Healthcare @Home, Simplified
                                    </p> */}
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
                                    <div class="col-sm-6 azurewalax">
                                        <div class="leftimage ">
                                            {/* <img src="/assets/images/portfolio-item-2.jpg" alt="Lintex"/> */}
                                        </div>
                                    </div>
                                    <div class="col-sm-6 textjustfy">                                        
                                        <div className="shdwala">
                                            <br></br>
                                     
                                        <p>
                                            Every transformative healthcare innovation begins with a simple question: How do we ensure great ideas reach the patients who need them most?
                                        </p>
                                        <br></br>
                                        <p>At Azure Innovation Labs, that question became our purpose.</p>
                                        <br></br>
                                        <p>
                                            Across the healthcare ecosystem, visionary entrepreneurs, researchers, clinicians, and innovators are developing groundbreaking technologies—from AI-powered diagnostics and smart medical devices to biotechnology breakthroughs and digital health platforms. Yet many promising innovations never make it beyond the prototype stage. Clinical validation, regulatory pathways, hospital access, funding, and commercialization remain some of the biggest barriers between an idea and real-world patient impact. 
                                        </p>
                                        <br></br>
                                        <p>
                                            Azure Innovation Labs was established to bridge that gap. Built as a hospital-integrated MedTech incubator, Azure Innovation Labs brings together start-ups, hospitals, clinicians, investors, regulatory experts, research institutions, and industry partners under one collaborative ecosystem. We believe that healthcare innovation should not happen in isolation—it should evolve alongside the people who deliver care every day. 

                                        </p>
                                        <br></br>
                                        <p>
                                            Our journey is driven by a clear vision: to transform promising healthcare innovations into clinically validated, scalable, and impactful solutions that improve patient outcomes. By providing access to clinical environments, expert mentorship, regulatory guidance, infrastructure, and commercialization support, we help innovators navigate the complex journey from concept to clinical adoption with confidence and credibility. 
                                        </p>
                                        <br></br>
                                        <p>
                                            Whether developing next-generation medical devices, digital health platforms, biotechnology solutions, health AI applications, diagnostics, or hospital technologies, every start-up entering our ecosystem gains more than an incubator—they gain a trusted clinical partner committed to responsible innovation. 
                                        </p>
                                        <br></br>
                                        <p>
                                            At Azure Innovation Labs, success is not measured by the number of ideas we incubate, but by the lives those ideas ultimately improve. Every collaboration, every clinical validation, and every successful deployment brings us closer to a future where innovation moves faster, reaches further, and creates meaningful change for patients, healthcare providers, and society. 
                                        </p>
                                        <br></br>
                                        <p>Because the future of healthcare isn't built by innovators alone, it is built when innovation and clinical excellence come together. </p>
                                        
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
                                            <h3 class="title split-text split-lines-rotation-x cwhite">Bridging Innovation and Healthcare</h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="content">                                           
                                            <div class="wrap-btn d-flex gap_20 flex-wrap wow fadeInUp btnflotright">
                                                <a target="_blank" href="https://azureinnolabs.com/" class="tf-btn btn-hover-animate-2 btn-bg-secondary">
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
