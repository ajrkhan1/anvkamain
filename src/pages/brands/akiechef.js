import Head from "next/head";

export default function Home() {


	return (
		<>
			<Head>
				<title>Nutritious Meals Crafted for Better Living</title>
				<meta name="description" content="Fresh, balanced, and health-focused meals designed with nutrition, quality ingredients, and everyday wellness in mind." />
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
                                    <h2 class="text_white"><img className="bannelogo" src="/assets/images/mlogo/ake.webp"/></h2>
                                    {/* <p className="headrp">
                                        Nourishing Lives Through Food
                                    </p> */}
                                </div>

                                {/* <div className="col-sm-4">
                                    <div class="btn_wrapper ms-lg-auto flotr">
                                            <a href="#" class="tf-btn btn-hover-animate-2 anvkacbtn wow fadeInRight btn-item btn-hover">
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
                                    <div class="col-sm-6 akiechef">
                                        <div class="leftimage ">
                                            {/* <img src="/assets/images/portfolio-item-2.jpg" alt="Lintex"/> */}
                                        </div>
                                    </div>
                                    <div class="col-sm-6 textjustfy">                                        
                                        <div className="shdwala">                                          
                                        <h3 class="title text_primary title split-text effect-right font24">From Compassion to Everyday Wellness </h3>
                                        <br></br>
                                        <p>
                                            AkieChef was born from a simple yet meaningful act of care during the COVID-19 pandemic, when food and snacks were distributed to patient attendants waiting outside overwhelmed hospitals. What began as humanitarian support gradually evolved into a vision for delivering nutritious, reliable, and high-quality food solutions designed around health and well-being. 
                                        </p>
                                        <br></br>
                                        <p>
                                            Today, AkieChef combines culinary expertise with nutritional precision to create meals that are wholesome, balanced, and convenient. Supported by a dedicated in-house dietetics department, every meal is thoughtfully prepared to align with health-focused dietary and clinical requirements while maintaining exceptional taste and quality.
                                        </p>
                                        <br></br>
                                        <p>
                                            With a strong focus on fresh ingredients, hygiene, and dependable meal availability, AkieChef serves healthcare environments while also expanding into everyday lifestyles. Whether for patients, caregivers, healthcare professionals, or individuals seeking healthier meal options, the brand is committed to making nutrition more accessible and enjoyable. 
                                        </p>
                                        <br></br>
                                        <p>
                                            More than just a food brand, AkieChef reflects ANVKA’s belief that true care goes beyond treatment — it extends to comfort, nourishment, and the everyday moments that support healthier living. 
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
                                            <h3 class="title split-text split-lines-rotation-x cwhite">Discover AkieChef</h3>
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
