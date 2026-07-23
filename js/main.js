jQuery(function($) {
    'use strict';

    // Header Sticky
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 120) {
            $('.navbar-area').addClass("is-sticky");
        } else {
            $('.navbar-area').removeClass("is-sticky");
        }
    });

    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // Search Popup JS
    $('.close-btn').on('click', function() {
        $('.search-overlay').fadeOut();
        $('.search-btn').show();
        $('.close-btn').removeClass('active');
    });
    $('.search-btn').on('click', function() {
        $(this).hide();
        $('.search-overlay').fadeIn();
        $('.close-btn').addClass('active');
    });

    // Button Hover JS
    $(function() {
        $('.default-btn')
            .on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({
                    top: relY,
                    left: relX
                })
            })
            .on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({
                    top: relY,
                    left: relX
                })
            });
    });

    // Home Sliders
    $('.home-sliders').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        mouseDrag: true,
        items: 1,
        autoHeight: true,
        dots: false,
        autoplay: true,
        smartSpeed: 500,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-left-arrow-alt' ></i>",
            "<i class='bx bx-right-arrow-alt'></i>",
        ],
    });

    $(".home-sliders").on("translate.owl.carousel", function() {
        $(".slider-content b, .slider-content h1, .slider-content .typewrite").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
        $(".slider-content p").removeClass("animate__animated animate__fadeInDown").css("opacity", "0");
        $(".slider-content a").removeClass("animate__animated animate__fadeInDown").css("opacity", "0");
    });

    $(".home-sliders").on("translated.owl.carousel", function() {
        $(".slider-content b, .slider-content h1, .slider-content .typewrite").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
        $(".slider-content p").addClass("animate__animated animate__fadeInDown").css("opacity", "1");
        $(".slider-content a").addClass("animate__animated animate__fadeInDown").css("opacity", "1");
    });

    // Popup Video
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Management Slider
    $('.management-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 500,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    // Partner Slider (Auto Moving Left to Right)
    $('.partner-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500,
        smartSpeed: 1000,
        autoplayHoverPause: false,
        margin: 30,
        center: false,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            1024: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });

    // Testimonial Slider
    $('.testimonial-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 500,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        items: 1,
        navText: [
            "<i class='bx bx-left-arrow-alt' ></i>",
            "<i class='bx bx-right-arrow-alt'></i>",
        ],
    });

    // Top Management Slider
    $('.top-management-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 500,
        margin: 10,
        autoplayHoverPause: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    // Why Choose Slider
    $('.why-choose-area-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 500,
        margin: 10,
        autoplayHoverPause: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    // Estate Slider
    $('.estate-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 500,
        margin: 10,
        autoplayHoverPause: true,
        autoplay: true,
        autoplayHoverPause: true,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        navText: [
            "<i class='bx bx-chevron-up'></i>",
            "<i class='bx bxs-chevron-down'></i>",
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

    // Tabs
    (function($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        $('.tab ul.tabs li a').on('click', function(g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();
            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
            g.preventDefault();
        });
    })(jQuery);

    // Odometer JS
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // Nice Select JS
    $('select').niceSelect();

    // Subscribe form
    $(".newsletter-form").on("submit", function(event) {
        event.preventDefault();
        var emailInput = $(this).find("input[type='email']");
        var email = emailInput.val() ? emailInput.val().trim() : "";
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email)) {
            formErrorSub();
            submitMSGSub(false, "Please enter a valid email address.");
            return false;
        }

        window.location.href = "404.html";
        return false;
    });

    function formErrorSub() {
        $(".newsletter-form").addClass("animate__animated animate__shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animate__animated animate__shake");
        }, 1000);
    }

    function submitMSGSub(valid, msg) {
        var msgClasses = valid ? "validation-success" : "validation-danger";
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }

    // Go to Top
    $(function() {
        // Scroll Event
        $(window).on('scroll', function() {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active');
            if (scrolled < 600) $('.go-top').removeClass('active');
        });
        // Click Event
        $('.go-top').on('click', function() {
            $("html, body").animate({
                scrollTop: "0"
            }, 0);
        });
    });

    // Client Slider
    $('.client-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 500,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        items: 1,
        navText: [
            "<i class='bx bx-left-arrow-alt' ></i>",
            "<i class='bx bx-right-arrow-alt'></i>",
        ],
    });

    // Feedback Slider
    $('.feedback-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        smartSpeed: 500,
        margin: 10,
        autoplayHoverPause: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    //skill
    jQuery('.skill-bar').each(function() {
        jQuery(this).find('.progress-content').animate({
            width: jQuery(this).attr('data-percentage')
        }, 2000);

        jQuery(this).find('.progress-number-mark').animate({
            left: jQuery(this).attr('data-percentage')
        }, {
            duration: 2000,
            step: function(now, fx) {
                var data = Math.round(now);
                jQuery(this).find('.percent').html(data + '%');
            }
        });
    });

    // Image Sliders
    $('.image-sliders').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 20,
        navText: [
            "<i class='bx bx-left-arrow-alt'></i>",
            "<i class='bx bx-right-arrow-alt'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });

    // Features Details Sliders
    $('.features-details-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 10,
        navText: [
            "<i class='bx bx-left-arrow-alt'></i>",
            "<i class='bx bx-right-arrow-alt'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 2,
            }
        }
    });

    // FAQ Accordion
    $(function() {
        $('.accordion').find('.accordion-title').on('click', function() {
            // Adds Active Class
            $(this).toggleClass('active');
            // Expand or Collapse This Panel
            $(this).next().slideToggle('fast');
            // Hide The Other Panels
            $('.accordion-content').not($(this).next()).slideUp('fast');
            // Removes Active Class From Other Titles
            $('.accordion-title').not($(this)).removeClass('active');
        });
    });

    // Count Time 
    function makeTimer() {
        var endTime = new Date("june  30, 2026 17:00:00 PDT");
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>minutes</span>");
        $("#seconds").html(seconds + "<span>seconds</span>");
    }
    setInterval(function() {
        makeTimer();
    }, 300);

    // WOW JS
    $(window).on('load', function() {
        if ($(".wow").length) {
            var wow = new WOW({
                boxClass: 'wow', // animate__animated animate__element css class (default is wow)
                animateClass: 'animate__animated', // animation css class (default is animated)
                offset: 20, // distance to the element when triggering the animation (default is 0)
                mobile: true, // trigger animations on mobile devices (default is true)
                live: true, // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
    });

    // Preloader Area
    $(window).on('load', function() {
        $('.preloader').addClass('preloader-deactivate');
    });

    // Buy Now Btn
    // Buy Now button disabled

    // Switch Btn
    $('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");

}(jQuery));

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('stackly_theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('stackly_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}
// Immediately invoked function to set the theme on initial load
(function() {
    if (localStorage.getItem('stackly_theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();