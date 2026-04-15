$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // Scroll spy
        $('section').each(function () {
            const height = $(this).outerHeight();
            const offset = $(this).offset().top - 200;
            const top = $(window).scrollTop();
            const id = $(this).attr('id');

            if (top >= offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $(`.navbar ul li a[href="#${id}"]`).addClass('active');
            }
        });
    });

    // Smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        const target = $(this).attr('href');

        if (target && target.startsWith('#') && $(target).length) {
            e.preventDefault();
            $('html, body').animate(
                {
                    scrollTop: $(target).offset().top,
                },
                500,
                'linear'
            );
        }
    });

    // Tilt effect
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
        speed: 400
    });
});

// Change tab title and favicon when tab visibility changes
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Vishwa Patel | Data Analyst & IT Support Portfolio";
        $("#favicon").attr("href", "./assets/images/profile3.jpg");
    } else {
        document.title = "Vishwa Patel | Portfolio";
        $("#favicon").attr("href", "./assets/images/favhand.png");
    }
});

// Typed text effect
var typed = new Typed(".typing-text", {
    strings: [
        "Data Analysis",
        "Reporting",
        "IT Support",
        "Data Management",
        "Technical Support"
    ],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// ScrollReveal animation
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h2', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });

/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 200, interval: 100 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 200 });
srtop.reveal('.experience .timeline .container', { interval: 300 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 200 });
srtop.reveal('.contact .container .form-group', { delay: 300 });