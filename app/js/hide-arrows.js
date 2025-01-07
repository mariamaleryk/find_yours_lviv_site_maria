function updateScrollerClasses(scrollerSelector) {
    const scroller = document.querySelector(scrollerSelector);
    const images = scroller.querySelectorAll('img');
    const arrows = document.querySelector('.arrows');

    if (images.length <= 3) {
        scroller.classList.add('few-images');
        arrows.classList.add('hidden');
    }

    if (images.length === 0) {
        scroller.classList.add('hidden');
    }

    if (images.length === 3) {
        scroller.classList.add('three');
    }

    if (images.length === 2) {
        scroller.classList.add('two');
    }

    if (images.length === 1) {
        scroller.classList.add('one');
    }
}