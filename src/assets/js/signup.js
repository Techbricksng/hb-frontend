
document.addEventListener('DOMContentLoaded', function() {
    // Testimonial carousel functionality
    const testimonials = document.querySelectorAll('.testimonial');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    let interval;

    // Initialize carousel
    function initCarousel() {
        // Hide all testimonials except the first one
        testimonials.forEach((testimonial, index) => {
            if (index !== 0) {
                testimonial.style.transform = 'translateX(100%)';
                testimonial.style.opacity = '0';
                testimonial.style.position = 'absolute';
                testimonial.style.top = '0';
            } else {
                testimonial.style.transform = 'translateX(0)';
                testimonial.style.opacity = '1';
            }
        });

        // Set up auto-rotation
        startAutoRotation();
    }

    // Start auto-rotation of testimonials
    function startAutoRotation() {
        interval = setInterval(() => {
            rotateTestimonials((currentIndex + 1) % testimonials.length);
        }, 5000); // Change testimonial every 5 seconds
    }

    // Stop auto-rotation
    function stopAutoRotation() {
        clearInterval(interval);
    }

    // Rotate to a specific testimonial
    function rotateTestimonials(newIndex) {
        if (newIndex === currentIndex) return;

        // Hide current testimonial
        testimonials[currentIndex].style.transform = 'translateX(-100%)';
        testimonials[currentIndex].style.opacity = '0';
        testimonials[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');

        // Show new testimonial
        testimonials[newIndex].style.transform = 'translateX(0)';
        testimonials[newIndex].style.opacity = '1';
        testimonials[newIndex].style.position = 'relative';
        testimonials[newIndex].classList.add('active');
        indicators[newIndex].classList.add('active');

        // Hide other testimonials
        testimonials.forEach((testimonial, index) => {
            if (index !== newIndex) {
                testimonial.style.transform = 'translateX(100%)';
                testimonial.style.opacity = '0';
                testimonial.style.position = 'absolute';
            }
        });

        currentIndex = newIndex;
    }

    // Add click events to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopAutoRotation();
            rotateTestimonials(index);
            startAutoRotation();
        });
    });

    // File upload functionality
    const uploadBtn = document.querySelector('.upload-btn');
    const fileInput = document.getElementById('id-upload');

    uploadBtn.addEventListener('click', function() {
        fileInput.click();
    });

    fileInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            uploadBtn.querySelector('span:first-child').textContent = this.files[0].name;
        }
    });

    // Form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Form validation would go here
        alert('Form submitted successfully!');
    });

    // Initialize carousel
    initCarousel();
});
