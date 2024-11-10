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
