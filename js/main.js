// Header Animation

const header = document.getElementById('main-header');
const threshold = 10;
const topShowOffset = 50;

let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
let ticking = false;

window.addEventListener('scroll', onScroll, { passive: true });

function onScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll(currentScroll);
            ticking = false;
        });
        ticking = true;
    }
}

function handleScroll(currentScroll) {
    const diff = currentScroll - lastScroll;
    if (Math.abs(diff) < threshold) {

        return;
    }

    if (diff > 0 && currentScroll > topShowOffset) {

        if (!header.classList.contains('hide')) {
            header.classList.add('hide');
            header.classList.remove('show');
            header.setAttribute('aria-hidden', 'true');
        }
    } else {

        if (!header.classList.contains('show')) {
            header.classList.add('show');
            header.classList.remove('hide');
            header.setAttribute('aria-hidden', 'false');
        }
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
}
window.addEventListener('resize', () => {
    lastScroll = window.pageYOffset || document.documentElement.scrollTop;
});


// heading animation
const animatedText = document.getElementById("animated-text");
const text = animatedText.textContent;
let index = 0;
let isDeleting = false;
let started = false;

function typeEffect() {
    if (!isDeleting) {
        animatedText.textContent = text.substring(0, index + 1);
        index++;
        if (index === text.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
    } else {
        animatedText.textContent = text.substring(0, index - 1);
        index--;
        if (index === 0) {
            isDeleting = false;
        }
    }
    setTimeout(typeEffect, isDeleting ? 120 : 180);
}

animatedText.textContent = "";

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
            started = true;
            setTimeout(typeEffect, 500);
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector(".banner-heading"));


// Scroll Down

document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.querySelector(".scroll-down-button");
    const banner = document.querySelector(".banner-wrapper");

    scrollButton.addEventListener("click", function () {
        const nextSection = banner.nextElementSibling;

        if (nextSection) {
            // Scroll smoothly
            nextSection.scrollIntoView({ behavior: "smooth" });

            // Wait for the scroll to finish before hiding (approx 600ms)
            setTimeout(() => {
                scrollButton.classList.add("hide");
            }, 600);
        }
    });
});


// Service Slider

$(document).ready(function () {
    $('.service-cover-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

// testimonial slider
$(document).ready(function () {
    var $slider = $('.testimonial-row');
    var slidesToShow = 3; // Matches your Slick setting
    var $slides = $slider.children('.testimonial-col');

    // Clone slides if less than slidesToShow + 1 (to allow infinite loop)
    if ($slides.length <= slidesToShow) {
        var clonesNeeded = slidesToShow + 1 - $slides.length;
        for (var i = 0; i < clonesNeeded; i++) {
            $slides.eq(i % $slides.length).clone().appendTo($slider);
        }
    }

    // Now initialize the Slick slider with infinite loop
    $slider.slick({
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});


// Client AOS Animation
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".client-cover li");

    items.forEach((item, index) => {
        item.setAttribute("data-aos", "fade-up");
        item.setAttribute("data-aos-delay", index * 100);
    });

    AOS.init({
        duration: 800,
        once: true
    });
});
