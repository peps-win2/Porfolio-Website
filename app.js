
console.log("Hello, this is my website!");

const words = document.querySelectorAll('.flip-word');
let currentWordIndex = 0;

function flipWords() {
    // Mark current word as inactive
    if (currentWordIndex > 0) {
        words[currentWordIndex - 1].classList.remove('is-active');
        words[currentWordIndex - 1].classList.add('is-inactive');
    } else {
        words[words.length - 1].classList.remove('is-active');
        words[words.length - 1].classList.add('is-inactive');
    }

    // Mark next word as active
    words[currentWordIndex].classList.remove('is-inactive');
    words[currentWordIndex].classList.add('is-active');

    // Move to the next word in the sequence
    currentWordIndex = (currentWordIndex + 1) % words.length;
}

// Initial activation for the first word
words[currentWordIndex].classList.add('is-active');
currentWordIndex = (currentWordIndex + 1) % words.length;

// Set the interval for the animation (e.g., every 3 seconds)
setInterval(flipWords, 3000);
