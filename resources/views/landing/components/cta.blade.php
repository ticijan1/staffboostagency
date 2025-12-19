<!--===== CTA AREA START =======-->

        <div class="cta">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="heading1-w">
                            <h2 data-i18n="footer_title">Build a Stronger, More Reliable Team for Long-Term Growth</h2>
                            <div class="space16"></div>
                            <p data-i18n="footer_description">Subscribe to get practical insights on reliable staffing solutions, international recruitment trends, and how Staff Boost Agency helps businesses grow with trusted talent from third-country markets.</p>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="subscribe-area">
                            <form action="{{ route('subscribe') }}" method="POST" id="subscribeForm">
                                @csrf
                                <input type="email" name="email" data-i18n-placeholder="placeholder_email" placeholder="Email Address" required maxlength="255">
                                <div class="button">
                                    <button type="submit" class="theme-btn1" data-i18n="footer_button">Subscribe Now <span><i
                                            class="fa-solid fa-arrow-right"></i></span></button>
                                </div>
                                <div id="subscribe_success" class="text-success mt-2" style="display:none;"></div>
                                <div id="subscribe_error" class="text-danger mt-2" style="display:none;"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--===== CTA AREA START =======-->