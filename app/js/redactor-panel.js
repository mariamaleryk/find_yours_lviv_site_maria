document.addEventListener("DOMContentLoaded", function () {
    const timeOptions = [];
    for (let h = 0; h < 24; h++) {
        const hour = String(h).padStart(2, '0');
        timeOptions.push(`<option value="${hour}:00">${hour}:00</option>`);
        timeOptions.push(`<option value="${hour}:30">${hour}:30</option>`);
    }

    document.querySelectorAll(".time-start, .time-end").forEach(select => {
        if (select) {
            select.innerHTML = timeOptions.join("");

            // Встановлення значення за замовчуванням
            if (select.classList.contains("time-start") && select.querySelector('option[value="08:00"]')) {
                select.value = "08:00";
            } else if (select.classList.contains("time-end") && select.querySelector('option[value="20:00"]')) {
                select.value = "20:00";
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("photo-gallery");
    const input = document.getElementById("photo-url");
    const addButton = document.getElementById("add-photo");

    let photoArray = []; // Масив для збереження посилань на фото

    // Функція для додавання фото
    function addPhoto(url) {
        if (photoArray.includes(url)) {
            alert("Це фото вже додано!");
            return;
        }

        const photoDiv = document.createElement("div");
        photoDiv.classList.add("photo");

        const img = document.createElement("img");
        img.src = url;
        img.alt = "Фото";

        const removeDiv = document.createElement("div");
        removeDiv.classList.add("remove");
        const removeImg = document.createElement("img");
        removeImg.src = "./icons/cross.svg";
        removeImg.alt = "Видалити";

        removeDiv.appendChild(removeImg);
        photoDiv.appendChild(img);
        photoDiv.appendChild(removeDiv);
        gallery.appendChild(photoDiv);

        // Додаємо посилання в масив
        photoArray.push(url);
        updatePhotoStorage();
    }

    // Функція оновлення фото-масиву (імітація збереження в базу)
    function updatePhotoStorage() {
        console.log("Збережені фото:", photoArray.join(",")); // Імітація збереження
    }

    // Обробник натискання кнопки "Додати фото"
    addButton.addEventListener("click", function (event) {
        event.preventDefault(); // Виправлення проблеми скролінгу

        const url = input.value.trim();
        if (url) {
            addPhoto(url);
            input.value = "";
        }
    });

    // Обробка натискання Enter у полі вводу
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Виправлення проблеми скролінгу
            addButton.click();
        }
    });

    // Видалення фото через делегування подій
    gallery.addEventListener("click", function (event) {
        if (event.target.closest(".remove")) {
            const photoDiv = event.target.closest(".photo");
            const imgSrc = photoDiv.querySelector("img").src;

            // Видаляємо з DOM
            photoDiv.remove();

            // Видаляємо з масиву
            photoArray = photoArray.filter(photo => photo !== imgSrc);
            updatePhotoStorage();
        }
    });
});



