// Get the scroller and arrow buttons
const scroller = document.querySelector('.scroller');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Amount to scroll per button click
const scrollAmount = 900; // Adjust for your layout

// Scroll left
leftArrow.addEventListener('click', () => {
    scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

// Scroll right
rightArrow.addEventListener('click', () => {
    scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});