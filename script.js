const text = "Software Engineer | Full Stack Engineer | Backend Developer";
const textElement = document.getElementById("sliding-text");
const quoteElement = document.getElementById("quote");
const quoteContainer = document.getElementById("quote-container");

// List of small, random quotes
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
    "Talk is cheap. Show me the code. – Linus Torvalds"
];

// Function to display a random quote with smooth transition
function displayRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    // Start fading out the current quote
    fadeOutQuote(() => {
        // Set the new quote content
        quoteElement.textContent = randomQuote;

        // Fade in the new quote after the old one has faded out
        fadeInQuote();
    });
}

// Function to fade out the current quote
function fadeOutQuote(callback) {
    let opacity = 1;
    const fadeInterval = setInterval(() => {
        if (opacity <= 0) {
            clearInterval(fadeInterval);
            // Hide the quote container after fade out
            quoteContainer.style.opacity = 0;
            if (callback) callback();  // Call the callback to proceed with the next step
        } else {
            opacity -= 0.05;
            quoteContainer.style.opacity = opacity;
        }
    }, 50); 
}

function fadeInQuote() {
    let opacity = 0;
    quoteContainer.classList.add("show"); 
    const fadeInterval = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeInterval);
        } else {
            opacity += 0.05;
            quoteContainer.style.opacity = opacity;
        }
    }, 50); 
}

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

function startQuoteInterval() {
    setInterval(() => {
        displayRandomQuote(); 
    }, 5000); 
}

function startAnimation() {
    createSlidingText(textElement, text); 
}

window.onload = function() {
    startAnimation();
};
