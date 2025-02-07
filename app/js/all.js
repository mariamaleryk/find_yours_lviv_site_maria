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
    // Додатково для підтримки мобільних пристроїв (сенсорні екрани)
    likeIcon.addEventListener('touchend', (event) => {
        // Використовуємо touchend для більш точного зчитування натискання
        event.preventDefault(); // Оскільки touchend може мати деякі різниці в поведінці
        likeIcon.click(); // Імітуємо клік на мобільних пристроях
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
        items: 1,         // Тільки один слайд за раз
        loop: false,      // Вимикаємо loop, щоб не було дублювання слайдів
        margin: 0,
        navText: [$('.left-arrow'), $('.right-arrow')],
        nav: true,
        dots: true,       // Включаємо крапки
        autoplay: false,
        smartSpeed: 1000,
        rewind: true,     // Зациклення (повертається до першого слайду)
        responsive: {
            0: { items: 1, dots: true },
            768: { items: 1, dots: true },
            1200: { items: 1, dots: true }
        }
    });
});
$(document).ready(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,               // Тільки один слайд за раз
        loop: true,             // Зациклюємо
        margin: 0,
        navText: [
            $('.left-arrow'),  // Ліва стрілка
            $('.right-arrow')  // Права стрілка
        ],
        nav: true,              // Включаємо стрілки
        dots: true,             // Включаємо крапки
        autoplay: false,        // Вимкнути авто-прокрутку
        smartSpeed: 1000,       // Швидкість прокрутки
        responsive: {
            0: { items: 1, dots: true },
            768: { items: 1, dots: true },
            1200: { items: 1, dots: true }
        }
    });
});



