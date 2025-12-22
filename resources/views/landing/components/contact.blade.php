<!--=====CONTACT AREA START=======-->

        <div class="contact1 sp" id="contact">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="heading1-w">
                            <span class="span" data-aos="zoom-in-left" data-aos-duration="700" data-i18n="contact_tagline">Contact Us</span>
                            <h2 class="text-anime-style-3" data-i18n="contact_title">Start Your Hiring Journey Today</h2>
                            <div class="space16"></div>
                            <p data-aos="fade-right" data-aos-duration="900" style="text-align: justify;" data-i18n="contact_description">Let’s build the workforce your business needs. Contact us to learn more about our international hiring process, request staffing support, or speak with a specialist about customized recruitment options.</p>

                            <div class="" data-aos="fade-right" data-aos-duration="800">
                                <div class="contact1-box">
                                    <div class="icon">
                                        <img src="{{ asset('landing/assets/img/icons/contact-icon1.png') }}" alt="">
                                    </div>
                                    <div class="heading">
                                        <p data-i18n="contact_box_one_title">Contact us</p>
                                        <a data-i18n="contact_box_one_link" href="https://wa.me/35677771169?text=Hello%20Staff%20Boost%20Agency" target="_blank" rel="noopener" aria-label="Open WhatsApp chat">Click here - WhatsApp</a>
                                    </div>
                                </div>
                            </div>

                            <div class="" data-aos="fade-right" data-aos-duration="1100">
                                <div class="contact1-box">
                                    <div class="icon">
                                        <img src="{{ asset('landing/assets/img/icons/contact-icon2.png') }}" alt="">
                                    </div>
                                    <div class="heading">
                                        <p data-i18n="contact_box_two_title">Send us Mail</p>
                                        <a href="mailto:info@staffboostagency.com">info@staffboostagency.com</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="contact1-form" data-aos="zoom-out" data-aos-duration="900">
                            <div class="heading1">
                                <h3 data-i18n="contact_form_title">Send us a Message</h3>
                                <div class="space16"></div>
                                <p data-i18n="contact_form_description">Provide your details and a brief description of your needs. Our team will follow up promptly with personalized support.</p>
                            </div>
                            <div class="space10"></div>

                            <form id="contactForm" action="/contact" method="POST" novalidate>
                                @csrf
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="single-input">
                                            <input type="text" name="first_name" id="first_name" placeholder="First Name" required maxlength="255" data-i18n-placeholder="placeholder_first_name">
                                            <span class="text-danger" id="error_first_name"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="single-input">
                                            <input type="text" name="last_name" id="last_name" placeholder="Last Name" required maxlength="255" data-i18n-placeholder="placeholder_last_name">
                                            <span class="text-danger" id="error_last_name"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="single-input">
                                            <input type="email" name="email" id="email" placeholder="Email" required maxlength="255" data-i18n-placeholder="placeholder_email">
                                            <span class="text-danger" id="error_email"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="single-input">
                                            <input type="text" name="phone" id="phone" placeholder="Phone" required maxlength="20" data-i18n-placeholder="placeholder_phone">
                                            <span class="text-danger" id="error_phone"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="single-input">
                                            <input type="text" name="subject" id="subject" placeholder="Subject" required maxlength="255" data-i18n-placeholder="placeholder_subject">
                                            <span class="text-danger" id="error_subject"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="single-input">
                                            <textarea rows="4" name="message" id="message" placeholder="Message" required data-i18n-placeholder="placeholder_message"></textarea>
                                            <span class="text-danger" id="error_message"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="button">
                                            <button type="submit" class="theme-btn1" data-i18n="contact_form_button">Submit Now <span><i class="fa-solid fa-arrow-right"></i></span></button>
                                        </div>
                                        <div id="contact-fail" class="text-danger mt-2" style="display:none;"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!--=====CONTACT AREA END=======-->