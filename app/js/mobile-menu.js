// Функція для відкриття меню
function openNav() {
    document.getElementById("myNav").style.width = "40%";
}

// Функція для закриття меню
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// Автоматично закривати меню при завантаженні сторінки
window.onload = function() {
    closeNav(); // Закрити меню при завантаженні
};

// Закриття меню при натисканні поза межами меню
document.addEventListener('click', function(event) {
    var menu = document.getElementById('myNav'); // Сама панель меню
    if (menu.style.width === '40%' && !menu.contains(event.target) && !event.target.matches('.closebtn') && !event.target.matches('span')) {
        closeNav(); // Закрити меню
    }
});