{{-- Header Section --}}
<header>
    <div class="header-area header-area1 header-area-all d-none d-lg-block" id="header">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="header-elements">
                        <div class="site-logo">
                            <a href="https://html.vikinglab.agency/recrute/index.html">
                                <img src="{{ asset('landing/assets/img/logo/header-logo1.png') }}" alt="">
                            </a>
                        </div>
                        <div class="main-menu-ex main-menu-ex1">
                            <ul id="list-example">
                                <li><a class="list-group-item list-group-item-action" href="#choose" data-i18n="header_about">About Us</a></li>
                                <li><a class="list-group-item list-group-item-action" href="#service" data-i18n="header_service">Service</a></li>
                                <!-- <li><a class="list-group-item list-group-item-action" href="#project">Project</a></li> -->
                                <li><a class="list-group-item list-group-item-action" href="#work" data-i18n="header_works">Works</a></li>
                                <li><a class="list-group-item list-group-item-action" href="#contact" data-i18n="header_contact">Contact</a></li>
                                <li><a class="list-group-item list-group-item-action" href="#employment" data-i18n="header_get_employed">Get Employed</a></li>
                            </ul>
                        </div>
                        <div class="header2-buttons d-flex align-items-center">
                            <div class="button me-2">
                                <a class="theme-btn1" href="#contact" data-i18n="header_button">Get A Quote <span><i class="fa-solid fa-arrow-right"></i></span></a>
                            </div>
                            <div class="dropdown" id="lang-select" style="min-width: 50px; border: 1px solid; border-radius: 5px;">
                                <button class="btn btn-light dropdown-toggle d-flex align-items-center" type="button" id="langDropdown" data-bs-toggle="dropdown" aria-expanded="false" style="padding: 14px;">
                                    <img src="{{ asset('landing/assets/img/shapes/uk.png') }}" alt="English" id="lang-flag" style="width: 22px; height: 22px; border-radius: 50%; margin-right: 6px;"> <span id="lang-label"></span>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="langDropdown" style="min-width: 70px;">
                                    <li><a class="dropdown-item d-flex align-items-center justify-content-center lang-option" href="#" data-lang="en"><img src="{{ asset('landing/assets/img/shapes/uk.png') }}" alt="English" style="width: 22px; height: 22px; border-radius: 50%"></a></li>
                                    <li><a class="dropdown-item d-flex align-items-center justify-content-center lang-option" href="#" data-lang="sr"><img src="{{ asset('landing/assets/img/shapes/srb.jpg') }}" alt="Српски" style="width: 22px; height: 22px; border-radius: 50%"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!--=====HEADER END=======-->

<!--=====Mobile header start=======-->
<div class="mobile-header mobile-header-main d-block d-lg-none ">
    <div class="container-fluid">
        <div class="col-12">
            <div class="mobile-header-elements">
                <div class="mobile-logo">
                    <a href="#"><img src="{{ asset('landing/assets/img/logo/header-logo1.png') }}" alt="" style="max-width: 160px;"></a>
                </div>
                <div class="mobile-nav-icon">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="mobile-sidebar d-block d-lg-none">
    <div class="logo-m">
        <a href="https://html.vikinglab.agency/recrute/index.html"><img src="{{ asset('landing/assets/img/logo/header-logo1.png') }}" alt="" style="max-width: 160px;"></a>
    </div>
    <div class="menu-close">
        <i class="fa-solid fa-xmark"></i>
    </div>
    <div class="mobile-nav">
        <ul>
            <!-- <li class="has-dropdown"><a href="#">Home </a>
                <ul class="sub-menu">
                    <li class="has-dropdown has-dropdown1"><a href="#">Multipage</a>
                        <ul class="sub-menu">
                            <li><a href="https://html.vikinglab.agency/recrute/index.html">Home 1</a></li>
                            <li><a href="https://html.vikinglab.agency/recrute/index2.html">Home 2</a></li>
                            <li><a href="https://html.vikinglab.agency/recrute/index3.html">Home 3</a></li>
                            <li><a href="https://html.vikinglab.agency/recrute/index4.html">Home 4</a></li>
                            <li><a href="https://html.vikinglab.agency/recrute/index5.html">Home 5</a></li>
                            <li><a href="https://html.vikinglab.agency/recrute/index6.html">Home 6</a></li>
                            <li><a href="https://html.vikinglab.agency/recrute/index7.html">Home 7</a></li>
                            <li><a href="https://html.vikinglab.agency/recrute/index8.html">Home 8</a></li>
                            <li><a href="https://html.vikinglab.agency/recrute/index9.html">Home 9</a></li>
                            <li><a href="https://html.vikinglab.agency/recrute/index10.html">Home 10</a></li>
                        </ul>
                    </li>
                    <li class="has-dropdown has-dropdown1"><a href="#">Landing Page</a>
                        <ul class="sub-menu">
                            <li><a href="single-index1.html">Home 1</a></li>
                            <li><a href="https://html.vikinglab.agency/recrute/single-index2.html">Home 2</a></li>
                            <li><a href="https://html.vikinglab.agency/recrute/single-index3.html">Home 3</a></li>
                            <li><a href="https://html.vikinglab.agency/recrute/single-index4.html">Home 4 </a></li>
                            <li><a href="https://html.vikinglab.agency/recrute/single-index5.html">Home 5</a></li>
                            <li><a href="https://html.vikinglab.agency/recrute/single-index6.html">Home 6</a></li>
                            <li><a href="https://html.vikinglab.agency/recrute/single-index7.html">Home 7</a></li>
                            <li><a href="https://html.vikinglab.agency/recrute/single-index8.html">Home 8</a></li>
                            <li><a href="https://html.vikinglab.agency/recrute/single-index9.html">Home 9</a></li>
                            <li><a href="https://html.vikinglab.agency/recrute/single-index10.html">Home 10</a></li>
                        </ul>
                    </li>
                </ul>
            </li> -->
            <li><a href="#choose" data-i18n="header_about">About Us</a></li>
            <li><a href="#service" data-i18n="header_service">Service</a></li>
            <li><a href="#work" data-i18n="header_works">Works</a></li>
            <li><a href="#contact" data-i18n="header_contact">Contact</a></li>
            <li><a href="#employment" data-i18n="header_get_employed">Get Employed</a></li>
            <!-- <li class="has-dropdown"><a href="#">Service</a>
                <ul class="sub-menu">
                    <li><a href="https://html.vikinglab.agency/recrute/service.html">Service</a></li>
                    <li><a href="https://html.vikinglab.agency/recrute/service-details-left.html">Service Left</a></li>
                    <li><a href="https://html.vikinglab.agency/recrute/service-details-right.html">Service Right</a></li>
                    <li><a href="https://html.vikinglab.agency/recrute/service-details.html">Service Details</a></li>
                </ul>
            </li>
            <li class="has-dropdown"><a href="#">Pages</a>
                <ul class="sub-menu">
                    <li><a href="https://html.vikinglab.agency/recrute/contact.html">Contact</a></li>
                    <li><a href="https://html.vikinglab.agency/recrute/job-post.html">Job Post</a></li>
                    <li><a href="https://html.vikinglab.agency/recrute/job-details.html">Job Details</a></li>
                    <li><a href="https://html.vikinglab.agency/recrute/team.html">Team</a></li>
                    <li><a href="https://html.vikinglab.agency/recrute/testimonial.html">Testimonial</a></li>
                    <li><a href="https://html.vikinglab.agency/recrute/error.html">404</a></li>
                </ul>
            </li>
            <li class="has-dropdown"><a href="#">Blog</a>
                <ul class="sub-menu">
                    <li><a href="https://html.vikinglab.agency/recrute/blog.html">Blog</a></li>
                    <li><a href="https://html.vikinglab.agency/recrute/blog-details-left.html">Details Left</a></li>
                    <li><a href="https://html.vikinglab.agency/recrute/blog-details-right.html">Details Right</a></li>
                    <li><a href="https://html.vikinglab.agency/recrute/blog-details.html">Blog Details</a></li>
                </ul>
            </li>
            <li class="has-dropdown"><a href="#">Project</a>
                <ul class="sub-menu">
                    <li><a href="https://html.vikinglab.agency/recrute/project.html">Project</a></li>
                    <li><a href="https://html.vikinglab.agency/recrute/project-details-left.html">Project Left</a></li>
                    <li><a href="https://html.vikinglab.agency/recrute/project-details-right.html">Project Right</a></li>
                    <li><a href="https://html.vikinglab.agency/recrute/project-details.html">Project Details</a></li>
                </ul>
            </li> -->
        </ul>
        <div class="mobile-lang-select mt-3 mb-3 text-center">
            <div class="dropdown d-inline-block" id="lang-select-mobile-sidebar" style="min-width: 50px; border: 1px solid; border-radius: 5px;">
                <button class="btn btn-light dropdown-toggle d-flex align-items-center justify-content-center" type="button" id="langDropdownMobileSidebar" data-bs-toggle="dropdown" aria-expanded="false" style="padding: 10px;">
                    <img src="{{ asset('landing/assets/img/shapes/uk.png') }}" alt="English" id="lang-flag-mobile-sidebar" style="width: 22px; height: 22px; border-radius: 50%; margin-right: 6px;"> <span id="lang-label-mobile-sidebar"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="langDropdownMobileSidebar" style="min-width: 70px;">
                    <li><a class="dropdown-item d-flex align-items-center justify-content-center lang-option" href="#" data-lang="en"><img src="{{ asset('landing/assets/img/shapes/uk.png') }}" alt="English" style="width: 22px; height: 22px; border-radius: 50%"></a></li>
                    <li><a class="dropdown-item d-flex align-items-center justify-content-center lang-option" href="#" data-lang="sr"><img src="{{ asset('landing/assets/img/shapes/srb.jpg') }}" alt="Српски" style="width: 22px; height: 22px; border-radius: 50%"></a></li>
                </ul>
            </div>
        </div>
        <div class="mobile-button">
            <a class="theme-btn1" href="#contact" data-i18n="header_button">Get A Quote <span><i class="fa-solid fa-arrow-right"></i></span></a>
        </div>
        <div class="single-footer-items">
            <h3 data-i18n="contact_tagline">Contact Us</h3>
            <div class="contact-box">
                <div class="icon">
                    <img src="{{ asset('landing/assets/img/icons/footer-icon1.png') }}" alt="">
                </div>
                <div class="pera">
                    <a data-i18n="contact_box_one_link" href="https://wa.me/35677771169?text=Hello%20Staff%20Boost%20Agency" target="_blank" rel="noopener" aria-label="Open WhatsApp chat">Click here - WhatsApp</a>
                </div>
            </div>
            <div class="contact-box">
                <div class="icon">
                    <img src="{{ asset('landing/assets/img/icons/footer-icon2.png') }}" alt="">
                </div>
                <div class="pera">
                    <a href="mailto:info@staffboostagency.com">info@staffboostagency.com</a>
                </div>
            </div>
            <!-- <div class="contact-box">
                <div class="icon">
                    <img src="{{ asset('landing/assets/img/icons/footer-icon3.png') }}" alt="">
                </div>
                <div class="pera">
                    <a href="tel:+880123456789">8502 Preston Rd. <br> Inglewoo Maine 98380</a>
                </div>
            </div> -->
        </div>
        <div class="contact-infos">
            <h3 data-i18n="header_social_media">Social Media</h3>
            <ul class="social-icon">
                <li><a href="https://www.linkedin.com/in/staff-boost-agency-472a71399/"><i class="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href="https://x.com/staffboostagent"><i class="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="https://www.tiktok.com/@staffboostagency"><i class="fa-brands fa-tiktok"></i></a></li>
                <li><a href="https://www.instagram.com/staffboostagency/"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=61585101902600"><i class="fa-brands fa-facebook-f"></i></a></li>
            </ul>
        </div>
    </div>
</div>
<!--=====Mobile header end=======-->


