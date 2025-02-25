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

document.addEventListener("DOMContentLoaded", () => {
    const scroller = document.querySelector(".scroller");
    const container = document.querySelector(".container-fluid");

    if (scroller && container) {
        const updateBackgroundPosition = () => {
            const scrollerRect = scroller.getBoundingClientRect();
            const scrollerCenter = scrollerRect.top + window.scrollY - (window.innerWidth * 0.25);
            container.style.backgroundPosition = `center ${scrollerCenter}px`;
        };

        updateBackgroundPosition();
        window.addEventListener("resize", updateBackgroundPosition);
        window.addEventListener("scroll", updateBackgroundPosition);
    }
});
