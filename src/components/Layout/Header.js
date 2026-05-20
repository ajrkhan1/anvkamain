import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Header() {

  return (
    <>
      <header class="header style-3 header-fixed">
            <div class="header-inner">
                    <a href="/" reloadDocument class="site-logo">
                        <img class="logo_header" alt="logo" width="167" height="52" src="/assets/images/logo.png"/>
                    </a>
                    <nav class="main-menu">
                        <ul class="navigation ">
                                    <li class="text-menu has-menu-mega"><a href="/"
                                            class="link-no-action toggle splitting">
                                            <span class="text" data-splitting>Home</span>
                                        </a>
                                    </li>

                                    <li class=" text-menu"><a href="/about-us" class="link-no-action toggle splitting">
                                            <span class="text" data-splitting>Our Story</span>
                                        </a>
                                    </li>
                                    <li class="has-child text-menu"><a href="/brands" class="link-no-action toggle splitting">
                                            <span class="text" data-splitting>All Verticals</span>
                                        </a>
                                        <ul class="submenu">
                                            <li><Link href="/brands/lintex">Lintex</Link></li>
                                            <li><a href="/brands/curewith3d">Curewith3D</a></li>
                                            <li><a href="/brands/caretab">CareTAB</a></li>
                                            <li><a href="/brands/medical-implats">Medical Implats</a></li>
                                            <li><a href="/brands/IndiaMD">IndiaMD</a></li>
                                            <li><a href="#">Tumble</a></li>
                                        </ul>
                                    </li>

                                    <li class="has-child text-menu"><a href="#" class="link-no-action toggle splitting">
                                            <span class="text" data-splitting>Career</span>
                                        </a>
                                        <ul class="submenu">
                                            <li><Link href="/culture">Culture</Link></li>
                                            <li><a href="/career">Career</a></li>
                                            <li><a href="#">Vacancy</a></li>
                                        </ul>
                                    </li>

                                    <li class="has-child text-menu"><a href="#" class="link-no-action toggle splitting">
                                            <span class="text" data-splitting>Reach Us</span>
                                        </a>
                                        <ul class="submenu">
                                            <li><Link href="/news">News & Media</Link></li>
                                            <li><a href="/contact-us">Contact Us</a></li>
                                        </ul>
                                    </li>
                                    <li class="has-child text-menu"><a href="#" class="link-no-action toggle splitting">
                                            <span class="text" data-splitting>CSR</span>
                                        </a>
                                        <ul class="submenu">
                                            <li><Link href="#">ANVKA Foundation</Link></li>
                                            <li><a href="/contact-us">Azure Innovation Labs</a></li>
                                        </ul>
                                    </li>
                            </ul>
                    </nav>

                    <div class="header-right d-flex align-items-center">
                            {/* <div class="header-contact sm-hide">
                                <div class="icon">
                                    <i class="icon-PhoneCall"></i>
                                </div>
                                <div>
                                    <p class="text-caption-2 text_on-suface-1 font-3">Have any Question?</p>
                                    <div class="text-button  font-3">+91-92055 59801</div>
                                </div>
                            </div>
                            <a href="#" class="tf-btn btn-hover-animate-2    style-border-2 lg-hide">
                                <span>Get Your Consult!</span>
                                <span class="bg-effect"></span>
                            </a> */}
                            <ul class="tf-social headsocial">
                                <li><a href="#" class="icon-LinkedinLogo"></a></li>
                                <li><a href="#" class="icon-x-logo"></a></li>
                                <li><a href="#" class="icon-instagram-logo"></a></li>                                              
                            </ul>
                            <div class="mobile-button d-xl-none" data-bs-toggle="offcanvas" data-bs-target="#menu-mobile"
                                aria-controls="menu-mobile">
                                <div class="burger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>

                </div>
      </header>

        <header class="header style-3 trasp">
                        <div class="header-inner">
                            <a href="/" reloadDocument class="site-logo">
                                <img class="logo_header" alt="logo" width="200" height="52" src="/assets/images/logo/anvka-png.png"/>
                            </a>
                            <nav class="main-menu">
                                <ul class="navigation ">
                                    <li class="text-menu has-menu-mega"><a href="/"
                                            class="link-no-action toggle splitting">
                                            <span class="text" data-splitting>Home</span>
                                        </a>
                                    </li>

                                    <li class=" text-menu"><a href="/about-us" class="link-no-action toggle splitting">
                                            <span class="text" data-splitting>Our Story</span>
                                        </a>
                                    </li>
                                    <li class="has-child text-menu"><a href="/brands" class="link-no-action toggle splitting">
                                            <span class="text" data-splitting>All Verticals</span>
                                        </a>
                                        <ul class="submenu">
                                            <li><Link href="/brands/lintex">Lintex</Link></li>
                                            <li><a href="/brands/curewith3d">Curewith3D</a></li>
                                            <li><a href="/brands/caretab">CareTAB</a></li>
                                            <li><a href="/brands/medical-implats">Medical Implats</a></li>
                                            <li><a href="/brands/IndiaMD">IndiaMD</a></li>
                                            <li><a href="#">Tumble</a></li>
                                        </ul>
                                    </li>

                                    <li class="has-child text-menu"><a href="#" class="link-no-action toggle splitting">
                                            <span class="text" data-splitting>Career</span>
                                        </a>
                                        <ul class="submenu">
                                            <li><Link href="/culture">Culture</Link></li>
                                            <li><a href="/career">Career</a></li>
                                            <li><a href="#">Vacancy</a></li>
                                        </ul>
                                    </li>

                                    <li class="has-child text-menu"><a href="#" class="link-no-action toggle splitting">
                                            <span class="text" data-splitting>Reach Us</span>
                                        </a>
                                        <ul class="submenu">
                                            <li><Link href="/news">News & Media</Link></li>
                                            <li><a href="/contact-us">Contact Us</a></li>
                                        </ul>
                                    </li>
                                    <li class="has-child text-menu"><a href="#" class="link-no-action toggle splitting">
                                            <span class="text" data-splitting>CSR</span>
                                        </a>
                                        <ul class="submenu">
                                            <li><Link href="#">ANVKA Foundation</Link></li>
                                            <li><a href="/contact-us">Azure Innovation Labs</a></li>
                                        </ul>
                                    </li>
                            </ul>
                            </nav>

                        <div class="header-right d-flex align-items-center">
                            {/* <div class="header-contact sm-hide">
                                <div class="icon">
                                    <i class="icon-PhoneCall"></i>
                                </div>
                                <div>
                                    <p class="text-caption-2 text_on-suface-1 font-3">Have any Question?</p>
                                    <div class="text-button  font-3">+91-92055 59801</div>
                                </div>
                            </div>
                            <a href="#" class="tf-btn btn-hover-animate-2    style-border-2 lg-hide">
                                <span>Get Your Consult!</span>
                                <span class="bg-effect"></span>
                            </a> */}
                            <ul class="tf-social headsocial">
                                <li><a href="#" class="icon-LinkedinLogo"></a></li>
                                <li><a href="#" class="icon-x-logo"></a></li>
                                <li><a href="#" class="icon-instagram-logo"></a></li>                                              
                            </ul>
                            <div class="mobile-button d-xl-none" data-bs-toggle="offcanvas" data-bs-target="#menu-mobile"
                                aria-controls="menu-mobile">
                                <div class="burger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div> 
                </header>


 <div class="offcanvas offcanvas-end mobile-nav-wrap " tabindex="-1" id="menu-mobile" aria-labelledby="menu-mobile">
        <div class="offcanvas-header top-nav-mobile">
            <div class="offcanvas-title">
                <a href="/" class="site-logo">
                    <img src="./assets/images/logo/logoanv.png" alt="logo" class="main-logo" width="193" height="44"/>
                </a>
            </div>
            <div data-bs-dismiss="offcanvas" class="btn-close-menu">
                <i class="icon-Close"></i>
            </div>
        </div>
        <div class="offcanvas-body inner-mobile-nav">
            <div class="mb-body">
                <ul id="menu-mobile-menu" class="style-1">
                    <li class="menu-item menu-item-has-children-mobile active">
                        <a href="#dropdown-menu-one" class="item-menu-mobile collapsed" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="dropdown-menu-one">
                            Home
                        </a>
                        <div id="dropdown-menu-one" class="collapse" data-bs-parent="#menu-mobile-menu">
                            <ul class="sub-mobile">
                                <li class="menu-item active"><a href="/">Home</a>
                                </li>
                                <li class="menu-item"><a href="../demo-agency/index.html">Agency</a></li>
                                <li class="menu-item"><a href="../demo-insurance/index.html">   </a></li>
                                <li class="menu-item"><a href="../demo-medical/index.html">Medical</a></li>
                                <li class="menu-item"><a href="../demo-restaurant/index.html">Restaurant</a>
                                </li>
                                <li class="menu-item"><a href="../demo-aitech/index.html">AI Tech</a></li>
                                <li class="menu-item"><a href="../demo-aicontentwriter/index.html">AI
                                        Content Writer</a></li>
                                <li class="menu-item"><a href="../demo-saas/index.html">SaaS</a></li>
                                <li class="menu-item"><a href="../demo-healthcoach/index.html">Health Coach</a>
                                </li>
                                <li class="menu-item"><a href="../demo-spasalon/index.html">Spa Salon</a></li>
                                <li class="menu-item"><a href="../demo-construction/index.html">Construction</a></li>
                                <li class="menu-item"><a href="../demo-coworkingspace/index.html">Coworking
                                        Space</a></li>
                                <li class="menu-item"><a href="../demo-gardenlandscaping/index.html">Garden
                                        Landscaping</a></li>
                                <li class="menu-item"><a href="../demo-carservices/index.html">Car Service</a></li>
                                <li class="menu-item"><a href="../demo-charity/index.html">Charity</a></li>
                                <li class="menu-item"><a href="../demo-architechture/index.html">Architechture</a></li>
                                <li class="menu-item"><a href="../demo-logistics/index.html">Logistics</a></li>
                                <li class="menu-item"><a href="../demo-solarenergy/index.html">Solar Energy</a></li>
                                <li class="menu-item"><a href="../demo-agriculturefarming/index.html">Agriculture
                                        farming</a>
                                </li>
                                <li class="menu-item"><a href="../demo-lawyer/index.html">Lawyer</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item menu-item-has-children-mobile">
                        <a href="#dropdown-menu-two" class="item-menu-mobile collapsed" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="dropdown-menu-two">
                            gfgdf
                        </a>
                        <div id="dropdown-menu-two" class="collapse" data-bs-parent="#menu-mobile-menu">
                            <ul class="sub-mobile ">
                                <li class="menu-item"><a href="about-us.html">About Us</a></li>
                                <li class="menu-item"><a href="our-team.html">Our Team</a></li>
                                <li class="menu-item"><a href="team-detail.html">Team Detail</a></li>
                                <li class="menu-item"><a href="carrer.html">Carrer</a>
                                </li>
                                <li class="menu-item"><a href="carrer-detail.html">Carrer Detail</a>
                                </li>
                                <li class="menu-item"><a href="FAQs.html">FAQs</a>
                                </li>
                                <li class="menu-item"><a href="404.html">404 Error</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item menu-item-has-children-mobile">
                        <a href="#dropdown-menu-three" class="item-menu-mobile collapsed" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="dropdown-menu-three">
                            Services
                        </a>
                        <div id="dropdown-menu-three" class="collapse" data-bs-parent="#menu-mobile-menu">
                            <ul class="sub-mobile">
                                <li class="menu-item"><a href="services.html">Services</a></li>
                                <li class="menu-item"><a href="#">Service Detail</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item menu-item-has-children-mobile">
                        <a href="#dropdown-menu-four" class="item-menu-mobile collapsed" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="dropdown-menu-four">
                            Project
                        </a>
                        <div id="dropdown-menu-four" class="collapse" data-bs-parent="#menu-mobile-menu">
                            <ul class="sub-mobile">
                                <li class="menu-item"><a href="portfolio.html">Portfolio</a></li>
                                <li class="menu-item"><a href="#">Portfolio Detail</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item menu-item-has-children-mobile">
                        <a href="#dropdown-menu-five" class="item-menu-mobile collapsed" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="dropdown-menu-five">
                            Blog
                        </a>
                        <div id="dropdown-menu-five" class="collapse" data-bs-parent="#menu-mobile-menu">
                            <ul class="sub-mobile">
                                <li class="menu-item"><a href="blog-full-width.html">Blog Full Width</a></li>
                                <li class="menu-item"><a href="blog-with-sidebar.html">Blog With Sidebar</a></li>
                                <li class="menu-item"><a href="blog-detail.html">Blog Detail</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="contact.html" class="item-menu-mobile">Contact</a>
                    </li>
                </ul>
                <div class="support">
                    <a href="#" class="text-need text-body-2"> Need help?</a>
                    <ul class="mb-info">
                        <li>Call Us Now: <span class="number">+91-92055 59801</span></li>
                        <li>Support 24/7: <a href="#" class="link">reachus@anvka.com</a></li>
                        <li>
                            <div class="wrap-social">
                                <p>Follow us:</p>
                                <ul class="social ">
                                    <li><a href="#" class="icon-Linkedin"></a></li>
                                    <li><a href="#" class="icon-XLogo-2"></a></li>
                                    <li><a href="#" class="icon-InsLogo-fill"></a></li>
                                    <li><a href="#" class="icon-Youtube"></a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}