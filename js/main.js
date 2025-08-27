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