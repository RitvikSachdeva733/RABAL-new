document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    document.querySelector('.mobile-menu').addEventListener('click', () => {
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenu.classList.toggle('active'); // Toggle active class on mobile menu
    });

    // Close Mobile Menu When a Link is Clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.remove('active');
        });
    });

    // Smooth Scroll with Centering
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Find the target section

            if (targetSection) {
                // Scroll to the target section and center it in the viewport
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center' // Center the section vertically
                });
            }
        });
    });

    // Sticky Header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const navLinks = document.querySelectorAll('.nav-links a');
        const logo = document.querySelector('.logo');
        const mobileMenu = document.querySelector('.mobile-menu'); // Select the mobile menu icon

        // Get CSS variable values
        const textDark = getComputedStyle(document.documentElement).getPropertyValue('--text-dark').trim();
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();

        if (window.scrollY > 100) {
            // When scrolled past 100px
            header.style.background = '#ffffff';
            header.style.color = textDark; // Use CSS variable value
            navLinks.forEach(link => link.style.color = textDark); // Use CSS variable value
            logo.style.color = primaryColor; // Use CSS variable value
            mobileMenu.style.color = textDark; // Change mobile menu icon color
        } else {
            // When at the top of the page
            header.style.background = 'transparent';
            header.style.color = '#ffffff';
            navLinks.forEach(link => link.style.color = '#ffffff');
            logo.style.color = '#ffffff';
            mobileMenu.style.color = '#ffffff'; // Reset mobile menu icon color
        }
    });

    // // Initialize Swiper
    // const swiper = new Swiper('.swiper-container', {
    //     loop: true, // Infinite loop
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    //     autoplay: {
    //         delay: 5000, // Auto-slide every 5 seconds
    //     },
    //     breakpoints: {
    //         // When window width is >= 320px
    //         320: {
    //             slidesPerView: 1,
    //             spaceBetween: 10,
    //         },
    //         // When window width is >= 768px
    //         768: {
    //             slidesPerView: 1,
    //             spaceBetween: 20,
    //         },
    //         // When window width is >= 1024px
    //         1024: {
    //             slidesPerView: 1,
    //             spaceBetween: 30,
    //         },
    //     },
    // });
    // Initialize Carousel with Autoplay
    // Initialize the carousel with autoplay
    const carouselElement = document.getElementById('bannerCarousel');
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 5000, // Autoplay every 3 seconds (adjust as needed)
        wrap: true, // Enable infinite loop
    });

    // Variable to store the autoplay interval
    let autoplayInterval;

    // Function to start autoplay
    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            carousel.next(); // Move to the next slide
        }, 5000); // Autoplay interval (3 seconds)
    }

    // Function to pause autoplay
    function pauseAutoplay() {
        clearInterval(autoplayInterval); // Stop the autoplay
    }

    // Start autoplay initially
    startAutoplay();

    // Add click event listener to the carousel
    carouselElement.addEventListener('click', () => {
        pauseAutoplay(); // Pause autoplay on click

        // Resume autoplay after 10 seconds
        setTimeout(() => {
            startAutoplay();
        }, 10000); // 10 seconds delay
    });

    // Dropdown Arrow Rotation
    const productsLink = document.querySelector('.products-link');
    const arrow = document.querySelector('.arrow');

    if (productsLink && arrow) {
        productsLink.addEventListener('mouseenter', () => {
            arrow.style.transform = 'rotate(180deg)';
        });

        productsLink.addEventListener('mouseleave', () => {
            arrow.style.transform = 'rotate(0deg)';
        });
    }
});