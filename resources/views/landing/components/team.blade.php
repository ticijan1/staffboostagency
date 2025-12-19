<!--=====EMPLOYMENT APPLICATION AREA START=======-->
<div class="contact1 sp" id="employment" style="background-color: #F5F3F4;">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="heading1-w">
                    <span class="span" data-aos="zoom-in-left" data-aos-duration="700" style="background:#ff7c0128; color:#081120;" data-i18n="team_tagline">Join Our Team</span>
                    <h2 class="text-anime-style-3" style="color:#081120;" data-i18n="team_title">Apply to Work with Staff Boost Agency</h2>
                    <div class="space16"></div>
                    <p data-aos="fade-right" data-aos-duration="900" style="text-align: justify; color:#77787B;" data-i18n="team_description">
                        Are you ready to take the next step in your career? Submit your application to join our network of motivated professionals. We connect skilled workers with top companies seeking talent for a variety of roles and industries.
                    </p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="contact1-form" data-aos="zoom-out" data-aos-duration="900">
                    <div class="heading1">
                        <h3 data-i18n="team_form_title">Employment Application</h3>
                        <div class="space16"></div>
                        <p data-i18n="team_form_description">Fill out your details and tell us about your experience. Our recruiters will review your application and contact you with suitable opportunities.</p>
                    </div>
                    <div class="space10"></div>
                    <form id="employmentForm" action="/employment" method="POST" novalidate>
                        @csrf
                        <div class="row">
                            <div class="col-md-6">
                                <div class="single-input">
                                    <input type="text" name="first_name" placeholder="First Name" required maxlength="255" data-i18n-placeholder="placeholder_first_name">
                                    <div class="invalid-feedback text-danger" id="employment_error_first_name"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="single-input">
                                    <input type="text" name="last_name" placeholder="Last Name" required maxlength="255" data-i18n-placeholder="placeholder_last_name">
                                    <div class="invalid-feedback text-danger" id="employment_error_last_name"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="single-input">
                                    <input type="email" name="email" placeholder="Email" required maxlength="255" data-i18n-placeholder="placeholder_email">
                                    <div class="invalid-feedback text-danger" id="employment_error_email"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="single-input">
                                    <input type="text" name="phone" placeholder="Phone" required maxlength="20" data-i18n-placeholder="placeholder_phone">
                                    <div class="invalid-feedback text-danger" id="employment_error_phone"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="single-input">
                                    <input type="text" name="country_of_residence" placeholder="Country of Residence" required maxlength="255" data-i18n-placeholder="placeholder_country_of_residence">
                                    <div class="invalid-feedback text-danger" id="employment_error_country_of_residence"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="single-input">
                                    <input type="text" name="desired_position_or_field" placeholder="Desired Position or Field" required maxlength="255" data-i18n-placeholder="placeholder_desired_position_or_field">
                                    <div class="invalid-feedback text-danger" id="employment_error_desired_position_or_field"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="single-input">
                                    <textarea rows="4" name="message" placeholder="Tell us about your experience, skills, and what type of work you are looking for" required data-i18n-placeholder="placeholder_employment_message"></textarea>
                                    <div class="invalid-feedback text-danger" id="employment_error_message"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="button">
                                    <button type="submit" class="theme-btn1" data-i18n="team_button">Submit Application <span><i class="fa-solid fa-arrow-right"></i></span></button>
                                </div>
                                <div id="employment-success" class="text-success mt-2" style="display:none;"></div>
                                <div id="employment-fail" class="text-danger mt-2" style="display:none;"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<!--=====EMPLOYMENT APPLICATION AREA END=======-->
