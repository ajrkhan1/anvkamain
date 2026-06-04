import Head from "next/head";

export default function Home() {


	return (
		<>
			<Head>
				<title>Luxury Hair & Beauty Salon Services Near You</title>
				<meta name="description" content="Experience premium hair styling, beauty, skincare, and grooming services designed to refresh your look with expert care and comfort." />
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
                                    <h2 class="text_white"><img className="bannelogo" src="/assets/images/mlogo/tumble.webp"/></h2>
                                    {/* <p className="headrp">
                                        Style. Care. Confidence. Everyday.
                                    </p> */}
                                </div>

                                {/* <div className="col-sm-4">
                                    <div class="btn_wrapper ms-lg-auto flotr">
                                            <a target="_blank" href="https://www.instagram.com/tumblesalon/?hl=en" class="tf-btn btn-hover-animate-2 anvkacbtn wow fadeInRight btn-item btn-hover">
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
                                    <div class="col-sm-6 tumblesalonx">
                                        <div class="leftimage ">
                                            {/* <img src="/assets/images/portfolio-item-2.jpg" alt="Lintex"/> */}
                                        </div>
                                    </div>
                                    <div class="col-sm-6 textjustfy">                                        
                                        <div className="shdwala">                                          
                                        <h3 class="title text_primary title split-text effect-right font24">Where Beauty Meets Self-Care </h3>
                                        <br></br>
                                        <p>
                                            At Tumble Salon, beauty is more than just a service; it’s an experience designed to help you look and feel your absolute best. From precision haircuts and expert styling to rejuvenating skincare and grooming solutions, every service is delivered with attention to detail, creativity, and care. 
                                        </p>
                                        <br></br>
                                        <p>
                                            Our salon combines modern trends with personalized consultations to ensure every client receives a look that complements their personality and lifestyle. Whether you’re preparing for a special occasion, refreshing your everyday style, or simply taking time for self-care, Tumble Salon offers a welcoming space where comfort and transformation go hand in hand. 
                                        </p>
                                        <br></br>
                                        <p>
                                            With skilled professionals, premium products, and a relaxing ambiance, we focus on creating experiences that leave lasting confidence. From hair coloring and styling to beauty treatments and wellness care, every appointment is tailored to provide quality, hygiene, and satisfaction. 
                                        </p>
                                        <br></br>
                                        <p>
                                            At Tumble Salon, we believe beauty should feel effortless, empowering, and enjoyable because when you feel confident, it reflects in everything you do. 
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
                                            <h3 class="title split-text split-lines-rotation-x cwhite">Book Your Salon Experience</h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="content">                                           
                                            <div class="wrap-btn d-flex gap_20 flex-wrap wow fadeInUp btnflotright">
                                                <a target="_blank" href="https://www.instagram.com/tumblesalon" class="tf-btn btn-hover-animate-2 btn-bg-secondary">
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
