const formsData = {
    "add-place": [
        {type: "text", name: "name", placeholder: "Назва...", required: true},
        {type: "text", name: "address", placeholder: "Адреса...", required: true},
        {
            type: "radio", name: "district", legend: "Район", options: [
                {value: "center", label: "Центр міста"},
                {value: "sikiv", label: "Сихівський"},
                {value: "shev", label: "Шевченківський"},
                {value: "frank", label: "Франківський"},
                {value: "lichak", label: "Личаківський"},
                {value: "zaliz", label: "Залізничний"}
            ]
        },
        {
            type: "radio", name: "pet", legend: "Пет-френдлі?", options: [
                {value: "yes", label: "Так"},
                {value: "no", label: "Ні"}
            ]
        },
        {
            type: "checkbox", name: "cuisine", legend: "Кухня", options: [
                {value: "ukrainian", label: "Українська"},
                {value: "european", label: "Європейська"},
                {value: "asian", label: "Азійська"},
                {value: "american", label: "Американська"},
                {value: "georgian", label: "Грузинська"},
                {value: "italian", label: "Італійська"}
            ]
        },
        {
            type: "radio", name: "type", legend: "Тип закладу", options: [
                {value: "restaurant", label: "Ресторан"},
                {value: "cafe", label: "Кав’ярня"},
                {value: "steakhouse", label: "Стейк-хаус"},
                {value: "fastfood", label: "Фаст-фуд"},
                {value: "bar", label: "Бар"},
                {value: "pizzeria", label: "Піцерія"}
            ]
        },
        {
            type: "radio", name: "budget", legend: "Бюджет", options: [
                {value: "min", label: "Мінімальний"},
                {value: "mid", label: "Середній"},
                {value: "premium", label: "Преміум"}
            ]
        },
        {
            type: "checkbox", name: "goal", legend: "Мета візиту", options: [
                {value: "banquet", label: "Банкет"},
                {value: "date", label: "Побачення"},
                {value: "friends", label: "Зустріч з друзями"},
                {value: "food", label: "Ситно поїсти"},
                {value: "family", label: "Сімейний відпочинок"}
            ]
        },
        {type: "textarea", name: "description", placeholder: "Опис...", required: true},
        {type: "tel", name: "telephone-numbers", placeholder: "Номери телефону...", required: true},
        {type: "url", name: "website", placeholder: "Сайт...", required: true},
        {type: "url", name: "google-maps", placeholder: "Посилання на Google Maps...", required: true},
        {
            type: "fieldset",
            legend: "Координати",
            fields: [
                {type: "number", name: "longitude", placeholder: "Довгота...", required: true},
                {type: "number", name: "latitude", placeholder: "Широта...", required: true}
            ]
        },

        {
            type: "fieldset",
            legend: "Години роботи",
            fields: [
                {type: "working-hours", name: "working-hours"}
            ]
        },

        {
            type: "fieldset",
            legend: "Фото",
            fields: [
                {type: "photo-upload", name: "photos"}
            ]
        },
        {id: "submit", type: "submit", value: "Додати заклад"}
    ],
    "add-location": [
        {type: "text", name: "name", placeholder: "Назва...", required: true},
        {type: "text", name: "address", placeholder: "Адреса...", required: true},
        {
            type: "radio", name: "district", legend: "Район", options: [
                {value: "center", label: "Центр міста"},
                {value: "sikiv", label: "Сихівський"},
                {value: "shev", label: "Шевченківський"},
                {value: "frank", label: "Франківський"},
                {value: "lichak", label: "Личаківський"},
                {value: "zaliz", label: "Залізничний"}
            ]
        },
        {
            type: "radio", name: "type", legend: "Тип локації", options: [
                {value: "", label: "Парк"},
                {value: "", label: "Церква/Собор"},
                {value: "", label: "Театр"},
                {value: "", label: "Музей"},
                {value: "", label: "Галерея"},
                {value: "", label: "Кінотеатр"},
                {value: "", label: "Інше"},
                {value: "", label: "Пам'ятка архітектури"}
            ]
        },
        {
            type: "checkbox", name: "goal", legend: "Тип відпочинку", options: [
                {value: "", label: "Активний"},
                {value: "", label: "Пасивний"},
                {value: "", label: "Розважальний"},
                {value: "", label: "Культурний"},
                {value: "", label: "Сімейний"}
            ]
        },
        {type: "textarea", name: "description", placeholder: "Опис...", required: true},
        {type: "tel", name: "telephone-numbers", placeholder: "Номери телефону...", required: true},
        {type: "url", name: "website", placeholder: "Сайт...", required: true},
        {type: "url", name: "google-maps", placeholder: "Посилання на Google Maps...", required: true},
        {
            type: "fieldset",
            legend: "Координати",
            fields: [
                {type: "number", name: "longitude", placeholder: "Довгота...", required: true},
                {type: "number", name: "latitude", placeholder: "Широта...", required: true}
            ]
        },
        {
            type: "fieldset",
            legend: "Години роботи",
            fields: [
                {type: "working-hours", name: "working-hours"}
            ]
        },
        {
            type: "fieldset",
            legend: "Фото",
            fields: [
                {type: "photo-upload", name: "photos"}
            ]
        },
        {id: "submit", type: "submit", value: "Додати локацію"}
    ],
    "edit-place": [
        {type: "text", name: "name", placeholder: "Назва...", required: true},
        {type: "text", name: "address", placeholder: "Адреса...", required: true},
        {
            type: "radio", name: "district", legend: "Район", options: [
                {value: "center", label: "Центр міста"},
                {value: "sikiv", label: "Сихівський"},
                {value: "shev", label: "Шевченківський"},
                {value: "frank", label: "Франківський"},
                {value: "lichak", label: "Личаківський"},
                {value: "zaliz", label: "Залізничний"}
            ]
        },
        {
            type: "radio", name: "pet", legend: "Пет-френдлі?", options: [
                {value: "yes", label: "Так"},
                {value: "no", label: "Ні"}
            ]
        },
        {
            type: "checkbox", name: "cuisine", legend: "Кухня", options: [
                {value: "ukrainian", label: "Українська"},
                {value: "european", label: "Європейська"},
                {value: "asian", label: "Азійська"},
                {value: "american", label: "Американська"},
                {value: "georgian", label: "Грузинська"},
                {value: "italian", label: "Італійська"}
            ]
        },
        {
            type: "radio", name: "type", legend: "Тип закладу", options: [
                {value: "restaurant", label: "Ресторан"},
                {value: "cafe", label: "Кав’ярня"},
                {value: "steakhouse", label: "Стейк-хаус"},
                {value: "fastfood", label: "Фаст-фуд"},
                {value: "bar", label: "Бар"},
                {value: "pizzeria", label: "Піцерія"}
            ]
        },
        {
            type: "radio", name: "budget", legend: "Бюджет", options: [
                {value: "min", label: "Мінімальний"},
                {value: "mid", label: "Середній"},
                {value: "premium", label: "Преміум"}
            ]
        },
        {
            type: "checkbox", name: "goal", legend: "Мета візиту", options: [
                {value: "banquet", label: "Банкет"},
                {value: "date", label: "Побачення"},
                {value: "friends", label: "Зустріч з друзями"},
                {value: "food", label: "Ситно поїсти"},
                {value: "family", label: "Сімейний відпочинок"}
            ]
        },
        {type: "textarea", name: "description", placeholder: "Опис...", required: true},
        {type: "tel", name: "telephone-numbers", placeholder: "Номери телефону...", required: true},
        {type: "url", name: "website", placeholder: "Сайт...", required: true},
        {type: "url", name: "google-maps", placeholder: "Посилання на Google Maps...", required: true},
        {
            type: "fieldset",
            legend: "Координати",
            fields: [
                {type: "number", name: "longitude", placeholder: "Довгота...", required: true},
                {type: "number", name: "latitude", placeholder: "Широта...", required: true}
            ]
        },

        {
            type: "fieldset",
            legend: "Години роботи",
            fields: [
                {type: "working-hours", name: "working-hours"}
            ]
        },

        {
            type: "fieldset",
            legend: "Фото",
            fields: [
                {type: "photo-upload", name: "photos"}
            ]
        },
        {id: "submit", type: "submit", value: "Редагувати заклад"}
    ],
    "edit-location": [
        {type: "text", name: "name", placeholder: "Назва...", required: true},
        {type: "text", name: "address", placeholder: "Адреса...", required: true},
        {
            type: "radio", name: "district", legend: "Район", options: [
                {value: "center", label: "Центр міста"},
                {value: "sikiv", label: "Сихівський"},
                {value: "shev", label: "Шевченківський"},
                {value: "frank", label: "Франківський"},
                {value: "lichak", label: "Личаківський"},
                {value: "zaliz", label: "Залізничний"}
            ]
        },
        {
            type: "radio", name: "type", legend: "Тип локації", options: [
                {value: "", label: "Парк"},
                {value: "", label: "Церква/Собор"},
                {value: "", label: "Театр"},
                {value: "", label: "Музей"},
                {value: "", label: "Галерея"},
                {value: "", label: "Кінотеатр"},
                {value: "", label: "Інше"},
                {value: "", label: "Пам'ятка архітектури"}
            ]
        },
        {
            type: "checkbox", name: "goal", legend: "Тип відпочинку", options: [
                {value: "", label: "Активний"},
                {value: "", label: "Пасивний"},
                {value: "", label: "Розважальний"},
                {value: "", label: "Культурний"},
                {value: "", label: "Сімейний"}
            ]
        },
        {type: "textarea", name: "description", placeholder: "Опис...", required: true},
        {type: "tel", name: "telephone-numbers", placeholder: "Номери телефону...", required: true},
        {type: "url", name: "website", placeholder: "Сайт...", required: true},
        {type: "url", name: "google-maps", placeholder: "Посилання на Google Maps...", required: true},
        {
            type: "fieldset",
            legend: "Координати",
            fields: [
                {type: "number", name: "longitude", placeholder: "Довгота...", required: true},
                {type: "number", name: "latitude", placeholder: "Широта...", required: true}
            ]
        },
        {
            type: "fieldset",
            legend: "Години роботи",
            fields: [
                {type: "working-hours", name: "working-hours"}
            ]
        },
        {
            type: "fieldset",
            legend: "Фото",
            fields: [
                {type: "photo-upload", name: "photos"}
            ]
        },
        {id: "submit", type: "submit", value: "Редагувати локацію"}
    ]
};

// Генеруємо початкову форму
const formContainer = document.getElementById("dynamic-form");
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        generateForm(tab.dataset.form);
    });
});
generateForm("add-place");

function generateForm(formKey) {
    const fields = formsData[formKey];
    formContainer.innerHTML = ""; // Очищаємо форму

    fields.forEach(field => {
        if (field.type === "text" || field.type === "number" || field.type === "textarea" || field.type === "tel" || field.type === "url") {
            const input = document.createElement(field.type === "textarea" ? "textarea" : "input");
            input.type = field.type;
            input.name = field.name;
            input.placeholder = field.placeholder;
            input.classList.add("custom-field");
            if (field.required) input.required = true;
            formContainer.appendChild(input);
        } else if (field.type === "radio" || field.type === "checkbox") {
            const fieldset = document.createElement("fieldset");
            fieldset.classList.add("custom-field");
            const legend = document.createElement("legend");
            legend.textContent = field.legend;
            fieldset.appendChild(legend);

            field.options.forEach(option => {
                const label = document.createElement("label");
                label.classList.add("custom-checkbox");
                const input = document.createElement("input");
                input.type = field.type;
                input.name = field.name;
                input.value = option.value;

                label.appendChild(input);
                label.appendChild(document.createTextNode(option.label));
                fieldset.appendChild(label);
            });

            formContainer.appendChild(fieldset);
        } else if (field.type === "fieldset") {
            const fieldset = document.createElement("fieldset");
            fieldset.classList.add("custom-field");
            const legend = document.createElement("legend");
            legend.classList.add("custom-field-title");
            legend.textContent = field.legend;
            fieldset.appendChild(legend);

            field.fields.forEach(subField => {
                if (subField.type === "number" || subField.type === "text") {
                    const input = document.createElement("input");
                    input.type = subField.type;
                    input.name = subField.name;
                    input.placeholder = subField.placeholder;
                    input.classList.add("custom-input");
                    if (subField.required) input.required = true;
                    fieldset.appendChild(input);
                } else if (subField.type === "working-hours") {
                    fieldset.appendChild(generateWorkingHours()); // Функція для розкладу
                } else if (subField.type === "photo-upload") {
                    fieldset.appendChild(generatePhotoUpload()); // Функція для фото
                }
            });

            formContainer.appendChild(fieldset);
        } else if (field.type === "submit") {
            const button = document.createElement("button");
            button.type = "submit";
            button.id = field.id;
            button.textContent = field.value;
            formContainer.appendChild(button);
        }
    });
}

function generateWorkingHours() {
    const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
    const container = document.createElement("div");

    days.forEach((day, index) => {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.dataset.day = day;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `day-${index}`;
        checkbox.checked = true;

        const label = document.createElement("label");
        label.htmlFor = `day-${index}`;
        label.textContent = day;

        const spanStart = document.createElement("span");
        spanStart.textContent = "з";
        const selectStart = generateTimeSelect();

        const spanEnd = document.createElement("span");
        spanEnd.textContent = "до";
        const selectEnd = generateTimeSelect();

        dayDiv.append(checkbox, label, spanStart, selectStart, spanEnd, selectEnd);
        container.appendChild(dayDiv);
    });

    return container;
}

function generateTimeSelect() {
    const select = document.createElement("select");

    for (let hour = 0; hour < 24; hour++) {
        for (let min of ["00", "30"]) {
            const option = document.createElement("option");
            option.value = `${hour}:${min}`;
            option.textContent = `${hour}:${min}`;
            select.appendChild(option);
        }
    }

    return select;
}

function generatePhotoUpload() {
    const container = document.createElement("div");

    const gallery = document.createElement("div");
    gallery.id = "photo-gallery";
    gallery.classList.add("photo-gallery");

    const uploadDiv = document.createElement("div");
    uploadDiv.classList.add("photo-upload");

    const input = document.createElement("input");
    input.type = "text";
    input.id = "photo-url";
    input.placeholder = "Вставити наступне фото...";

    const button = document.createElement("button");
    button.id = "add-photo";
    button.textContent = "Додати фото";

    button.addEventListener("click", function (event) {
        event.preventDefault();
        const url = input.value.trim();
        if (url) {
            const img = document.createElement("img");
            img.src = url;
            img.alt = "Фото";
            img.style.width = "100px";
            img.style.height = "100px";
            img.style.margin = "5px";
            gallery.appendChild(img);
            input.value = "";
        }
    });

    uploadDiv.append(input, button);
    container.append(gallery, uploadDiv);

    return container;
}


// document.addEventListener("DOMContentLoaded", function () {
//     const timeOptions = [];
//     for (let h = 0; h < 24; h++) {
//         const hour = String(h).padStart(2, '0');
//         timeOptions.push(`<option value="${hour}:00">${hour}:00</option>`);
//         timeOptions.push(`<option value="${hour}:30">${hour}:30</option>`);
//     }
//
//     document.querySelectorAll(".time-start, .time-end").forEach(select => {
//         if (select) {
//             select.innerHTML = timeOptions.join("");
//
//             // Встановлення значення за замовчуванням
//             if (select.classList.contains("time-start") && select.querySelector('option[value="08:00"]')) {
//                 select.value = "08:00";
//             } else if (select.classList.contains("time-end") && select.querySelector('option[value="20:00"]')) {
//                 select.value = "20:00";
//             }
//         }
//     });
// });
//
// document.addEventListener("DOMContentLoaded", function () {
//     const gallery = document.getElementById("photo-gallery");
//     const input = document.getElementById("photo-url");
//     const addButton = document.getElementById("add-photo");
//
//     let photoArray = []; // Масив для збереження посилань на фото
//
//     // Функція для додавання фото
//     function addPhoto(url) {
//         if (photoArray.includes(url)) {
//             alert("Це фото вже додано!");
//             return;
//         }
//
//         const photoDiv = document.createElement("div");
//         photoDiv.classList.add("photo");
//
//         const img = document.createElement("img");
//         img.src = url;
//         img.alt = "Фото";
//
//         const removeDiv = document.createElement("div");
//         removeDiv.classList.add("remove");
//         const removeImg = document.createElement("img");
//         removeImg.src = "./icons/cross.svg";
//         removeImg.alt = "Видалити";
//
//         removeDiv.appendChild(removeImg);
//         photoDiv.appendChild(img);
//         photoDiv.appendChild(removeDiv);
//         gallery.appendChild(photoDiv);
//
//         // Додаємо посилання в масив
//         photoArray.push(url);
//         updatePhotoStorage();
//     }
//
//     // Функція оновлення фото-масиву (імітація збереження в базу)
//     function updatePhotoStorage() {
//         console.log("Збережені фото:", photoArray.join(",")); // Імітація збереження
//     }
//
//     // Обробник натискання кнопки "Додати фото"
//     addButton.addEventListener("click", function (event) {
//         event.preventDefault(); // Виправлення проблеми скролінгу
//
//         const url = input.value.trim();
//         if (url) {
//             addPhoto(url);
//             input.value = "";
//         }
//     });
//
//     // Обробка натискання Enter у полі вводу
//     input.addEventListener("keypress", function (event) {
//         if (event.key === "Enter") {
//             event.preventDefault(); // Виправлення проблеми скролінгу
//             addButton.click();
//         }
//     });
//
//     // Видалення фото через делегування подій
//     gallery.addEventListener("click", function (event) {
//         if (event.target.closest(".remove")) {
//             const photoDiv = event.target.closest(".photo");
//             const imgSrc = photoDiv.querySelector("img").src;
//
//             // Видаляємо з DOM
//             photoDiv.remove();
//
//             // Видаляємо з масиву
//             photoArray = photoArray.filter(photo => photo !== imgSrc);
//             updatePhotoStorage();
//         }
//     });
// });
