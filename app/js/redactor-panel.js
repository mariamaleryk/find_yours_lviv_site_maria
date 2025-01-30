// document.addEventListener("DOMContentLoaded", function () {
//     const timeOptions = [];
//     for (let h = 0; h < 24; h++) {
//
//         const time = `${String(h).padStart(2, '0')}:00`;
//         timeOptions.push(`<option value="${time}">${time}</option>`);
//     }
//
//     document.querySelectorAll(".time-start, .time-end").forEach(select => {
//         select.innerHTML = timeOptions.join("");
//         select.value = "17:00"; // Default value
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const timeOptions = [];
    for (let h = 0; h < 24; h++) {
        const hour = String(h).padStart(2, '0');
        timeOptions.push(`<option value="${hour}:00">${hour}:00</option>`);
        timeOptions.push(`<option value="${hour}:30">${hour}:30</option>`);
    }

    document.querySelectorAll(".time-start, .time-end").forEach(select => {
        select.innerHTML = timeOptions.join("");
        select.value = "17:00"; // Встановлюємо значення за замовчуванням
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("photo-gallery");
    const input = document.getElementById("photo-url");
    const addButton = document.getElementById("add-photo");

    addButton.addEventListener("click", function () {
        const url = input.value.trim();
        if (url) {
            addPhoto(url);
            input.value = "";
        }
    });

    function addPhoto(url) {
        const photoDiv = document.createElement("div");
        photoDiv.classList.add("photo");

        const img = document.createElement("img");
        img.src = url;
        photoDiv.appendChild(img);

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove");
        removeBtn.innerHTML = "×";
        removeBtn.addEventListener("click", function () {
            photoDiv.remove();
        });

        photoDiv.appendChild(removeBtn);
        gallery.appendChild(photoDiv);
    }
});


