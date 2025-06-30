
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
    sidebar.classList.toggle('active');
});
}

    // Close menu when clicking on a link
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
    link.addEventListener('click', () => {
    sidebar.classList.remove('active');
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

    // Initialize components when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupScrollTop();
});

