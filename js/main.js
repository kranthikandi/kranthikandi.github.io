/*
 * Modern Portfolio JavaScript
 * Interactive features and animations
 */

// ===================================
// DOM Elements
// ===================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const backToTopBtn = document.getElementById('backToTop');

// ===================================
// Typed Text Effect
// ===================================
const typedTextElement = document.querySelector('.typed-text');
const phrases = [
    'AI Engineer',
    'Full Stack Developer',
    'ML Enthusiast',
    'Problem Solver',
    'Photographer'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 200;

function typeText() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 100;
    } else {
        typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 200;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at end before deleting
        typingDelay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingDelay = 500;
    }

    setTimeout(typeText, typingDelay);
}

// Start typing effect when page loads
if (typedTextElement) {
    setTimeout(typeText, 1000);
}

// ===================================
// Navbar Scroll Effect
// ===================================
function handleScroll() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();
}

window.addEventListener('scroll', handleScroll);

// ===================================
// Active Nav Link Based on Scroll
// ===================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

// ===================================
// Smooth Scrolling
// ===================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// ===================================
// Mobile Menu Toggle
// ===================================
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
}

// ===================================
// Back to Top Button
// ===================================
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// Particle Animation
// ===================================
class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screen
        if (this.x > this.canvas.width) this.x = 0;
        if (this.x < 0) this.x = this.canvas.width;
        if (this.y > this.canvas.height) this.y = 0;
        if (this.y < 0) this.y = this.canvas.height;
    }

    draw(ctx) {
        ctx.fillStyle = 'rgba(0, 217, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    particlesContainer.appendChild(canvas);

    let particles = [];
    const particleCount = 50;

    function resize() {
        canvas.width = particlesContainer.offsetWidth;
        canvas.height = particlesContainer.offsetHeight;
    }

    function init() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(canvas));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw(ctx);
        });

        // Draw connections
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.strokeStyle = `rgba(0, 217, 255, ${0.2 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animate);
    }

    resize();
    init();
    animate();

    window.addEventListener('resize', () => {
        resize();
        init();
    });
}

// ===================================
// Scroll Reveal Animation
// ===================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.project-card, .blog-card, .learning-card, .contact-info-card');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for reveal elements
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.project-card, .blog-card, .learning-card, .contact-info-card');
    reveals.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
});

window.addEventListener('scroll', revealOnScroll);

// ===================================
// Contact Form Validation & Submission
// ===================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    // Form validation functions
    function validateName(name) {
        return name.trim().length >= 2;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validateSubject(subject) {
        return subject.trim().length >= 3;
    }

    function validateMessage(message) {
        return message.trim().length >= 10;
    }

    function showError(fieldId, message) {
        const errorElement = document.getElementById(fieldId + 'Error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('active');
        }
    }

    function clearError(fieldId) {
        const errorElement = document.getElementById(fieldId + 'Error');
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.classList.remove('active');
        }
    }

    // Real-time validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    if (nameInput) {
        nameInput.addEventListener('blur', () => {
            if (!validateName(nameInput.value)) {
                showError('name', 'Name must be at least 2 characters');
            } else {
                clearError('name');
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            if (!validateEmail(emailInput.value)) {
                showError('email', 'Please enter a valid email address');
            } else {
                clearError('email');
            }
        });
    }

    if (subjectInput) {
        subjectInput.addEventListener('blur', () => {
            if (!validateSubject(subjectInput.value)) {
                showError('subject', 'Subject must be at least 3 characters');
            } else {
                clearError('subject');
            }
        });
    }

    if (messageInput) {
        messageInput.addEventListener('blur', () => {
            if (!validateMessage(messageInput.value)) {
                showError('message', 'Message must be at least 10 characters');
            } else {
                clearError('message');
            }
        });
    }

    // Form submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Clear previous errors
        clearError('name');
        clearError('email');
        clearError('subject');
        clearError('message');

        // Validate all fields
        let isValid = true;

        if (!validateName(nameInput.value)) {
            showError('name', 'Name must be at least 2 characters');
            isValid = false;
        }

        if (!validateEmail(emailInput.value)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }

        if (!validateSubject(subjectInput.value)) {
            showError('subject', 'Subject must be at least 3 characters');
            isValid = false;
        }

        if (!validateMessage(messageInput.value)) {
            showError('message', 'Message must be at least 10 characters');
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const submitText = document.getElementById('submitText');
        const submitLoader = document.getElementById('submitLoader');
        const formStatus = document.getElementById('formStatus');

        submitBtn.disabled = true;
        submitText.style.display = 'none';
        submitLoader.style.display = 'inline-flex';
        formStatus.style.display = 'none';
        formStatus.classList.remove('success', 'error');

        try {
            // Submit form using Formspree
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                formStatus.textContent = 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!';
                formStatus.classList.add('success');
                formStatus.style.display = 'block';
                contactForm.reset();
            } else {
                // Error
                formStatus.textContent = 'Oops! There was a problem sending your message. Please try again or email me directly.';
                formStatus.classList.add('error');
                formStatus.style.display = 'block';
            }
        } catch (error) {
            // Network error
            formStatus.textContent = 'Network error. Please check your connection and try again.';
            formStatus.classList.add('error');
            formStatus.style.display = 'block';
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            submitText.style.display = 'inline-flex';
            submitLoader.style.display = 'none';
        }
    });
}

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.highlight-item, .skill-category, .about-highlights');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// ===================================
// Initialize Everything
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles
    initParticles();

    // Initial scroll check
    handleScroll();
    revealOnScroll();

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    console.log('Portfolio loaded successfully! 🚀');
});

// ===================================
// Scroll Progress Indicator (Optional)
// ===================================
function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // You can add a progress bar element in HTML and update it here
    // progressBar.style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// ===================================
// Performance Optimization
// ===================================
// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(handleScroll, 10));
window.addEventListener('scroll', debounce(revealOnScroll, 10));
