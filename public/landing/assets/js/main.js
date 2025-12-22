(function ($) {
  $(document).ready(function () {

     // sticky header active
     if ($("#header").length > 0) {
      $(window).on("scroll", function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
          $("#header").removeClass("sticky");
        } else {
          $("#header").addClass("sticky");
        }
      });
    }

        // pricing-plan-tab
        $("#ce-toggle").click(function (event) {
          $(".plan-toggle-wrap").toggleClass("active");
        });
    
        $("#ce-toggle").change(function () {
          if ($(this).is(":checked")) {
            $(".tab-content #yearly").hide();
            $(".tab-content #monthly").show();
          } else {
            $(".tab-content #yearly").show();
            $(".tab-content #monthly").hide();
          }
        });

        $(".header-search-btn").on("click", function (e) {
          e.preventDefault();
          $(".header-search-form-wrapper").addClass("open");
          $('.header-search-form-wrapper input[type="search"]').focus();
          $('.body-overlay').addClass('active');
     });
     $(".tx-search-close").on("click", function (e) {
          e.preventDefault();
          $(".header-search-form-wrapper").removeClass("open");
          $("body").removeClass("active");
          $('.body-overlay').removeClass('active');
     });

                //=== logo slider ===
                $('.logo-slider').slick({
                  slidesToShow: 7,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 0,
                  speed: 8000,
                  pauseOnHover: true,
                  arrows: false,
                  cssEase: 'linear',
                  variableWidth: true,

                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                      }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                  ],
                  // Add 20px space between items
                  centerMode: false

                });

                //=== logo slider ===
                $('.logo-slider3').slick({
                  slidesToShow: 6,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 0,
                  speed: 12000,
                  pauseOnHover: true,
                  arrows: false,
                  cssEase: 'linear',
                  "responsive": {
                    "0": {
                      "items": 2
                    },
                    "768": {
                      "items": 4
                    },
                    "992": {
                      "items": 4
                    },
                    "1200": {
                      "items": 6
                    }
                  }

                });

                //=== logo slider ===
                $('.logo-slider4').slick({
                  slidesToShow: 6,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 0,
                  speed: 8000,
                  pauseOnHover: true,
                  arrows: false,
                  cssEase: 'linear',

                  "responsive": {
                    "0": {
                      "items": 2
                    },
                    "768": {
                      "items": 2
                    },
                    "992": {
                      "items": 2
                    },
                    "1200": {
                      "items": 2
                    }
                  }

                });

                  // project style1
                if ($(".project-two__box li").length) {
                  $(".project-two__box li").each(function () {
                    let self = $(this);

                    self.on("mouseenter", function () {
                      console.log($(this));
                      $(".project-two__box li").removeClass("active");
                      $(this).addClass("active");
                    });
                  });
                }


                  // project style1
                  $('.project-two__carousel').owlCarousel({
                    "loop": true,
                    "autoplay": true,
                    "margin": 0,
                    "nav": false,
                    "dots": true,
                    "smartSpeed": 500,
                    "autoplayTimeout": 10000,
                    "responsive": {
                        "0": {
                          "items": 1
                        },
                        "768": {
                          "items": 1
                        },
                        "992": {
                          "items": 1
                        },
                        "1200": {
                          "items": 1
                        }
                      }
                  });

                   // case 6
                   $('.project-there__carousel').owlCarousel({
                    "loop": true,
                    "autoplay": true,
                    "margin": 0,
                    nav: true,
                    navText: [
                        '<i class="fa-solid fa-angle-left"></i>',
                        '<i class="fa-solid fa-angle-right"></i>'
                    ],
                    "dots": false,
                    "smartSpeed": 500,
                    "autoplayTimeout": 10000,
                    "responsive": {
                        "0": {
                          "items": 1
                        },
                        "768": {
                          "items": 1
                        },
                        "992": {
                          "items": 1
                        },
                        "1200": {
                          "items": 1
                        }
                      }
                  });


                  $('.tes2-slider').owlCarousel({
                    "loop": true,
                    "autoplay": true,
                    "margin": 0,
                    "nav": false,
                    "dots": true,
                    "smartSpeed": 500,
                    "autoplayTimeout": 10000,
                    "responsive": {
                        "0": {
                          "items": 1
                        },
                        "768": {
                          "items": 1
                        },
                        "992": {
                          "items": 1
                        },
                        "1200": {
                          "items": 1
                        }
                      }
                  });


            //testimonial 6
            $(".tes1-slider").slick({
              autoplay:true,
              autoplaySpeed:1500,
              margin: "30",
              slidesToShow: 2,
              arrows: true,
              centerMode: false,
              loop: true,
              centerMode: false,
              prevArrow: $(".testimonial-prev-arrow1"),
              nextArrow: $(".testimonial-next-arrow1"),
              draggable: true,
              centerPadding: "40px",
              dots: false,
              scroll: true,
              responsive: [
                {
                  breakpoint: 769,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                  },
                },
              ],
            });

            //service 7
            $(".case7-slider").slick({
              autoplay:true,
              autoplaySpeed:1500,
              margin: "30",
              slidesToShow: 3,
              arrows: true,
              centerMode: false,
              loop: true,
              centerMode: false,
              prevArrow: $(".case7-prev-arrow1"),
              nextArrow: $(".case7-next-arrow1"),
              draggable: true,
              centerPadding: "40px",
              dots: false,
              scroll: true,
              responsive: [
                {
                  breakpoint: 769,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                  },
                },
              ],
            });

            //service 7
            $(".service7-slider").slick({
              autoplay:true,
              autoplaySpeed:1500,
              margin: "30",
              slidesToShow: 3,
              arrows: true,
              centerMode: false,
              loop: true,
              centerMode: false,
              prevArrow: $(".service7-prev-arrow1"),
              nextArrow: $(".service7-next-arrow1"),
              draggable: true,
              centerPadding: "40px",
              dots: false,
              scroll: true,
              responsive: [
                {
                  breakpoint: 769,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                  },
                },
              ],
            });



            //testimonial 4
            $(".tes4-slider").slick({
              margin: "30",
              slidesToShow: 3,
              arrows: true,
              centerMode: false,
              loop: true,
              centerMode: false,
              prevArrow: $(".testimonial-prev-arrow1"),
              nextArrow: $(".testimonial-next-arrow1"),
              draggable: true,
              centerPadding: "40px",
              dots: false,
              scroll: true,
              responsive: [
                {
                  breakpoint: 769,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                  },
                },
              ],
            });

            //testimonial 6
            $(".tes6-slider").slick({
              margin: "30",
              slidesToShow: 3,
              arrows: true,
              centerMode: true,
              loop: true,
              autoplay: true,
              autoplaySpeed: 2000,
              centerMode: false,
              prevArrow: $(".tes6-next-arrow"),
              nextArrow: $(".tes6-prev-arrow"),
              draggable: true,
              fade: false,
              responsive: [
                {
                  breakpoint: 769,
                  settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: "40px",
                    slidesToShow: 1,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: "40px",
                    slidesToShow: 1,
                  },
                },
              ],
            });

            // testimonial 8//
            $('.slider-galeria').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              infinite: false,
              asNavFor: '.slider-galeria-thumbs',
              prevArrow: $('.testimonial-next-arrow2'),
              nextArrow: $('.testimonial-prev-arrow2'),
            });
            $('.slider-galeria-thumbs').slick({
              slidesToShow: 4,
              slidesToScroll: 1,
              items:15,
              arrows: true,
              asNavFor: '.slider-galeria',
              vertical: true,
              verticalSwiping: true,
              focusOnSelect: true,
              infinite: false,
              prevArrow: $('.testimonial-next-arrow2'),
              nextArrow: $('.testimonial-prev-arrow2'),
            });


            //testimonial 8
            $(".tes8-slider").slick({
              margin: "30",
              slidesToShow: 1,
              arrows: true,
              centerMode: true,
              loop: true,
              autoplay: true,
              autoplaySpeed: 2000,
              centerMode: false,
              prevArrow: $(".tes8-next-arrow"),
              nextArrow: $(".tes8-prev-arrow"),
              draggable: true,
              fade: false,
              responsive: [
                {
                  breakpoint: 769,
                  settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: "40px",
                    slidesToShow: 1,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: "40px",
                    slidesToShow: 1,
                  },
                },
              ],
            });

            //testimonial 8
            $(".hero10-sliders").slick({
              margin: "30",
              slidesToShow: 1,
              arrows: true,
              autoplay: true,
              autoplaySpeed: 2000,
              centerMode: true,
              loop: true,
              centerMode: false,
              prevArrow: $(".hero10-next-arrow"),
              nextArrow: $(".hero10-prev-arrow"),
              draggable: true,
              fade: true,
              responsive: [
                {
                  breakpoint: 769,
                  settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: "40px",
                    slidesToShow: 1,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: "40px",
                    slidesToShow: 1,
                  },
                },
              ],
            });

   /*--------------------------------------------------------------
    17. Hover To Active
  --------------------------------------------------------------*/
    $('.cs_hover_active').hover(function () {
      $(this).addClass('active').siblings().removeClass('active');
    });

  //Aos animation active

    AOS.init({
      offset: 100,
      duration: 400,
      easing: "ease-in-out",
      anchorPlacement: "top-bottom",
      disable: "mobile",
      once: false,
    });


    //Video poppup
    if ($(".play-btn").length > 0) {
      $(".play-btn").magnificPopup({
        type: "iframe",
      });
    };


    
    



        // page-progress
        var progressPath = document.querySelector(".progress-wrap path");
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition =
          "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition =
          "stroke-dashoffset 10ms linear";
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength) / height;
          progressPath.style.strokeDashoffset = progress;
        };
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on("scroll", function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery(".progress-wrap").addClass("active-progress");
          } else {
            jQuery(".progress-wrap").removeClass("active-progress");
          }
        });
        jQuery(".progress-wrap").on("click", function (event) {
          event.preventDefault();
          jQuery("html, body").animate({ scrollTop: 0 }, duration);
          return false;
        });
        



    //product colors
    const colors = $(".accordion1 .accordion-item");

    colors.on("click", function () {
      $(".accordion1 .accordion-item").removeClass("active");
      $(this).addClass("active");
    });


  });


    //preloader
    $(window).on("load", function (event) {
      setTimeout(function () {
        // Use explicit hide to ensure preloader is not visible after load
        togglePreloader(false);
      }, 500);
    });


    /* Text Effect Animation */
	if ($('.text-anime-style-1').length) {
		let staggerAmount 	= 0.05,
			translateXValue = 0,
			delayValue 		= 0.5,
		   animatedTextElements = document.querySelectorAll('.text-anime-style-1');
		
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.words, {
				duration: 1,
				delay: delayValue,
				x: 20,
				autoAlpha: 0,
				stagger: staggerAmount,
				scrollTrigger: { trigger: element, start: "top 85%" },
				});
		});		
	}
	
	if ($('.text-anime-style-2').length) {				
		let	 staggerAmount 		= 0.05,
			 translateXValue	= 20,
			 delayValue 		= 0.5,
			 easeType 			= "power2.out",
			 animatedTextElements = document.querySelectorAll('.text-anime-style-2');
		
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.chars, {
					duration: 1,
					delay: delayValue,
					x: translateXValue,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%"},
				});
		});		
	}
	
	if ($('.text-anime-style-3').length) {	
		let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');
		
		 animatedTextElements.forEach((element) => {
			//Reset if needed
			if (element.animation) {
				element.animation.progress(1).kill();
				element.split.revert();
			}

			element.split = new SplitText(element, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(element, { perspective: 400 });

			gsap.set(element.split.chars, {
				opacity: 0,
				x: "50",
			});

			element.animation = gsap.to(element.split.chars, {
				scrollTrigger: { trigger: element,	start: "top 95%" },
				x: "0",
				y: "0",
				rotateX: "0",
				opacity: 1,
				duration: 1,
				ease: Back.easeOut,
				stagger: 0.02,
			});
		});		
	}



})(jQuery);

// Safe preloader toggler that works with or without jQuery
function togglePreloader(show) {
  try {
    var el = document.querySelector('.preloader');
    if (!el) return;
    if (typeof show === 'boolean') {
      if (show) {
        // Ensure full-screen centered overlay
        el.style.position = 'fixed';
        el.style.top = '0';
        el.style.left = '0';
        el.style.width = '100vw';
        el.style.height = '100vh';
        el.style.display = 'flex';
        el.style.alignItems = 'center';
        el.style.justifyContent = 'center';
        el.style.zIndex = '9999';
        // Optional backdrop if needed
        if (!el.style.backgroundColor) {
          el.style.backgroundColor = 'rgba(255,255,255,0.7)';
        }
      } else {
        el.style.display = 'none';
      }
    } else {
      var current = window.getComputedStyle(el).display;
      if (current === 'none') {
        // Show with centered styles
        el.style.position = 'fixed';
        el.style.top = '0';
        el.style.left = '0';
        el.style.width = '100vw';
        el.style.height = '100vh';
        el.style.display = 'flex';
        el.style.alignItems = 'center';
        el.style.justifyContent = 'center';
        el.style.zIndex = '9999';
        if (!el.style.backgroundColor) {
          el.style.backgroundColor = 'rgba(255,255,255,0.7)';
        }
      } else {
        el.style.display = 'none';
      }
    }
  } catch (e) {}
}

const rippleBtns = document.getElementsByClassName("ripple");

function createRipple(event) {
  // Create the ripple span element
  let ripples = document.createElement("span");
  
  // Calculate the position relative to the button element
  let x = event.clientX - event.target.getBoundingClientRect().left;
  let y = event.clientY - event.target.getBoundingClientRect().top;
  
  // Set the position of the ripple within the button element
  ripples.style.left = x + "px";
  ripples.style.top = y + "px";
  
  // Append the ripple to the button
  event.target.appendChild(ripples);
  
  // Set a timeout to remove the ripple after 1000 milliseconds
  let clearTimeoutHandle = setTimeout(() => {
    ripples.remove();
  }, 1000);

  // Remove the ripple immediately if the mouse leaves the button
  event.target.addEventListener("mouseout", function () {
    clearTimeout(clearTimeoutHandle);
    ripples.remove();
  });
}

// Attach the createRipple function to each button
for (let i = 0; i < rippleBtns.length; i++) {
  const rippleBtn = rippleBtns[i];
  rippleBtn.addEventListener("mouseover", createRipple);
}



// line progress bar

let progress = $('#progress1').LineProgressbar({
  percentage: 100
});

let progress2 = $('#progress2').LineProgressbar({
  percentage: 98
});

let progress3 = $('#progress3').LineProgressbar({
  percentage: 97
});


if($('.reveal').length){gsap.registerPlugin(ScrollTrigger);let revealContainers=document.querySelectorAll(".reveal");revealContainers.forEach((container)=>{let image=container.querySelector("img");let tl=gsap.timeline({scrollTrigger:{trigger:container,toggleActions:"play none none none"}});tl.set(container,{autoAlpha:1});tl.from(container,1.5,{xPercent:-100,ease:Power2.out});tl.from(image,1.5,{xPercent:100,scale:1.3,delay:-1.5,ease:Power2.out});});}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const fields = ['first_name', 'last_name', 'email', 'phone', 'subject', 'message'];
    const errorMessages = {
        first_name: window.currentLang == 'en' ? 'First name is required.' : 'Ime je obavezno.',
        last_name: window.currentLang == 'en' ? 'Last name is required.' : 'Prezime je obavezno.',
        email: window.currentLang == 'en' ? 'A valid email is required.' : 'Validna email adresa je obavezna.',
        phone: window.currentLang == 'en' ? 'Phone is required.' : 'Telefon je obavezan.',
        subject: window.currentLang == 'en' ? 'Subject is required.' : 'Tema je obavezna.',
        message: window.currentLang == 'en' ? 'Message is required.' : 'Poruka je obavezna.'
    };

    function validateField(name, value) {
        switch(name) {
            case 'first_name':
            case 'last_name':
                return value && value.length <= 255;
            case 'email':
                return value && value.length <= 255 && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
            case 'phone':
                return value && value.length <= 20;
            case 'subject':
                return value && value.length <= 255;
            case 'message':
                return value && value.length > 0;
            default:
                return true;
        }
    }

    form.addEventListener('submit', function(e) {
        // Build messages using current language at submit time
        const langNow = getCurrentLang();
        const errorMessages = {
            first_name: langNow === 'en' ? 'First name is required.' : 'Ime je obavezno.',
            last_name:  langNow === 'en' ? 'Last name is required.'  : 'Prezime je obavezno.',
            email:      langNow === 'en' ? 'A valid email is required.' : 'Validna email adresa je obavezna.',
            phone:      langNow === 'en' ? 'Phone is required.' : 'Telefon je obavezan.',
            subject:    langNow === 'en' ? 'Subject is required.' : 'Tema je obavezna.',
            message:    langNow === 'en' ? 'Message is required.' : 'Poruka je obavezna.'
        };
        const failMsg = document.getElementById('contact-fail');
        if (failMsg) { failMsg.innerText = ''; failMsg.style.display = 'none'; }
        let valid = true;
        fields.forEach(function(field) {
            const input = document.getElementById(field);
            const errorSpan = document.getElementById('error_' + field);
            if (!validateField(field, input.value.trim())) {
                errorSpan.textContent = errorMessages[field];
                valid = false;
            } else {
                errorSpan.textContent = '';
            }
        });
        if (!valid) {
            e.preventDefault();
            if (failMsg) { failMsg.innerText = msg('correctErrors'); failMsg.style.display = 'block'; }
            return false;
        }
        // AJAX submit
        e.preventDefault();
        const formData = new FormData(form);
        // Include current language for backend localization
        formData.append('lang', getCurrentLang());
        // Show preloader while request is running
        togglePreloader(true);
        fetch(form.action, {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': document.querySelector('input[name="_token"]').value
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.errors) {
                Object.keys(data.errors).forEach(function(key) {
                    const errorSpan = document.getElementById('error_' + key);
                    if (errorSpan) errorSpan.textContent = data.errors[key][0];
                });
                if (failMsg) { failMsg.innerText = data.message || msg('correctErrors'); failMsg.style.display = 'block'; }
            } else if (data.message || data.success) {
                form.reset();
                fields.forEach(function(field) {
                    document.getElementById('error_' + field).textContent = '';
                });
                if (failMsg) { failMsg.innerText = ''; failMsg.style.display = 'none'; }
                alert((data && data.message) || msg('contactSuccess'));
            } else {
                if (failMsg) { failMsg.innerText = data.message || msg('genericError'); failMsg.style.display = 'block'; }
            }
        })
        .catch(() => {
            if (failMsg) { failMsg.innerText = msg('genericError'); failMsg.style.display = 'block'; }
        })
        .finally(() => {
            // Hide preloader when request completes
            togglePreloader(false);
        });
    });

    // Employment form logic
    const employmentForm = document.getElementById('employmentForm');
    if (employmentForm) {
        const employmentFields = [
            'first_name', 'last_name', 'email', 'phone', 'country_of_residence', 'desired_position_or_field', 'message'
        ];
        const employmentErrorMessages = {
            first_name: window.currentLang == 'en' ? 'First name is required.' : 'Ime je obavezno.',
            last_name: window.currentLang == 'en' ? 'Last name is required.' : 'Prezime je obavezno.',
            email: window.currentLang == 'en' ? 'A valid email is required.' : 'Validna email adresa je obavezna.',
            phone: window.currentLang == 'en' ? 'Phone is required.' : 'Telefon je obavezan.',
            country_of_residence: window.currentLang == 'en' ? 'Country of residence is required.' : 'Država prebivališta je obavezna.',
            desired_position_or_field: window.currentLang == 'en' ? 'Desired position or field is required.' : 'Željena pozicija ili oblast je obavezna.',
            message: window.currentLang == 'en' ? 'Message is required.' : 'Poruka je obavezna.'
        };
        function validateEmploymentField(name, value) {
            switch(name) {
                case 'first_name':
                case 'last_name':
                case 'country_of_residence':
                case 'desired_position_or_field':
                    return value && value.length <= 255;
                case 'email':
                    return value && value.length <= 255 && /^\S+@\S+\.\S+$/.test(value);
                case 'phone':
                    return value && value.length <= 20;
                case 'message':
                    return value && value.length > 0;
                default:
                    return true;
            }
        }
        employmentForm.addEventListener('submit', function(e) {
            // Build messages using current language at submit time
            const langNow = getCurrentLang();
            const employmentErrorMessages = {
                first_name: langNow === 'en' ? 'First name is required.' : 'Ime je obavezno.',
                last_name:  langNow === 'en' ? 'Last name is required.'  : 'Prezime je obavezno.',
                email:      langNow === 'en' ? 'A valid email is required.' : 'Validna email adresa je obavezna.',
                phone:      langNow === 'en' ? 'Phone is required.' : 'Telefon je obavezan.',
                country_of_residence: langNow === 'en' ? 'Country of residence is required.' : 'Država prebivališta je obavezna.',
                desired_position_or_field: langNow === 'en' ? 'Desired position or field is required.' : 'Željena pozicija ili oblast je obavezna.',
                message:    langNow === 'en' ? 'Message is required.' : 'Poruka je obavezna.'
            };
            const failMsg = document.getElementById('employment-fail');
            if (failMsg) { failMsg.innerText = ''; failMsg.style.display = 'none'; }
            let valid = true;
            employmentFields.forEach(function(field) {
                const input = employmentForm.querySelector(`[name="${field}"]`);
                const errorDiv = document.getElementById('employment_error_' + field);
                if (!validateEmploymentField(field, input.value.trim())) {
                    if (errorDiv) errorDiv.innerText = employmentErrorMessages[field];
                    if (input) input.classList.add('is-invalid');
                    valid = false;
                } else {
                    if (errorDiv) errorDiv.innerText = '';
                    if (input) input.classList.remove('is-invalid');
                }
            });
            if (!valid) {
                e.preventDefault();
                return false;
            }
            // AJAX submit
            e.preventDefault();
            const formData = new FormData(employmentForm);
            // Include current language for backend localization
            formData.append('lang', getCurrentLang());
            // Show preloader while request is running
            togglePreloader(true);
            fetch(employmentForm.action, {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRF-TOKEN': employmentForm.querySelector('[name="_token"]').value
                },
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                employmentFields.forEach(function(field) {
                    const errorDiv = document.getElementById('employment_error_' + field);
                    const input = employmentForm.querySelector(`[name="${field}"]`);
                    if (errorDiv) errorDiv.innerText = '';
                    if (input) input.classList.remove('is-invalid');
                });
                const failMsg = document.getElementById('employment-fail');
                if (failMsg) failMsg.style.display = 'none';
                if (data.errors) {
                    Object.keys(data.errors).forEach(function(key) {
                        const errorDiv = document.getElementById('employment_error_' + key);
                        const input = employmentForm.querySelector(`[name="${key}"]`);
                        if (errorDiv) errorDiv.innerText = data.errors[key][0];
                        if (input) input.classList.add('is-invalid');
                    });
                    if (failMsg) {
                        failMsg.innerText = data.message || msg('correctErrors');
                        failMsg.style.display = 'block';
                    }
                } else if (data.message || data.success) {
                    // Treat presence of message OR success as success (match contact form behavior)
                    employmentForm.reset();
                    const successMsg = document.getElementById('employment-success');
                    if (successMsg) { successMsg.innerText = ''; successMsg.style.display = 'none'; }
                    if (failMsg) { failMsg.innerText = ''; failMsg.style.display = 'none'; }
                    alert((data && data.message) || msg('employmentSuccess'));
                } else {
                    if (failMsg) {
                        failMsg.innerText = data.message || msg('genericError');
                        failMsg.style.display = 'block';
                    }
                }
            })
            .catch(() => {
                const failMsg = document.getElementById('employment-fail');
                if (failMsg) {
                    failMsg.innerText = msg('genericError');
                    failMsg.style.display = 'block';
                }
            })
            .finally(() => {
                // Hide preloader when request completes
                togglePreloader(false);
            });
        });
    }
});

// Subscribe form logic
document.addEventListener('DOMContentLoaded', function() {
  var subForm = document.getElementById('subscribeForm');
  if (!subForm) return;
  subForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var emailInput = subForm.querySelector('input[name="email"]');
    var successDiv = document.getElementById('subscribe_success');
    var errorDiv = document.getElementById('subscribe_error');
    if (successDiv) successDiv.style.display = 'none';
    if (errorDiv) errorDiv.style.display = 'none';

    var email = emailInput.value.trim();
    var valid = /^\S+@\S+\.\S+$/.test(email);
    if (!valid) {
      if (errorDiv) { errorDiv.textContent = msg('invalidEmail'); errorDiv.style.display = 'block'; }
      return;
    }

    var formData = new FormData(subForm);
    // Include current language for backend localization
    formData.append('lang', getCurrentLang());
    fetch(subForm.action, {
      method: 'POST',
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
      body: formData
    })
    .then(function(res){ return res.json(); })
    .then(function(data){
      if (data && data.success) {
        // Hide inline success message for consistency; use alert instead
        if (successDiv) { successDiv.textContent = ''; successDiv.style.display = 'none'; }
        if (errorDiv) { errorDiv.textContent = ''; errorDiv.style.display = 'none'; }
        alert((data && data.message) || msg('subscribedSuccess'));
        subForm.reset();
      } else {
        if (errorDiv) { errorDiv.textContent = (data && data.message) || msg('subscriptionFailed'); errorDiv.style.display = 'block'; }
      }
    })
    .catch(function(){
      if (errorDiv) { errorDiv.textContent = msg('genericError'); errorDiv.style.display = 'block'; }
    });
  });
});

function updateServiceBoxActive() {
    var isTabletOrLower = window.innerWidth <= 991;
    var boxes = document.querySelectorAll('.service1-box');
    if (isTabletOrLower) {
        boxes.forEach(function(box) {
            box.classList.add('active');
        });
    } else {
        // Only keep the originally active one
        boxes.forEach(function(box, idx) {
            if (box.classList.contains('active') && idx !== 1) {
                box.classList.remove('active');
            }
        });
        if (boxes[1]) boxes[1].classList.add('active');
    }
}
window.addEventListener('DOMContentLoaded', updateServiceBoxActive);
window.addEventListener('resize', updateServiceBoxActive);

const translations = {
  en: {
    header_about: "About Us",
    header_service: "Service",
    header_works: "Works",
    header_contact: "Contact",
    header_get_employed: "Get Employed",
    header_button: "Get A Quote",
    header_social_media: "Social Media",

    hero_tagline: "Reliable Global Workforce Solutions",
    hero_title: "Boost Your Staff, Build Your Success",
    hero_description: "At Staff Boost Agency, we connect motivated and qualified professionals from around the world with companies in need of dependable workers. Whether you're scaling a construction project, expanding your delivery fleet or need help in any other industry, we bring the talent to you.",
    hero_button: "Find Workers",
    hero_button_secondary: "Get Employed",

    about_box_one: "Visa Success",
    about_box_two: "Workers Placed",
    about_box_three: "Partner Countries",
    about_tagline: "Why Choose Us",
    about_title: "Your Partner for\nReliable International Recruitment",
    about_description: "We source trained and verified workers ready to join your team quickly. With full visa support and a smooth onboarding process, we make hiring simple and stress-free.",
    about_bullet_one: "Background Checks",
    about_bullet_two: "Flexible Models",
    about_bullet_three: "Fast Recruitment",
    about_bullet_four: "Documentation & Visa",
    about_button: "Start Hiring Today",

    service_tagline: "Our Service",
    service_title: "Staffing Solutions Built for Your Needs",
    service_description: "Whether you need teams for construction, taxi/ride-hailing, delivery, retail operations, warehouses, or public transportation, our recruitment solutions are designed to match your exact business needs quickly and efficiently.",
    service_image_one_title: "Construction Workforce",
    service_image_one_description: "Skilled and semi-skilled labor ready for all project sizes.",
    service_image_two_title: "Transportation & Drivers",
    service_image_two_description: "Qualified taxi, ride-hailing, bus, and delivery drivers.",
    service_image_three_title: "Retail & General Workers",
    service_image_three_description: "Dependable staff for shops, warehouses, and logistics roles.",
    service_button: "Let’s get started" ,

    work_tagline: "Why We Are Different",
    work_title: "We Solve Staffing Challenges Efficiently",
    work_description: "From sourcing and screening to visas and onboarding, we manage the entire process so your company can grow confidently with a dependable, long-term workforce.",
    work_box_one_title: "Fast Staffing Turnaround",
    work_box_one_description: "We connect you with ready-to-deploy workers and handle all onboarding steps.",
    work_box_two_title: "Visa & Documentation Management",
    work_box_two_description: "We manage the entire legal, travel, and compliance process so you can focus on your business.",
    work_box_three_title: "Long-Term Reliability",
    work_box_three_description: "Our workers pass strict screenings and are committed to stable, long-term employment.",

    contact_tagline: "Contact Us",
    contact_title: "Start Your Hiring Journey Today",
    contact_description: "Let’s build the workforce your business needs. Contact us to learn more about our international hiring process, request staffing support, or speak with a specialist about customized recruitment options.",
    contact_box_one_title: "Contact Us",
    contact_box_one_link: "Click here - WhatsApp",
    contact_box_two_title: "Send us Mail",
    contact_form_title: "Send us a Message",
    contact_form_description: "Provide your details and a brief description of your needs. Our team will follow up promptly with personalized support.",
    contact_form_button: "Submit Now",

    placeholder_first_name: "First Name",
    placeholder_last_name: "Last Name",
    placeholder_email: "Email Address",
    placeholder_phone: "Phone Number",
    placeholder_subject: "Subject",
    placeholder_message: "Message",
    placeholder_country_of_residence: "Country of Residence",
    placeholder_desired_position_or_field: "Desired Position or Field",
    placeholder_employment_message: "Tell us about your experience, skills, and what type of work you are looking for",

    team_tagline: "Join Our Team",
    team_title: "Apply to Work with Staff Boost Agency",
    team_description: "Are you ready to take the next step in your career? Submit your application to join our network of motivated professionals. We connect skilled workers with top companies seeking talent for a variety of roles and industries.",
    team_form_title: "Employment Application",
    team_form_description: "Fill out your details and tell us about your experience. Our recruiters will review your application and contact you with suitable opportunities.",
    team_button: "Submit Application",

    footer_title: "Build a Stronger, More Reliable Team for Long-Term Growth",
    footer_description: "Subscribe to get practical insights on reliable staffing solutions, international recruitment trends, and how Staff Boost Agency helps businesses grow with trusted talent from third-country markets.",
    footer_button: "Subscribe Now",
    footer_copyright: "© Copyright 2025 - Staff Boost Agency. All Rights Reserved"
  },
  sr: {
    header_about: "O nama",
    header_service: "Usluge",
    header_works: "Radovi",
    header_contact: "Kontakt",
    header_get_employed: "Zaposlite se",
    header_button: "Zatražite ponudu",
    header_social_media: "Društvene mreže",

    hero_tagline: "Pouzdana globalna rešenja za radnu snagu",
    hero_title: "Povećajte tim, izgradite svoj uspeh",
    hero_description: "U agenciji Staff Boost povezujemo motivisane i kvalifikovane profesionalce iz celog sveta sa kompanijama kojima su potrebni pouzdani radnici. Bilo da proširujete građevinski projekat, flotu za dostavu ili vam je potrebna pomoć u bilo kojoj drugoj industriji, mi vam donosimo talente.",
    hero_button: "Pronađite radnike",
    hero_button_secondary: "Zaposlite se",

    about_box_one: "Uspeh vize",
    about_box_two: "Postavljeni radnici",
    about_box_three: "Partnerske zemlje",
    about_tagline: "Zašto izabrati nas",
    about_title: "Vaš partner za pouzdano međunarodno zapošljavanje",
    about_description: "Pronalazimo obučene i verifikovane radnike spremne da se brzo pridruže vašem timu. Uz punu podršku za vizu i jednostavan proces uključivanja, činimo zapošljavanje jednostavnim i bez stresa.",
    about_bullet_one: "Provere pozadine",
    about_bullet_two: "Fleksibilni modeli",
    about_bullet_three: "Brzo zapošljavanje",
    about_bullet_four: "Dokumentacija i viza",
    about_button: "Započnite zapošljavanje danas",

    service_tagline: "Naše usluge",
    service_title: "Rešenja za zapošljavanje prilagođena vašim potrebama",
    service_description: "Bilo da vam trebaju timovi za građevinarstvo, taksi/vožnju, dostavu, maloprodajne operacije, skladišta ili javni prevoz, naša rešenja za zapošljavanje dizajnirana su da brzo i efikasno odgovore na vaše tačne poslovne potrebe.",
    service_image_one_title: "Građevinska radna snaga",
    service_image_one_description: "Kvalifikovana i polukvalifikovana radna snaga spremna za sve veličine projekata.",
    service_image_two_title: "Transport i vozači",
    service_image_two_description: "Kvalifikovani taksi, vozači za vožnju i dostavu.",
    service_image_three_title: "Maloprodajni i opšti radnici",
    service_image_three_description: "Pouzdano osoblje za prodavnice, skladišta i logističke uloge.",
    service_button: "Hajde da počnemo",

    work_tagline: "Zašto smo drugačiji",
    work_title: "Efikasno rešavamo izazove zapošljavanja",
    work_description: "Od pronalaženja i provere do viza i uključivanja, mi upravljamo celim procesom kako bi vaša kompanija mogla samouvereno da raste sa pouzdanom, dugoročnom radnom snagom.",
    work_box_one_title: "Brz odziv na zapošljavanje",
    work_box_one_description: "Povezujemo vas sa radnicima spremnim za raspoređivanje i rukujemo svim koracima uključivanja.",
    work_box_two_title: "Upravljanje vizama i dokumentacijom",
    work_box_two_description: "Upravljamo celim pravnim, putnim i usklađenim procesom kako biste se vi mogli fokusirati na svoje poslovanje.",
    work_box_three_title: "Dugoročna pouzdanost",
    work_box_three_description: "Naši radnici prolaze stroge provere i posvećeni su stabilnom, dugoročnom zaposlenju.",

    contact_tagline: "Kontaktirajte nas",
    contact_title: "Započnite svoje putovanje zapošljavanja danas",
    contact_description: "Izgradimo radnu snagu koja je potrebna vašem poslovanju. Kontaktirajte nas da biste saznali više o našem međunarodnom procesu zapošljavanja, zatražili podršku za zapošljavanje ili razgovarali sa stručnjakom o prilagođenim opcijama zapošljavanja.",
    contact_box_one_title: "Kontaktirajte nas",
    contact_box_one_link: "Kliknite tu - WhatsApp",
    contact_box_two_title: "Pošaljite nam mejl",
    contact_form_title: "Pošaljite nam poruku",
    contact_form_description: "Navedite svoje podatke i kratak opis vaših potreba. Naš tim će vas brzo kontaktirati sa personalizovanom podrškom.",
    contact_form_button: "Pošalji sada",

    placeholder_first_name: "Ime",
    placeholder_last_name: "Prezime",
    placeholder_email: "Email adresa",
    placeholder_phone: "Broj telefona",
    placeholder_subject: "Predmet",
    placeholder_message: "Poruka",
    placeholder_country_of_residence: "Zemlja prebivališta",
    placeholder_desired_position_or_field: "Željena pozicija ili oblast",
    placeholder_employment_message: "Recite nam o svom iskustvu, veštinama i kakav posao tražite",
    
    team_tagline: "Pridružite se našem timu",
    team_title: "Prijavite se za rad u agenciji Staff Boost",
    team_description: "Da li ste spremni da napravite sledeći korak u svojoj karijeri? Pošaljite svoju prijavu da se pridružite našoj mreži motivisanih profesionalaca. Povezujemo kvalifikovane radnike sa vrhunskim kompanijama koje traže talente za različite uloge i industrije.",
    team_form_title: "Prijava za zaposlenje",
    team_form_description: "Popunite svoje podatke i recite nam o svom iskustvu. Naši regruteri će pregledati vašu prijavu i kontaktirati vas sa odgovarajućim prilikama.",
    team_button: "Pošalji prijavu",

    footer_title: "Izgradite jači, pouzdaniji tim za dugoročni rast",
    footer_description: "Prijavite se da biste dobili praktične uvide o pouzdanim rešenjima za zapošljavanje, trendovima međunarodnog zapošljavanja i kako agencija Staff Boost pomaže preduzećima da rastu sa pouzdanim talentima iz tržišta trećih zemalja.",
    footer_button: "Prijavite se sada",
    footer_copyright: "© Copyright 2025 - Agencija Staff Boost. Sva prava zadržana"
  }
};

// Generic messages i18n helper
const MESSAGES = {
  en: {
    genericError: 'An error occurred. Please try again later.',
    correctErrors: 'Please correct the errors below.',
    invalidEmail: 'Please enter a valid email.',
    subscriptionFailed: 'Subscription failed. Please try again.',
    subscribedSuccess: 'Subscribed successfully.',
    employmentSuccess: 'Application submitted successfully!',
    contactSuccess: 'Message sent successfully!'
  },
  sr: {
    genericError: 'Došlo je do greške. Pokušajte ponovo kasnije.',
    correctErrors: 'Ispravite greške u nastavku.',
    invalidEmail: 'Unesite ispravnu email adresu.',
    subscriptionFailed: 'Prijava nije uspela. Pokušajte ponovo.',
    subscribedSuccess: 'Uspešno ste se prijavili.',
    employmentSuccess: 'Prijava je uspešno poslata!',
    contactSuccess: 'Poruka je uspešno poslata!'
  }
};
function msg(key){
  const lang = getCurrentLang();
  return (MESSAGES[lang] && MESSAGES[lang][key]) || (MESSAGES.en[key] || '');
}

// Helper to resolve current language reliably
function getCurrentLang() {
  try {
    if (window.currentLang && (window.currentLang === 'en' || window.currentLang === 'sr')) return window.currentLang;
    var urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang && (urlLang === 'en' || urlLang === 'sr')) return urlLang;
    var stored = localStorage.getItem('lang');
    if (stored && (stored === 'en' || stored === 'sr')) return stored;
  } catch (e) {}
  return 'en';
}
