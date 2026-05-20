import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <header className="header style-default">
        <div className="tf-container">
          <div className="header-inner">

            {/* LOGO */}
            <Link href="/" className="site-logo">
              <img
                className="logo_header"
                alt="logo"
                width="167"
                height="52"
                src="/assets/images/logo.png"
              />
            </Link>

            {/* DESKTOP MENU */}
            <nav className="main-menu d-none d-lg-block">
              <ul className="navigation">

                {/* DEMOS */}
                <li className="has-child text-menu">
                  <a href="#" className="toggle">
                    Demos
                  </a>

                  <ul className="submenu">
                    <li>
                      <Link href="/">Corporate</Link>
                    </li>

                    <li>
                      <Link href="/startup">Startup</Link>
                    </li>
                  </ul>
                </li>

                {/* PAGES */}
                <li className="has-child text-menu">
                  <a href="#" className="toggle">
                    Pages
                  </a>

                  <ul className="submenu">
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>

                    <li>
                      <Link href="/our-team">Our Team</Link>
                    </li>

                    <li>
                      <Link href="/team-detail">Team Detail</Link>
                    </li>

                    <li>
                      <Link href="/career">Career</Link>
                    </li>

                    <li>
                      <Link href="/faqs">FAQs</Link>
                    </li>
                  </ul>
                </li>

                {/* SERVICES */}
                <li className="has-child text-menu">
                  <a href="#" className="toggle">
                    Services
                  </a>

                  <ul className="submenu">
                    <li>
                      <Link href="/services">Services</Link>
                    </li>

                    <li>
                      <Link href="/service-detail">Service Detail</Link>
                    </li>
                  </ul>
                </li>

                {/* PROJECT */}
                <li className="has-child text-menu">
                  <a href="#" className="toggle">
                    Project
                  </a>

                  <ul className="submenu">
                    <li>
                      <Link href="/portfolio">Portfolio</Link>
                    </li>

                    <li>
                      <Link href="/portfolio-detail">
                        Portfolio Detail
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* BLOG */}
                <li className="has-child text-menu">
                  <a href="#" className="toggle">
                    Blog
                  </a>

                  <ul className="submenu">
                    <li>
                      <Link href="/blog-full-width">
                        Blog Full Width
                      </Link>
                    </li>

                    <li>
                      <Link href="/blog-with-sidebar">
                        Blog With Sidebar
                      </Link>
                    </li>

                    <li>
                      <Link href="/blog-detail">
                        Blog Detail
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* CONTACT */}
                <li className="text-menu">
                  <Link href="/contact">
                    Contact
                  </Link>
                </li>

              </ul>
            </nav>

            {/* RIGHT SIDE */}
            <div className="header-right d-flex align-items-center gap_20">

              <Link
                href="/contact"
                className="tf-btn btn-hover-animate-2 d-none d-lg-flex"
              >
                <span>Get In Touch</span>
                <span className="bg-effect"></span>
              </Link>

              {/* MOBILE BUTTON */}
              <button
                className="mobile-button d-lg-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#menu-mobile"
                aria-controls="menu-mobile"
              >
                <div className="burger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="menu-mobile"
        aria-labelledby="menu-mobile-label"
      >
        <div className="offcanvas-header">

          <h5 id="menu-mobile-label">Menu</h5>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>

        </div>

        <div className="offcanvas-body">

          <ul className="mobile-nav-wrap list-unstyled">

            {/* HOME */}
            <li className="mb-3">
              <Link className="nav_link" href="/">
                Home
              </Link>
            </li>

            {/* PAGES */}
            <li className="mb-3">

              <div
                className="fw-bold mb-2"
                data-bs-toggle="collapse"
                data-bs-target="#mobilePages"
                style={{ cursor: "pointer" }}
              >
                Pages
              </div>

              <div className="collapse" id="mobilePages">
                <ul className="list-unstyled ps-3">

                  <li className="mb-2">
                    <Link className="nav_link" href="/about-us">
                      About Us
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link className="nav_link" href="/our-team">
                      Our Team
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link className="nav_link" href="/career">
                      Career
                    </Link>
                  </li>

                </ul>
              </div>
            </li>

            {/* SERVICES */}
            <li className="mb-3">

              <div
                className="fw-bold mb-2"
                data-bs-toggle="collapse"
                data-bs-target="#mobileServices"
                style={{ cursor: "pointer" }}
              >
                Services
              </div>

              <div className="collapse" id="mobileServices">
                <ul className="list-unstyled ps-3">

                  <li className="mb-2">
                    <Link className="nav_link" href="/services">
                      Services
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link className="nav_link" href="/service-detail">
                      Service Detail
                    </Link>
                  </li>

                </ul>
              </div>
            </li>

            {/* BLOG */}
            <li className="mb-3">

              <div
                className="fw-bold mb-2"
                data-bs-toggle="collapse"
                data-bs-target="#mobileBlog"
                style={{ cursor: "pointer" }}
              >
                Blog
              </div>

              <div className="collapse" id="mobileBlog">
                <ul className="list-unstyled ps-3">

                  <li className="mb-2">
                    <Link className="nav_link" href="/blog-full-width">
                      Blog Full Width
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link className="nav_link" href="/blog-detail">
                      Blog Detail
                    </Link>
                  </li>

                </ul>
              </div>
            </li>

            {/* CONTACT */}
            <li className="mb-3">
              <Link className="nav_link" href="/contact">
                Contact
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </>
  );
}