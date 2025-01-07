// Отримуємо всі елементи з класом "like-icon"
const likeIcons = document.querySelectorAll('.like-icon');

// Функція для перевірки, чи лайк був натиснутий при останньому завантаженні сторінки
function updateLikeIcons() {
    likeIcons.forEach((likeIcon, index) => {
        // Перевіряємо, чи цей елемент був лайкнутим раніше, використовуючи localStorage
        const isLiked = localStorage.getItem(`liked-${index}`);
        if (isLiked === 'true') {
            likeIcon.classList.add('clicked');
        } else {
            likeIcon.classList.remove('clicked');
        }
    });
}

// Додаємо обробник події для кожного елемента
likeIcons.forEach((likeIcon, index) => {
    likeIcon.addEventListener('click', () => {
        // Перевіряємо, чи є вже клас "clicked"
        if (likeIcon.classList.contains('clicked')) {
            // Якщо є, знімаємо клас (тобто, скасовуємо вподобання)
            likeIcon.classList.remove('clicked');
            // Зберігаємо стан лайка в localStorage
            localStorage.setItem(`liked-${index}`, 'false');
        } else {
            // Якщо немає, додаємо клас (встановлюємо вподобання)
            likeIcon.classList.add('clicked');
            // Зберігаємо стан лайка в localStorage
            localStorage.setItem(`liked-${index}`, 'true');
        }
    });
});

// Оновлюємо статус лайків при завантаженні сторінки
updateLikeIcons();
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        navText: [$('.left-arrow'), $('.right-arrow')],
        nav: true,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0: { items: 1 },
            768: { items: 1 },
            1200: { items: 1 }
        }
    });
});

