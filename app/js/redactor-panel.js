document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const forms = document.querySelectorAll(".form-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Видаляємо клас active у всіх вкладках
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            // Отримуємо значення data-form, щоб знайти відповідну форму
            const formId = this.getAttribute("data-form");

            // Ховаємо всі форми та показуємо потрібну
            forms.forEach(form => {
                form.style.display = form.id === formId ? "block" : "none";
            });
        });
    });
});


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

document.querySelector("form").addEventListener("submit", function (event) {
    let latitude = parseFloat(document.querySelector('input[name="latitude"]').value);
    let longitude = parseFloat(document.querySelector('input[name="longitude"]').value);

    if (isNaN(latitude) || latitude < -90 || latitude > 90) {
        alert("Введіть коректну широту (-90 до 90).");
        event.preventDefault();
    }

    if (isNaN(longitude) || longitude < -180 || longitude > 180) {
        alert("Введіть коректну довготу (-180 до 180).");
        event.preventDefault();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".photo-upload").forEach(photoUploadContainer => {

        const gallery = photoUploadContainer.querySelector(".photo-gallery");
        const input = photoUploadContainer.querySelector(".photo-input input");
        const button = photoUploadContainer.querySelector(".photo-input button");

        let photoArray = [];

        function isValidUrl(url) {
            const urlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|svg))$/i;
            return urlPattern.test(url);
        }

        function addPhoto(url) {
            if (!isValidUrl(url)) {
                alert("Будь ласка, введіть коректне посилання на зображення!");
                return;
            }
            if (photoArray.includes(url)) {
                alert("Це фото вже додано!");
                return;
            }

            const photoDiv = document.createElement("div");
            photoDiv.classList.add("photo");
            photoDiv.setAttribute("draggable", "true");

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

            photoArray.push(url);
            updatePhotoStorage();

            addDragAndDrop(photoDiv);
        }

        function updatePhotoStorage() {
            console.log("Збережені фото:", photoArray.join(","));
        }

        button.addEventListener("click", function (event) {
            event.preventDefault();
            const url = input.value.trim();
            if (url) {
                addPhoto(url);
                input.value = "";
            }
        });

        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                button.click();
            }
        });

        gallery.addEventListener("click", function (event) {
            if (event.target.closest(".remove")) {
                const photoDiv = event.target.closest(".photo");
                const imgSrc = photoDiv.querySelector("img").src;

                photoDiv.remove();
                photoArray = photoArray.filter(photo => photo !== imgSrc);
                updatePhotoStorage();
            }
        });

        let draggedItem = null;

        function addDragAndDrop(photoDiv) {
            photoDiv.addEventListener("dragstart", function (event) {
                draggedItem = photoDiv;
                event.dataTransfer.effectAllowed = "move";
                setTimeout(() => {
                    photoDiv.classList.add("dragging");
                }, 0);
            });

            photoDiv.addEventListener("dragend", function () {
                photoDiv.classList.remove("dragging");
                draggedItem = null;
                updateArrayOrder();
            });

            gallery.addEventListener("dragover", function (event) {
                event.preventDefault();
                event.dataTransfer.dropEffect = "move";

                const draggingOver = event.target.closest(".photo");
                if (draggingOver && draggingOver !== draggedItem) {
                    const bounding = draggingOver.getBoundingClientRect();
                    const offset = event.clientY - bounding.top;
                    if (offset > bounding.height / 2) {
                        gallery.insertBefore(draggedItem, draggingOver.nextSibling);
                    } else {
                        gallery.insertBefore(draggedItem, draggingOver);
                    }
                }
            });
        }

        function updateArrayOrder() {
            photoArray = Array.from(gallery.children).map(photoDiv => photoDiv.querySelector("img").src);
            updatePhotoStorage();
        }
    });
});
//phone numbers
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".phone-numbers").forEach(phoneNumbersContainer => {
        const phoneList = phoneNumbersContainer.querySelector(".phone-list");
        const input = phoneNumbersContainer.querySelector(".phone-input input");
        const addButton = phoneNumbersContainer.querySelector(".phone-input button");

        let phoneArray = [];

        function addPhone(number) {
            if (phoneArray.includes(number)) {
                alert("Цей номер вже додано!");
                return;
            }

            const listItem = document.createElement("li");
            listItem.classList.add("phone-item");

            const span = document.createElement("span");
            span.textContent = number;

            const removeButton = document.createElement("button");
            //removeButton.type = "button";
            removeButton.id = "remove";
            removeButton.textContent = "Видалити";

            removeButton.addEventListener("click", () => {
                listItem.remove();
                phoneArray = phoneArray.filter(phone => phone !== number);
                updatePhoneStorage();
            });

            listItem.appendChild(span);
            listItem.appendChild(removeButton);
            phoneList.appendChild(listItem);

            phoneArray.push(number);
            updatePhoneStorage();
        }

        function updatePhoneStorage() {
            console.log("Збережені номери:", phoneArray.join(", "));
        }

        addButton.addEventListener("click", (event) => {
            event.preventDefault();
            let number = input.value.trim();

            if (!number.startsWith("+38")) {
                number = "+38" + number;
            }

            const phonePattern = /^\+380\d{9}$/;
            if (number && phonePattern.test(number)) {
                addPhone(number);
                input.value = "";
            } else {
                alert("Введіть номер у форматі +380XXXXXXXXX");
            }
        });

        input.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                addButton.click();
            }
        });
    });
});