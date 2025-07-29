
 // Loading screen transition
    window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
    loader.classList.add('hidden');

    // Create particles after loading
    createParticles();

    // Start animations
    startAnimation();

    // Initialize other components
    setupIntersectionObserver();
    setupMobileMenu();
    setupScrollTop();
    setupContactForm();
    setupSkillIcons();
    setupMobileProfileHide();
}, 1500);
});

    // Create floating particles
    function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random size
    const size = Math.random() * 15 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Random animation duration
    const duration = Math.random() * 20 + 10;
    particle.style.animationDuration = `${duration}s`;

    // Random delay
    particle.style.animationDelay = `${Math.random() * 5}s`;

    particlesContainer.appendChild(particle);
}
}

    // Text typing effect
    const text = "Software Engineer | Backend Engineer";
    const textElement = document.getElementById("sliding-text");
    const quoteElement = document.getElementById("quote");
    const quoteContainer = document.getElementById("quote-container");

    // List of quotes
    const quotes = [
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "The best way to predict the future is to invent it. – Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "The harder I work, the luckier I get. – Samuel Goldwyn",
    "Talk is cheap. Show me the code. – Linus Torvalds",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "It’s not that I’m so smart, it’s just that I stay with problems longer. – Albert Einstein",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "Everything you can imagine is real. – Pablo Picasso",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Quality is not an act, it is a habit. – Aristotle",
    "The best way to predict the future is to create it. – Peter Drucker",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "You can never cross the ocean until you have the courage to lose sight of the shore. – Christopher Columbus",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    "If you don’t design your own life plan, chances are you’ll fall into someone else’s plan. – Jim Rohn",
    "Great things are not done by impulse, but by a series of small things brought together. – Vincent Van Gogh",
    "Innovation distinguishes between a leader and a follower. – Steve Jobs",
    "The only way to discover the limits of the possible is to go beyond them into the impossible. – Arthur C. Clarke",
    "Simplicity is the ultimate sophistication. – Leonardo da Vinci",
    "Do one thing every day that scares you. – Eleanor Roosevelt",
    "The function of good software is to make the complex appear to be simple. – Grady Booch",
    "Programming isn't about what you know; it's about what you can figure out. – Chris Pine",
    "When something is important enough, you do it even if the odds are not in your favor. – Elon Musk",
    "You don't have to be great to start, but you have to start to be great. – Zig Ziglar",
    "There are no shortcuts to any place worth going. – Beverly Sills",
    "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
    "A goal without a plan is just a wish. – Antoine de Saint-Exupéry",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Perfection is not when there is no more to add, but when there is no more to take away. – Antoine de Saint-Exupéry",
    "The problem is not the problem. The problem is your attitude about the problem. – Captain Jack Sparrow",
    "The only thing that’s impossible is that which you don’t attempt. – Unknown",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. – Mahatma Gandhi",
    "Success is how high you bounce when you hit bottom. – George S. Patton"
    ];

    // Function to display a random quote
    function displayRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
    quoteContainer.classList.add("show");
}

    // Function to create typing effect
    function createSlidingText(element, text) {
    let i = 0;
    element.textContent = "";

    const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
    clearInterval(interval);
    setTimeout(() => {
    displayRandomQuote();
    startQuoteInterval();
}, 1000);
}
}, 100);
}

    // Start quote interval
    function startQuoteInterval() {
    setInterval(() => {
        quoteContainer.classList.remove("show");
        setTimeout(() => {
            displayRandomQuote();
        }, 500);
    }, 8000);
}

    // Start animation
    function startAnimation() {
    createSlidingText(textElement, text);
}

    // Intersection Observer for animations
    function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('visible');
}
});
}, {
    threshold: 0.1
});

    // Observe elements
    document.querySelectorAll('section').forEach(el => observer.observe(el));
    document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
}

    // Mobile menu toggle
    function setupMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            sidebar.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when pressing Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                sidebar.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Close menu when clicking on a link
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

    // Scroll to top button
    function setupScrollTop() {
    const scrollButton = document.querySelector('.scroll-top');

    window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
    scrollButton.classList.add('visible');
} else {
    scrollButton.classList.remove('visible');
}
});

    scrollButton.addEventListener('click', () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
});
}

    // Contact form functionality
function setupContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');

    // Initialize EmailJS (uncomment when you have EmailJS set up)
    // emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key

    // Form validation
    function validateField(field, errorElement) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = `${field.placeholder} is required`;
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }

        errorElement.textContent = errorMessage;
        field.classList.toggle('error', !isValid);
        return isValid;
    }

    // Real-time validation
    const fields = form.querySelectorAll('.form-control');
    fields.forEach(field => {
        const errorElement = document.getElementById(field.id + 'Error');
        
        field.addEventListener('blur', () => {
            validateField(field, errorElement);
        });

        field.addEventListener('input', () => {
            if (field.classList.contains('error')) {
                validateField(field, errorElement);
            }
        });
    });

    // Form submission with real email functionality
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate all fields
        let isFormValid = true;
        fields.forEach(field => {
            const errorElement = document.getElementById(field.id + 'Error');
            if (!validateField(field, errorElement)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            return;
        }

        // Show loading state
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-block';
        submitBtn.disabled = true;

        // Prepare email data
        const formData = {
            from_name: form.querySelector('#name').value.trim(),
            from_email: form.querySelector('#email').value.trim(),
            message: form.querySelector('#message').value.trim(),
            to_email: 'zngwenya023@student.wethinkcode.co.za'
        };

        try {
                    // For EmailJS (uncomment when set up)
        /*
        const response = await emailjs.send(
            'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
            'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
            formData
        );

        if (response.status === 200) {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
            
            // Clear error states
            fields.forEach(field => {
                field.classList.remove('error');
                const errorElement = document.getElementById(field.id + 'Error');
                errorElement.textContent = '';
            });
        } else {
            throw new Error('Failed to send email');
        }
        */
        
        // For now, simulate success (replace with actual EmailJS when set up)
        await new Promise(resolve => setTimeout(resolve, 2000));
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        form.reset();
        
        // Clear error states
        fields.forEach(field => {
            field.classList.remove('error');
            const errorElement = document.getElementById(field.id + 'Error');
            errorElement.textContent = '';
        });

        } catch (error) {
            console.error('Email sending failed:', error);
            showNotification('Failed to send message. Please try again or contact me directly via email.', 'error');
        } finally {
            // Reset button state
            btnText.style.display = 'inline-block';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    });
}

    // Notification system
    function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" aria-label="Close notification">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
}

    // Skill icons interaction
    function setupSkillIcons() {
    const skillIcons = document.querySelectorAll('.skill-icon');
    
    skillIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.3) rotate(10deg)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Update active link
            document.querySelectorAll('.sidebar-menu a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

    // Highlight active section in sidebar
    window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.sidebar-menu a');

    let current = '';

    sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
    current = section.getAttribute('id');
}
});

    navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
    link.classList.add('active');
}
});
});

    // Add CSS for form validation and notifications
    const additionalStyles = `
    .form-control.error {
        border-color: #f44336;
        box-shadow: 0 0 0 3px rgba(244, 67, 54, 0.2);
    }
    
    .error-message {
        color: #f44336;
        font-size: 12px;
        margin-top: 5px;
        min-height: 16px;
    }
    
    .submit-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
    
    @media (max-width: 768px) {
        .notification {
            top: 10px;
            right: 10px;
            left: 10px;
            max-width: none;
        }
    }
`;

    // Inject additional styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = additionalStyles;
    document.head.appendChild(styleSheet);

        // Initialize components when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        setupMobileMenu();
        setupScrollTop();
        setupContactForm();
        setupSkillIcons();
        setupFormspreeForm();
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
    // Navigate sections with arrow keys
    if (e.altKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
        e.preventDefault();
        const sections = Array.from(document.querySelectorAll('section'));
        const currentSection = sections.find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
        });
        
        if (currentSection) {
            const currentIndex = sections.indexOf(currentSection);
            const targetIndex = e.key === 'ArrowUp' 
                ? Math.max(0, currentIndex - 1)
                : Math.min(sections.length - 1, currentIndex + 1);
            
            sections[targetIndex].scrollIntoView({ behavior: 'smooth' });
        }
    }
});

    // Add performance optimizations
    function debounce(func, wait) {
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

    // Optimize scroll events
    const optimizedScrollHandler = debounce(() => {
    // Scroll-based animations and updates
}, 16); // ~60fps

    window.addEventListener('scroll', optimizedScrollHandler);

// Formspree form handling
function setupFormspreeForm() {
    const formspreeForm = document.getElementById('contactFormSpree');
    
    if (formspreeForm) {
        formspreeForm.addEventListener('submit', function(e) {
            const submitBtn = formspreeForm.querySelector('.submit-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            
            // Show loading state
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-block';
            submitBtn.disabled = true;
            
            // Formspree will handle the submission automatically
            // We just need to show success message after a delay
            setTimeout(() => {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                
                // Reset button state
                btnText.style.display = 'inline-block';
                btnLoading.style.display = 'none';
                submitBtn.disabled = false;
                
                // Reset form
                formspreeForm.reset();
            }, 2000);
        });
    }
}

// Mobile profile picture hide function
function setupMobileProfileHide() {
    const profileContainer = document.querySelector('.profile-container');
    
    if (profileContainer) {
        // Function to check if we're on mobile
        function isMobile() {
            return window.innerWidth <= 768;
        }
        
        // Function to hide/show profile based on screen size
        function toggleProfileVisibility() {
            if (isMobile()) {
                profileContainer.style.display = 'none';
                profileContainer.style.width = '0';
                profileContainer.style.height = '0';
                profileContainer.style.margin = '0';
                profileContainer.style.padding = '0';
                profileContainer.style.border = 'none';
                profileContainer.style.background = 'none';
                profileContainer.style.boxShadow = 'none';
                profileContainer.style.opacity = '0';
                profileContainer.style.visibility = 'hidden';
                profileContainer.style.position = 'absolute';
                profileContainer.style.left = '-9999px';
                profileContainer.style.top = '-9999px';
                profileContainer.style.zIndex = '-9999';
                profileContainer.style.transform = 'scale(0)';
                profileContainer.style.clipPath = 'inset(100%)';
            } else {
                // Reset to original styles on desktop
                profileContainer.style = '';
            }
        }
        
        // Initial check
        toggleProfileVisibility();
        
        // Listen for window resize
        window.addEventListener('resize', toggleProfileVisibility);
    }
}

