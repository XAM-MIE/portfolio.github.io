const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', (event) => {
    navLinks.classList.toggle('show');
    navbar.classList.toggle('open'); // Toggle navbar position

    // Toggle icon between "menu" and "cancel"
    if (navLinks.classList.contains('show')) {
        menuIcon.textContent = 'cancel';
    } else {
        menuIcon.textContent = 'menu';
    }
});

// Close nav when clicking outside of it
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
        navLinks.classList.remove('show');
        navbar.classList.remove('open'); // Slide back to right
        menuIcon.textContent = 'menu';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const preloadTexts = document.querySelectorAll('.preload-text');
    let currentIndex = 0;

    function showNextText() {
        // Remove active class from all texts
        preloadTexts.forEach(text => {
            text.classList.remove('active');
        });

        // Add active class to current text
        preloadTexts[currentIndex].classList.add('active');
        
        // Update index for next iteration
        currentIndex = (currentIndex + 1) % preloadTexts.length;
    }

    // Show first text immediately
    showNextText();

    // Change text every 1 second
    const interval = setInterval(showNextText, 1000);

    // Adjust the timeout to match preloader duration
    setTimeout(() => {
        clearInterval(interval);
    }, 5000); // 5 seconds total (1 second per word)
});

window.addEventListener("load", function() {
    setTimeout(function() {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 5000); // 5 seconds delay
});

const motionButtons = document.querySelectorAll('.motion-button');
const modalOverlays = document.querySelectorAll('.modal-overlay');
const closeButtons = document.querySelectorAll('.close-button');

// Add click event to each button
motionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modalOverlays[index].classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Add click event to each close button
closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal-overlay');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close modal when clicking outside
modalOverlays.forEach((overlay) => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light-theme') {
        body.classList.add('light-theme');
        themeToggle.checked = true;
    }
    
    themeToggle.addEventListener('change', () => {
        body.classList.toggle('light-theme');
        
        // Save theme preference
        const currentTheme = body.classList.contains('light-theme') ? 'light-theme' : '';
        localStorage.setItem('theme', currentTheme);
    });
});

// Function to handle navbar visibility
function handleNavbarVisibility() {
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');
    
    if (!navbar || !footer) return;

    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // If footer is in view (or close to being in view)
    if (footerRect.top <= windowHeight + 100) {
        navbar.style.opacity = '0';
        navbar.style.pointerEvents = 'none';
    } else {
        navbar.style.opacity = '1';
        navbar.style.pointerEvents = 'auto';
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleNavbarVisibility);

// Initial check
handleNavbarVisibility();

// Scroll Animation Handler
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2; // Trigger point

        if (elementPosition < screenPosition) {
            element.classList.add('active');
        }
    });
};

// Initial check and scroll listener
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);
