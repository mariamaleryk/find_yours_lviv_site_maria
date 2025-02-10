// document.addEventListener("DOMContentLoaded", function() {
//     // Отримуємо елементи
//     var modal = document.getElementById("myModal");
//     var btn = document.getElementById("openModalBtn");
//     var span = document.getElementsByClassName("close")[0];
//     var body = document.body;
//
//     // Відкриваємо модальне вікно при натисканні на кнопку
//     btn.onclick = function() {
//         modal.style.display = "block";
//         body.classList.add("blur");
//     }
//
//     // Закриваємо модальне вікно при натисканні на хрестик
//     span.onclick = function() {
//         modal.style.display = "none";
//         body.classList.remove("blur");
//     }
//
//     // Закриваємо модальне вікно при натисканні за його межами
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//             body.classList.remove("blur");
//         }
//     }
// });