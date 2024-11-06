const text = "Software Engineer | Full Stack Engineer | Backend Developer";
const textElement = document.getElementById("sliding-text");

function createSlidingText(element, text) {
    let i = 0;
    element.textContent = ""; 
    const interval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i === text.length) {
            clearInterval(interval);
            setTimeout(() => {
                fadeOutText(element);
            }, 2000); 
        }
    }, 100); 
}

function fadeOutText(element) {
    let opacity = 1; // Set initial opacity to fully visible
    const fadeInterval = setInterval(() => {
        if (opacity <= 0) {
            clearInterval(fadeInterval);
            element.style.opacity = 1; // Reset opacity
            setTimeout(() => createSlidingText(element, text), 2000); // Restart animation after delay
        } else {
            opacity -= 0.05; // Decrease opacity gradually
            element.style.opacity = opacity;
        }
    }, 50); 
}

// Call the function to start the animation
createSlidingText(textElement, text);
