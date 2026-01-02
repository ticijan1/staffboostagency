<!DOCTYPE html>
<html lang="{{ request('lang', 'en') }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ request('lang') === 'sr' ? 'Agencija Staff Boost | Pouzdana globalna rešenja za radnu snagu' : 'Staff Boost Agency | Reliable Global Workforce Solutions' }}</title>

    <!-- Primary SEO -->
    <meta name="description" content="{{ request('lang') === 'sr' ? 'Agencija Staff Boost povezuje kompanije sa pouzdanim međunarodnim radnicima u građevinarstvu, transportu, dostavi, maloprodaji, skladištima i drugim industrijama. Pružamo kompletnu podršku za vize i onboarding za brzo i pouzdano zapošljavanje.' : 'Staff Boost Agency connects companies with reliable international workers across construction, transportation, delivery, retail, warehouses and more. Full visa and onboarding support for fast, dependable staffing.' }}">
    <meta name="robots" content="index, follow">
    <meta name="keywords" content="Staff Boost, Staff Boost Agency, staffing agency, international recruitment, global workforce, visa support, construction workforce, drivers, delivery, retail, warehouse staffing">
    <link rel="canonical" href="{{ request('lang') ? url()->current() . '?lang=' . request('lang') : url()->current() }}">

    <!-- Internationalization (alternate language URLs) -->
    <link rel="alternate" hreflang="x-default" href="{{ url()->current() }}">
    <link rel="alternate" hreflang="en" href="{{ url()->current() }}?lang=en">
    <link rel="alternate" hreflang="sr" href="{{ url()->current() }}?lang=sr">
    <link rel="alternate" hreflang="sr-RS" href="{{ url()->current() }}?lang=sr">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Staff Boost Agency">
    <meta property="og:title" content="{{ request('lang') === 'sr' ? 'Agencija Staff Boost | Pouzdana globalna rešenja za radnu snagu' : 'Staff Boost Agency | Reliable Global Workforce Solutions' }}">
    <meta property="og:description" content="{{ request('lang') === 'sr' ? 'Pouzdano globalno zapošljavanje u građevinarstvu, transportu, dostavi, maloprodaji, skladištima i drugim industrijama. Vize i onboarding od početka do kraja.' : 'Reliable global staffing across construction, transportation, delivery, retail, warehouses and more. Visa and onboarding handled end‑to‑end.' }}">
    <meta property="og:url" content="{{ request('lang') ? url()->current() . '?lang=' . request('lang') : url()->current() }}">
    <meta property="og:image" content="{{ asset('landing/assets/img/logo/header-logo1.png') }}">
    <meta property="og:image:alt" content="Staff Boost Agency logo">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:locale" content="{{ request('lang') === 'sr' ? 'sr_RS' : 'en_US' }}">
    <meta property="og:locale:alternate" content="{{ request('lang') === 'sr' ? 'en_US' : 'sr_RS' }}">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ request('lang') === 'sr' ? 'Agencija Staff Boost | Pouzdana globalna rešenja za radnu snagu' : 'Staff Boost Agency | Reliable Global Workforce Solutions' }}">
    <meta name="twitter:description" content="{{ request('lang') === 'sr' ? 'Pouzdano globalno zapošljavanje u građevinarstvu, transportu, dostavi, maloprodaji, skladištima i drugim industrijama. Vize i onboarding od početka do kraja.' : 'Reliable global staffing across construction, transportation, delivery, retail, warehouses and more. Visa and onboarding handled end‑to‑end.' }}">
    <meta name="twitter:image" content="{{ asset('landing/assets/img/logo/header-logo1.png') }}">

    <!-- PWA / UI -->
    <meta name="theme-color" content="#0a0a0a">

    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@@context": "https://schema.org",
      "@@type": "Organization",
      "name": "Staff Boost Agency",
      "url": "{{ url('/') }}",
      "logo": "{{ asset('landing/assets/img/logo/header-logo1.png') }}"
    }
    </script>
    <script type="application/ld+json">
    {
      "@@context": "https://schema.org",
      "@@type": "WebSite",
      "name": "Staff Boost Agency",
      "url": "{{ url('/') }}",
      "inLanguage": "{{ request('lang', 'en') }}",
      "potentialAction": {
        "@@type": "SearchAction",
        "target": "{{ url('/') }}?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
    </script>
    <script type="application/ld+json">
    {
      "@@context": "https://schema.org",
      "@@type": "EmploymentAgency",
      "name": "Staff Boost Agency",
      "url": "{{ url('/') }}",
      "logo": "{{ asset('landing/assets/img/logo/header-logo1.png') }}",
      "description": "{{ request('lang') === 'sr' ? 'Agencija za zapošljavanje koja povezuje kompanije sa pouzdanim međunarodnim radnicima i pruža kompletnu podršku za vize i onboarding.' : 'Employment agency connecting companies with reliable international workers, providing full visa and onboarding support.' }}",
      "areaServed": ["EU", "UK", "Global"],
      "inLanguage": "{{ request('lang', 'en') }}"
    }
    </script>

    <!--=====FAB ICON=======-->
    <link rel="shortcut icon" href="{{ asset('landing/assets/img/logo/titel1_32x32.png') }}" type="image/x-icon">

    <!--=====CSS=======-->
    <link rel="stylesheet" href="{{ asset('landing/assets/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="{{ asset('landing/assets/css/magnific-popup.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/assets/css/nice-select.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/assets/css/slick-slider.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/assets/css/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/assets/css/aos.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/assets/css/mobile-menu.css') }}">
    <link rel="stylesheet" href="{{ asset('landing/assets/css/main.css') }}">

    <!--=====JQUERY=======-->
    <script src="{{ asset('landing/assets/js/jquery-3-6-0.min.js') }}"></script>
</head>

<body class="body">


    <!-- Preloader Start -->
    <div class="preloader">
        <div class="loading-container">
            <div class="loading"></div>
            <div id="loading-icon"><img src="{{ asset('landing/assets/img/logo/titel1.png') }}" alt=""></div>
        </div>
    </div>
    <!-- Preloader End -->


    <!--=====progress END=======-->

    <div class="paginacontainer">

        <div class="progress-wrap">
            <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
        </div>

    </div>

    @include('landing.components.header')

    @include('landing.components.hero')

    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">

    @include('landing.components.about')

    @include('landing.components.service')

    {{-- @include('landing.components.project') --}}

    @include('landing.components.work')

    {{-- @include('landing.components.testimonial') --}}

    @include('landing.components.contact')

    @include('landing.components.team')

    {{-- @include('landing.components.blog') --}}

    @include('landing.components.cta')

    @include('landing.components.footer')

        <script src="{{ asset('landing/assets/js/bootstrap.min.js') }}"></script>
        <script src="{{ asset('landing/assets/js/aos.js') }}"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/js/all.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="{{ asset('landing/assets/js/mobile-menu.js') }}"></script>
        <script src="{{ asset('landing/assets/js/jquery.magnific-popup.js') }}"></script>
        <script src="{{ asset('landing/assets/js/owl.carousel.min.js') }}"></script>
        <script src="{{ asset('landing/assets/js/slick-slider.js') }}"></script>
        <script src="{{ asset('landing/assets/js/gsap.min.js') }}"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
        <script src="{{ asset('landing/assets/js/jquery.countup.js') }}"></script>
        <script src="{{ asset('landing/assets/js/ScrollTrigger.min.js') }}"></script>
        <script src="{{ asset('landing/assets/js/Splitetext.js') }}"></script>
        <script src="{{ asset('landing/assets/js/SmoothScroll.js') }}"></script>
        <script src="{{ asset('landing/assets/js/text-animation.js') }}"></script>
        <script src="{{ asset('landing/assets/js/jquery.lineProgressbar.js') }}"></script>
        <script src="{{ asset('landing/assets/js/tilt.jquery.js') }}"></script>
        <script src="{{ asset('landing/assets/js/main.js') }}?cacheVersion=1.0"></script>
        <script>
        function setLanguage(lang) {
            document.querySelectorAll('[data-i18n]').forEach(function(el) {
                const key = el.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    let value = translations[lang][key];
                    // Replace \n with <br> for HTML line breaks
                    if (typeof value === 'string' && value.includes('\n')) {
                        value = value.replace(/\n/g, '<br>');
                    }
                    if (el.tagName === 'LI' && el.querySelector('span')) {
                        el.childNodes.forEach(function(node) {
                            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
                                node.textContent = ' ' + value.replace(/<br>/g, ' ');
                            }
                        });
                    } else if ((el.classList.contains('theme-btn1') || el.classList.contains('theme-btn2') || el.classList.contains('theme-btn3')) && el.querySelector('span')) {
                        el.childNodes.forEach(function(node) {
                            if (node.nodeType === Node.TEXT_NODE) {
                                node.textContent = value.replace(/<br>/g, ' ') + ' ';
                            }
                        });
                    } else if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
                        el.innerHTML = value;
                    } else {
                        el.innerHTML = value;
                    }
                }
            });
            // Translate placeholders
            document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
                const key = el.getAttribute('data-i18n-placeholder');
                if (translations[lang] && translations[lang][key]) {
                    el.placeholder = translations[lang][key];
                }
            });
            // Update all language flag images
            var flagSrc = (lang === 'en') ? "{{ asset('landing/assets/img/shapes/uk.png') }}" : "{{ asset('landing/assets/img/shapes/srb.jpg') }}";
            var flagIds = ['lang-flag', 'lang-flag-mobile', 'lang-flag-mobile-sidebar'];
            flagIds.forEach(function(id) {
                var flag = document.getElementById(id);
                if (flag) flag.src = flagSrc;
            });
            // Update query param
            const url = new URL(window.location.href);
            url.searchParams.set('lang', lang);
            window.history.replaceState({}, '', url);
            localStorage.setItem('lang', lang);
        };
        document.addEventListener('DOMContentLoaded', function() {
            // Get lang from query param or default to en
            function getQueryParam(name) {
                const url = new URL(window.location.href);
                return url.searchParams.get(name);
            }
            var initialLang = getQueryParam('lang') || 'en';
            setLanguage(initialLang);
            document.querySelectorAll('.lang-option').forEach(function(option) {
                option.addEventListener('click', function(e) {
                    e.preventDefault();
                    var lang = this.getAttribute('data-lang');
                    var flag = document.getElementById('lang-flag');
                    if (lang === 'en') {
                        flag.src = "{{ asset('landing/assets/img/shapes/uk.png') }}";
                    } else if (lang === 'sr') {
                        flag.src = "{{ asset('landing/assets/img/shapes/srb.jpg') }}";
                    }
                    setLanguage(lang); // Apply translations on language change
                });
            });
            // Close mobile sidebar on menu link click (single page)
            document.querySelectorAll('.mobile-sidebar .mobile-nav a[href^="#"]').forEach(function(link) {
                link.addEventListener('click', function() {
                    var sidebar = document.querySelector('.mobile-sidebar');
                    if (sidebar) {
                        sidebar.classList.remove('mobile-menu-active');
                    }
                });
            });
        });
        </script>
</body>
</html>