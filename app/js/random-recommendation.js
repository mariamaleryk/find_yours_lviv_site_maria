//button for random (button is fixed in the bottom right corner and above footer)
$(document).ready(function () {
    const button = document.querySelector(".option.random");
    const footer = document.querySelector("footer");

    function updateButtonPosition() {
        const footerRect = footer.getBoundingClientRect();
        const buttonHeight = button.offsetHeight;

        if (footerRect.top < window.innerHeight - buttonHeight) {
            // Якщо футер на екрані, кнопка піднімається вище нього
            button.style.bottom = `${window.innerHeight - footerRect.top + 10}px`;
        } else {
            // Якщо футер поза екраном, кнопка залишається фіксованою
            button.style.bottom = "0";
        }
    }

    window.addEventListener("scroll", updateButtonPosition);
    window.addEventListener("resize", updateButtonPosition);
    updateButtonPosition();
});

//choose random recommendation

$(document).ready(() => {
    const randomButton = document.querySelector(".random"); // Знаходимо кнопку
    const places = document.querySelectorAll(".place"); // Знаходимо всі заклади
    let previousRandomIndex = null; // Змінна для відстеження попереднього вибору

    randomButton.addEventListener("click", () => {
        if (places.length === 0) {
            alert("Немає закладів для вибору!");
            return;
        }

        // Сховати всі заклади
        places.forEach((place) => {
            place.style.display = "none";
        });

        // Вибрати випадковий заклад
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * places.length);
        } while (randomIndex === previousRandomIndex); // Переконатись, що вибір інший

        previousRandomIndex = randomIndex; // Оновити попередній вибір
        const selectedPlace = places[randomIndex];

        // Показати вибраний заклад
        selectedPlace.style.display = "block";
    });
});
