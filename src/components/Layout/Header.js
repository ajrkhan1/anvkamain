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
                                    
                                    <li class="has-child text-menu"><a href="#" class="link-no-action toggle splitting">
                                            <span class="text" data-splitting>ABOUT</span>
                                        </a>
                                        <ul class="submenu">
                                            <li><a href="/about-us">About Us</a></li>                              
                                            <li><a href="/our-story">Our Story</a></li>
                                            <li><a href="/our-team">Our Team</a></li>
                                        </ul>
                                    </li>

                                    <li class="has-child text-menu"><a href="/brands" class="link-no-action toggle splitting">
                                            <span class="text" data-splitting>Our Brands</span>
                                        </a>
                                        <ul class="submenu menulogo logomenu align-items-center">
                                            <li><a title="Purpose-Driven Apparel" href="/brands/lintex"><img width="100%" src="/assets/images/logo2/lin1.webp"/></a></li>
                                            <li><a title="Trusted Surgical Implants" href="/brands/medical-implats"><img width="100%" src="/assets/images/logo2/med1.webp"/></a></li>
                                            <li><a title="Personalized Medical Innovation" href="/brands/curewith3d"><img width="100%" src="/assets/images/logo2/cure1.webp"/></a></li>
                                            <li><a title="Global Patient Facilitation" href="/brands/indiamd"><img width="100%" src="/assets/images/logo2/ind1.webp"/></a></li>
                                            <li><a title="Home Healthcare Solutions" href="/brands/caretab"><img width="100%" src="/assets/images/logo2/care1.webp"/></a></li>
                                            <li><a title="Nutrition & Food Solutions" href="/brands/akiechef"><img width="100%" src="/assets/images/logo2/ake1.webp"/></a></li>
                                            <li><a title="Wellness & Grooming Services" href="/brands/tumble-salon"><img width="100%" src="/assets/images/logo2/tum1.webp"/></a></li>
                                            <li><a title="Ideas Into Innovation" target="_blank" href="https://azureinnolabs.com/"><img width="100%" src="/assets/images/logo2/lab1.webp"/></a></li>
                                        </ul>
                                    </li>

                                    <li class="has-child text-menu"><a href="#" class="link-no-action toggle splitting">
                                            <span class="text" data-splitting>Career</span>
                                        </a>
                                        <ul class="submenu">
                                            <li><Link href="/culture">Culture</Link></li>                            
                                            <li><a href="/vacancy">Vacancy</a></li>
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
                                            <li><a target="_blank" href="https://anvkafoundation.com/">ANVKA Foundation</a></li>
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
                                <li><a target="_blank" href="https://www.linkedin.com/company/anvkahealthcare/" class="icon-LinkedinLogo"></a></li>
                                <li><a target='_blank' href="https://www.facebook.com/anvkahealthcarec" class="icon-FaceBook-2"></a></li>
                                <li><a target="_blank" href="https://www.instagram.com/anvkahealthcare/" class="icon-instagram-logo"></a></li>                                              
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
                                <img class="logo_header dnone" alt="logo" width="200" height="52" src="/assets/images/logo.png"/>
                                <img class="logo_header done" alt="logo" width="200" height="52" src="/assets/images/logo/anvka-png.png"/>
                            </a>
                            <nav class="main-menu">
                                <ul class="navigation ">
                                    <li class="text-menu has-menu-mega"><a href="/"
                                            class="link-no-action toggle splitting">
                                            <span class="text" data-splitting>Home</span>
                                        </a>
                                    </li>

                                    <li class="has-child text-menu"><a href="#" class="link-no-action toggle splitting">
                                            <span class="text" data-splitting>ABOUT</span>
                                        </a>
                                        <ul class="submenu">
                                            <li><a href="/about-us">About Us</a></li>                              
                                            <li><a href="/our-story">Our Story</a></li>
                                            <li><a href="/our-team">Our Team</a></li>
                                        </ul>
                                    </li>
                                    
                                    <li class="has-child text-menu"><a href="/brands" class="link-no-action toggle splitting">
                                            <span class="text" data-splitting>Our Brands</span>
                                        </a>
                                        <ul class="submenu menulogo logomenu">
                                            <li><a title="Purpose-Driven Apparel" href="/brands/lintex"><img width="100%" src="/assets/images/logo2/lin1.webp"/></a></li>
                                            <li><a title="Trusted Surgical Implants" href="/brands/medical-implats"><img width="100%" src="/assets/images/logo2/med1.webp"/></a></li>
                                            <li><a title="Personalized Medical Innovation" href="/brands/curewith3d"><img width="100%" src="/assets/images/logo2/cure1.webp"/></a></li>
                                            <li><a title="Global Patient Facilitation" href="/brands/indiamd"><img width="100%" src="/assets/images/logo2/ind1.webp"/></a></li>
                                            <li><a title="Home Healthcare Solutions" href="/brands/caretab"><img width="100%" src="/assets/images/logo2/care1.webp"/></a></li>
                                            <li><a title="Nutrition & Food Solutions" href="/brands/akiechef"><img width="100%" src="/assets/images/logo2/ake1.webp"/></a></li>
                                            <li><a title="Wellness & Grooming Services" href="/brands/tumble-salon"><img width="100%" src="/assets/images/logo2/tum1.webp"/></a></li>
                                            <li><a title="Ideas Into Innovation" target="_blank" href="https://azureinnolabs.com/"><img width="100%" src="/assets/images/logo2/lab1.webp"/></a></li>
                                        </ul>
                                    </li>

                                    <li class="has-child text-menu"><a href="#" class="link-no-action toggle splitting">
                                            <span class="text" data-splitting>Career</span>
                                        </a>
                                        <ul class="submenu">
                                            <li><Link href="/culture">Culture</Link></li>                                            
                                            <li><a href="/vacancy">Vacancy</a></li>
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
                                            <li><a target="_blank" href="https://anvkafoundation.com/">ANVKA Foundation</a></li>
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
                                <li><a target="_blank" href="https://www.linkedin.com/company/anvkahealthcare/" class="icon-LinkedinLogo"></a></li>
                       
                                <li><a target='_blank' href="https://www.facebook.com/anvkahealthcarec" class="icon-FaceBook-2"></a></li>
                                <li><a target="_blank" href="https://www.instagram.com/anvkahealthcare/" class="icon-instagram-logo"></a></li>                                        
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
                    <img src="/assets/images/logo/logoanv.png" alt="logo" class="main-logo" width="193" height="44"/>
                </a>
            </div>
            <div data-bs-dismiss="offcanvas" class="btn-close-menu">
                <i class="icon-Close"></i>
            </div>
        </div>
        <div class="offcanvas-body inner-mobile-nav">
            <div class="mb-body">
                <ul id="menu-mobile-menu" class="style-1">
                    <li class="menu-item">
                        <a href="/" class="item-menu-mobile">HOME</a>
                    </li>                   
                    <li class="menu-item menu-item-has-children-mobile">
                        <a href="#dropdown-menu-two" class="item-menu-mobile collapsed" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="dropdown-menu-two">
                            ABOUT
                        </a>
                        <div id="dropdown-menu-two" class="collapse" data-bs-parent="#menu-mobile-menu">
                            <ul class="sub-mobile ">
                                <li class="menu-item"><a href="/about-us">About Us</a></li>                              
                                <li class="menu-item"><a href="/our-story">Our Story</a></li>
                                <li class="menu-item"><a href="/our-team">Our Team</a></li>
                               
                            </ul>
                        </div>
                    </li>

                    <li class="menu-item menu-item-has-children-mobile active">
                        <a href="#dropdown-menu-one" class="item-menu-mobile collapsed" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="dropdown-menu-one">
                            OUR BRANDS
                        </a>
                        <div id="dropdown-menu-one" class="collapse" data-bs-parent="#menu-mobile-menu">
                            <ul class="sub-mobile menulogo logomenu">
                                <li class="menu-item"><a title="Purpose-Driven Apparel" href="/brands/lintex"><img width="100%" src="/assets/images/logo2/lin1.webp"/></a></li>
                                <li class="menu-item"><a title="Trusted Surgical Implants" href="/brands/medical-implats"><img width="100%" src="/assets/images/logo2/med1.webp"/></a></li>
                                <li class="menu-item"><a title="Personalized Medical Innovation" href="/brands/curewith3d"><img width="100%" src="/assets/images/logo2/cure1.webp"/></a></li>
                                <li class="menu-item"><a title="Global Patient Facilitation" href="/brands/indiamd"><img width="100%" src="/assets/images/logo2/ind1.webp"/></a></li>
                                <li class="menu-item"><a title="Home Healthcare Solutions" href="/brands/caretab"><img width="100%" src="/assets/images/logo2/care1.webp"/></a></li>
                                <li class="menu-item"><a title="Nutrition & Food Solutions" href="/brands/akiechef"><img width="100%" src="/assets/images/logo2/ake1.webp"/></a></li>
                                <li class="menu-item"><a title="Wellness & Grooming Services" href="/brands/tumble-salon"><img width="100%" src="/assets/images/logo2/tum1.webp"/></a></li>
                                <li class="menu-item"><a title="Ideas Into Innovation" target="_blank" href="https://azureinnolabs.com/"><img width="100%" src="/assets/images/logo2/lab1.webp"/></a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item menu-item-has-children-mobile">
                        <a href="#dropdown-menu-two" class="item-menu-mobile collapsed" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="dropdown-menu-two">
                            CAREER
                        </a>
                        <div id="dropdown-menu-two" class="collapse" data-bs-parent="#menu-mobile-menu">
                            <ul class="sub-mobile ">
                                <li class="menu-item"><a href="/culture">Culture</a></li>                              
                                <li class="menu-item"><a href="/vacancy">Vacancy</a></li>
                               
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item menu-item-has-children-mobile">
                        <a href="#dropdown-menu-three" class="item-menu-mobile collapsed" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="dropdown-menu-three">
                            REACH US
                        </a>
                        <div id="dropdown-menu-three" class="collapse" data-bs-parent="#menu-mobile-menu">
                            <ul class="sub-mobile">
                                <li class="menu-item"><a href="/news">News & Media</a></li>
                                <li class="menu-item"><a href="/contact-us">Contact Us</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item menu-item-has-children-mobile">
                        <a href="#dropdown-menu-four" class="item-menu-mobile collapsed" data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="dropdown-menu-four">
                            CSR
                        </a>
                        <div id="dropdown-menu-four" class="collapse" data-bs-parent="#menu-mobile-menu">
                            <ul class="sub-mobile">
                                <li class="menu-item"><a target="_blank" href="https://anvkafoundation.com/">Anvka Foundation</a></li>                                
                            </ul>
                        </div>
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
                                    <li><a href="https://www.linkedin.com/company/anvkahealthcare/" class="icon-Linkedin"></a></li>                           
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