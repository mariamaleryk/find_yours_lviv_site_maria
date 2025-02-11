const formsData = {
    "add-place": [
        {type: "text", name: "place_name", placeholder: "Назва...", required: true},
        {type: "text", name: "address", placeholder: "Адреса...", required: true},
        {
            type: "radio", name: "district", legend: "Район", options: [
                {value: "Центр міста", label: "Центр міста"},
                {value: "Сихівський", label: "Сихівський"},
                {value: "Шевченківський", label: "Шевченківський"},
                {value: "Франківський", label: "Франківський"},
                {value: "Личаківський", label: "Личаківський"},
                {value: "Залізничний", label: "Залізничний"}
            ]
        },
        {
            type: "radio", name: "pet_friendly", legend: "Пет-френдлі?", options: [
                {value: "true", label: "Так"},
                {value: "false", label: "Ні"}
            ]
        },
        {
            type: "checkbox", name: "cuisine_ids", legend: "Кухня", options: [
                {value: "1", label: "Українська"},
                {value: "2", label: "Європейська"},
                {value: "3", label: "Азійська"},
                {value: "4", label: "Американська"},
                {value: "5", label: "Грузинська"},
                {value: "6", label: "Італійська"}
                //7-th id? add if not selected or add entering it?
                //{value: "7", label: "Null"}
            ]
        },
        {
            type: "radio", name: "type_id", legend: "Тип закладу", options: [
                {value: "1", label: "Ресторан"},
                {value: "2", label: "Кав’ярня"},
                {value: "3", label: "Стейк-хаус"},
                {value: "4", label: "Фаст-фуд"},
                {value: "5", label: "Бар"},
                {value: "6", label: "Піцерія"}
            ]
        },
        {
            type: "radio", name: "budget", legend: "Бюджет", options: [
                {value: "Мінімальний", label: "Мінімальний"},
                {value: "Середній", label: "Середній"},
                {value: "Преміум", label: "Преміум"}
            ]
        },
        {
            type: "checkbox", name: "purpose_ids", legend: "Мета візиту", options: [
                {value: "1", label: "Банкет"},
                {value: "3", label: "Побачення"},
                {value: "5", label: "Зустріч з друзями"},
                {value: "4", label: "Ситно поїсти"},
                {value: "2", label: "Сімейний відпочинок"}
            ]
        },
        {type: "textarea", name: "description", placeholder: "Опис...", required: true},
        {type: "tel", name: "phone", placeholder: "Номери телефону...", required: true},
        {type: "url", name: "website_link", placeholder: "Сайт...", required: true},
        {type: "url", name: "map_link", placeholder: "Посилання на Google Maps...", required: true},
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
                {type: "working-hours", name: "work_time"}
            ]
        },

        {
            type: "fieldset",
            legend: "Фото",
            fields: [
                {type: "text", name: "photos", placeholder: "Вставити наступне фото..."}
            ]
        },
        {id: "submit", type: "submit", value: "Додати заклад"}
    ],
    "add-location": [
        {type: "text", name: "place_name", placeholder: "Назва...", required: true},
        {type: "text", name: "address", placeholder: "Адреса...", required: true},
        {
            type: "radio", name: "district", legend: "Район", options: [
                {value: "Центр міста", label: "Центр міста"},
                {value: "Сихівський", label: "Сихівський"},
                {value: "Шевченківський", label: "Шевченківський"},
                {value: "Франківський", label: "Франківський"},
                {value: "Личаківський", label: "Личаківський"},
                {value: "Залізничний", label: "Залізничний"}
            ]
        },
        {
            type: "radio", name: "type_id", legend: "Тип локації", options: [
                {value: "7", label: "Парк"},
                {value: "12", label: "Церква/Собор"},
                {value: "8", label: "Театр"},
                {value: "13", label: "Музей"},
                {value: "9", label: "Галерея"},
                {value: "11", label: "Кінотеатр"},
                {value: "14", label: "Інше"},
                {value: "10", label: "Пам'ятка архітектури"}
            ]
        },
        {
            type: "checkbox", name: "purpose_ids", legend: "Тип відпочинку", options: [
                {value: "6", label: "Активний"},
                {value: "7", label: "Пасивний"},
                {value: "9", label: "Розважальний"},
                {value: "8", label: "Культурний"},
                {value: "2", label: "Сімейний"}
            ]
        },
        {type: "textarea", name: "description", placeholder: "Опис...", required: true},
        {type: "tel", name: "phone", placeholder: "Номери телефону...", required: true},
        {type: "url", name: "website_link", placeholder: "Сайт...", required: true},
        {type: "url", name: "map_link", placeholder: "Посилання на Google Maps...", required: true},
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
                {type: "working-hours", name: "work_time"}
            ]
        },
        {
            type: "fieldset",
            legend: "Фото",
            fields: [
                {type: "text", name: "photos", placeholder: "Вставити наступне фото..."}
            ]
        },
        {id: "submit", type: "submit", value: "Додати локацію"}
    ],
    "edit-place": [
        {type: "text", name: "place_name", placeholder: "Назва...", required: true},
        {type: "text", name: "address", placeholder: "Адреса...", required: true},
        {
            type: "radio", name: "district", legend: "Район", options: [
                {value: "Центр міста", label: "Центр міста"},
                {value: "Сихівський", label: "Сихівський"},
                {value: "Шевченківський", label: "Шевченківський"},
                {value: "Франківський", label: "Франківський"},
                {value: "Личаківський", label: "Личаківський"},
                {value: "Залізничний", label: "Залізничний"}
            ]
        },
        {
            type: "radio", name: "pet_friendly", legend: "Пет-френдлі?", options: [
                {value: "true", label: "Так"},
                {value: "false", label: "Ні"}
            ]
        },
        {
            type: "checkbox", name: "cuisine_ids", legend: "Кухня", options: [
                {value: "1", label: "Українська"},
                {value: "2", label: "Європейська"},
                {value: "3", label: "Азійська"},
                {value: "4", label: "Американська"},
                {value: "5", label: "Грузинська"},
                {value: "6", label: "Італійська"}
                //7-th id? add if not selected or add entering it?
                //{value: "7", label: "Null"}
            ]
        },
        {
            type: "radio", name: "type_id", legend: "Тип закладу", options: [
                {value: "1", label: "Ресторан"},
                {value: "2", label: "Кав’ярня"},
                {value: "3", label: "Стейк-хаус"},
                {value: "4", label: "Фаст-фуд"},
                {value: "5", label: "Бар"},
                {value: "6", label: "Піцерія"}
            ]
        },
        {
            type: "radio", name: "budget", legend: "Бюджет", options: [
                {value: "Мінімальний", label: "Мінімальний"},
                {value: "Середній", label: "Середній"},
                {value: "Преміум", label: "Преміум"}
            ]
        },
        {
            type: "checkbox", name: "purpose_ids", legend: "Мета візиту", options: [
                {value: "1", label: "Банкет"},
                {value: "3", label: "Побачення"},
                {value: "5", label: "Зустріч з друзями"},
                {value: "4", label: "Ситно поїсти"},
                {value: "2", label: "Сімейний відпочинок"}
            ]
        },
        {type: "textarea", name: "description", placeholder: "Опис...", required: true},
        {type: "tel", name: "phone", placeholder: "Номери телефону...", required: true},
        {type: "url", name: "website_link", placeholder: "Сайт...", required: true},
        {type: "url", name: "map_link", placeholder: "Посилання на Google Maps...", required: true},
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
                {type: "working-hours", name: "work_time"}
            ]
        },

        {
            type: "fieldset",
            legend: "Фото",
            fields: [
                {type: "text", name: "photos", placeholder: "Вставити наступне фото..."}
            ]
        },
        {id: "submit", type: "submit", value: "Редагувати заклад"}
    ],
    "edit-location": [
        {type: "text", name: "place_name", placeholder: "Назва...", required: true},
        {type: "text", name: "address", placeholder: "Адреса...", required: true},
        {
            type: "radio", name: "district", legend: "Район", options: [
                {value: "Центр міста", label: "Центр міста"},
                {value: "Сихівський", label: "Сихівський"},
                {value: "Шевченківський", label: "Шевченківський"},
                {value: "Франківський", label: "Франківський"},
                {value: "Личаківський", label: "Личаківський"},
                {value: "Залізничний", label: "Залізничний"}
            ]
        },
        {
            type: "radio", name: "type_id", legend: "Тип локації", options: [
                {value: "7", label: "Парк"},
                {value: "12", label: "Церква/Собор"},
                {value: "8", label: "Театр"},
                {value: "13", label: "Музей"},
                {value: "9", label: "Галерея"},
                {value: "11", label: "Кінотеатр"},
                {value: "14", label: "Інше"},
                {value: "10", label: "Пам'ятка архітектури"}
            ]
        },
        {
            type: "checkbox", name: "purpose_ids", legend: "Тип відпочинку", options: [
                {value: "6", label: "Активний"},
                {value: "7", label: "Пасивний"},
                {value: "9", label: "Розважальний"},
                {value: "8", label: "Культурний"},
                {value: "2", label: "Сімейний"}
            ]
        },
        {type: "textarea", name: "description", placeholder: "Опис...", required: true},
        {type: "tel", name: "phone", placeholder: "Номери телефону...", required: true},
        {type: "url", name: "website_link", placeholder: "Сайт...", required: true},
        {type: "url", name: "map_link", placeholder: "Посилання на Google Maps...", required: true},
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
                {type: "working-hours", name: "work_time"}
            ]
        },
        {
            type: "fieldset",
            legend: "Фото",
            fields: [
                {type: "text", name: "photos", placeholder: "Вставити наступне фото..."}
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
    formContainer.innerHTML = ""; // Clear form

    fields.forEach(field => {
        if ((field.type === "text" || field.type === "number" || field.type === "textarea" || field.type === "tel" || field.type === "url") && field.name !== "photos") {
            const input = document.createElement(field.type === "textarea" ? "textarea" : "input");
            input.type = field.type;
            input.name = field.name;
            input.placeholder = field.placeholder;
            if (field.required) input.required = true;
            formContainer.appendChild(input);
        } else if (field.type === "radio" || field.type === "checkbox") {
            const fieldset = document.createElement("fieldset");
            const legend = document.createElement("legend");
            legend.textContent = field.legend;
            fieldset.appendChild(legend);

            field.options.forEach(option => {
                const input = document.createElement("input");
                input.type = field.type;
                input.name = field.name;
                input.value = option.value;
                input.id = `${field.name}-${option.value.replace(/\s+/g, '-').toLowerCase()}`;

                const label = document.createElement("label");
                label.setAttribute("for", input.id);
                label.textContent = option.label;

                fieldset.appendChild(input);
                fieldset.appendChild(label);
            });

            formContainer.appendChild(fieldset);
        } else if (field.type === "fieldset") {
            const fieldset = document.createElement("fieldset");
            const legend = document.createElement("legend");
            legend.textContent = field.legend;
            fieldset.appendChild(legend);

            field.fields.forEach(subField => {
                if ((subField.type === "number" || subField.type === "text")&& subField.name !== "photos") {
                    const input = document.createElement("input");
                    input.type = subField.type;
                    input.name = subField.name;
                    input.placeholder = subField.placeholder;
                    if (subField.required) input.required = true;
                    fieldset.appendChild(input);
                } else if (subField.type === "working-hours") {
                    fieldset.appendChild(generateWorkingHours()); // Функція для розкладу
                } else if (subField.name === "photos") {
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

// function generatePhotoUpload() {
//     const container = document.createElement("div"); // Основний контейнер
//     container.classList.add("photo-upload");
//
//     const gallery = document.createElement("div");
//     gallery.classList.add("photo-gallery");
//
//     const input = document.createElement("input");
//     input.type = "text";
//     input.placeholder = "Вставити наступне фото...";
//
//     const button = document.createElement("button");
//     button.id = "add-photo";
//     button.textContent = "Додати фото";
//
//     button.addEventListener("click", () => {
//         const photoUrl = input.value.trim();
//         if (photoUrl) {
//             const img = document.createElement("img");
//             img.src = photoUrl;
//             img.alt = "Зображення";
//             img.classList.add("photo-thumbnail");
//             gallery.appendChild(img);
//             input.value = "";
//         }
//     });
//
//     container.appendChild(gallery);
//     container.appendChild(input);
//     container.appendChild(button);
//
//     return container;
// }
function generatePhotoUpload() {
    const container = document.createElement("div");
    container.classList.add("photo-upload");

    const gallery = document.createElement("div");
    gallery.classList.add("photo-gallery");
    gallery.id = "photo-gallery";

    // Обгортка для інпуту та кнопки
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("photo-input");

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Вставити наступне фото...";
    input.id = "photo-url";

    const button = document.createElement("button");
    button.type = "button";
    button.id = "add-photo";
    button.textContent = "Додати фото";

    inputContainer.appendChild(input);
    inputContainer.appendChild(button);

    container.appendChild(gallery);
    container.appendChild(inputContainer); // Додаємо обгорнуті інпут і кнопку

    let photoArray = [];

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

        photoArray.push(url);
        updatePhotoStorage();
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

    return container;
}

// function generatePhotoUpload() {
//     const container = document.createElement("div");
//     container.classList.add("photo-upload");
//
//     const gallery = document.createElement("div");
//     gallery.classList.add("photo-gallery");
//     //gallery.id = "photo-gallery"; // ID для доступу
//
//     const input = document.createElement("input");
//     input.type = "text";
//     input.placeholder = "Вставити наступне фото...";
//     input.id = "photo-url"; // ID для доступу
//
//     const button = document.createElement("button");
//     button.type = "button";
//     button.id = "add-photo";
//     button.textContent = "Додати фото";
//
//     container.appendChild(gallery);
//     container.appendChild(input);
//     container.appendChild(button);
//
//     let photoArray = []; // Масив для унікальних фото
//
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
//     function updatePhotoStorage() {
//         console.log("Збережені фото:", photoArray.join(",")); // Імітація збереження
//     }
//
//     button.addEventListener("click", function (event) {
//         event.preventDefault();
//         const url = input.value.trim();
//         if (url) {
//             addPhoto(url);
//             input.value = "";
//         }
//     });
//
//     input.addEventListener("keypress", function (event) {
//         if (event.key === "Enter") {
//             event.preventDefault();
//             button.click();
//         }
//     });
//
//     gallery.addEventListener("click", function (event) {
//         if (event.target.closest(".remove")) {
//             const photoDiv = event.target.closest(".photo");
//             const imgSrc = photoDiv.querySelector("img").src;
//
//             photoDiv.remove();
//             photoArray = photoArray.filter(photo => photo !== imgSrc);
//             updatePhotoStorage();
//         }
//     });
//
//     return container;
// }

// document.addEventListener("DOMContentLoaded", function () {
//     function generateWorkingHours() {
//         const days = [
//             { short: "Mn", full: "Пн" },
//             { short: "Tu", full: "Вт" },
//             { short: "We", full: "Ср" },
//             { short: "Th", full: "Чт" },
//             { short: "Fr", full: "Пт" },
//             { short: "St", full: "Сб" },
//             { short: "Sn", full: "Нд" }
//         ];
//
//         const timeOptions = [];
//         for (let h = 0; h < 24; h++) {
//             const hour = String(h).padStart(2, '0');
//             timeOptions.push(`<option value="${hour}:00">${hour}:00</option>`);
//             timeOptions.push(`<option value="${hour}:30">${hour}:30</option>`);
//         }
//
//         const fieldset = document.createElement("fieldset");
//         fieldset.classList.add("custom-field");
//         fieldset.innerHTML = '<legend class="custom-field-title">Години роботи</legend>';
//
//         days.forEach(day => {
//             const dayDiv = document.createElement("div");
//             dayDiv.classList.add("day");
//             dayDiv.dataset.day = day.full;
//
//             const checkbox = document.createElement("input");
//             checkbox.type = "checkbox";
//             checkbox.id = day.short;
//             checkbox.checked = true;
//
//             const label = document.createElement("label");
//             label.htmlFor = day.short;
//             label.textContent = day.full;
//
//             const spanStart = document.createElement("span");
//             spanStart.textContent = "з";
//             const selectStart = document.createElement("select");
//             selectStart.classList.add("time-start");
//             selectStart.innerHTML = timeOptions.join("");
//             selectStart.value = "08:00";
//
//             const spanEnd = document.createElement("span");
//             spanEnd.textContent = "до";
//             const selectEnd = document.createElement("select");
//             selectEnd.classList.add("time-end");
//             selectEnd.innerHTML = timeOptions.join("");
//             selectEnd.value = "20:00";
//
//             dayDiv.append(checkbox, label, spanStart, selectStart, spanEnd, selectEnd);
//             fieldset.appendChild(dayDiv);
//         });
//
//         return fieldset;
//     }
//
//     document.body.appendChild(generateWorkingHours());
// document.addEventListener("DOMContentLoaded", function () {
//     const days = [
//         { short: "Mn", full: "Пн" },
//         { short: "Tu", full: "Вт" },
//         { short: "We", full: "Ср" },
//         { short: "Th", full: "Чт" },
//         { short: "Fr", full: "Пт" },
//         { short: "St", full: "Сб" },
//         { short: "Sn", full: "Нд" }
//     ];
//
//     const timeOptions = [];
//     for (let h = 0; h < 24; h++) {
//         const hour = String(h).padStart(2, '0');
//         timeOptions.push(`<option value="${hour}:00">${hour}:00</option>`);
//         timeOptions.push(`<option value="${hour}:30">${hour}:30</option>`);
//     }
//
//     const container = document.createElement("fieldset");
//     container.classList.add("custom-field");
//     container.innerHTML = '<legend class="custom-field-title">Години роботи</legend>';
//
//     days.forEach(day => {
//         const dayDiv = document.createElement("div");
//         dayDiv.classList.add("day");
//         dayDiv.dataset.day = day.full;
//
//         const checkbox = document.createElement("input");
//         checkbox.type = "checkbox";
//         checkbox.id = day.short;
//         checkbox.checked = true;
//
//         const label = document.createElement("label");
//         label.htmlFor = day.short;
//         label.textContent = day.full;
//
//         const spanStart = document.createElement("span");
//         spanStart.textContent = "з";
//         const selectStart = document.createElement("select");
//         selectStart.classList.add("time-start");
//         selectStart.innerHTML = timeOptions.join("");
//         selectStart.value = "08:00";
//
//         const spanEnd = document.createElement("span");
//         spanEnd.textContent = "до";
//         const selectEnd = document.createElement("select");
//         selectEnd.classList.add("time-end");
//         selectEnd.innerHTML = timeOptions.join("");
//         selectEnd.value = "20:00";
//
//         dayDiv.append(checkbox, label, spanStart, selectStart, spanEnd, selectEnd);
//         container.appendChild(dayDiv);
//     });
//
//     document.body.appendChild(container);
//
//     document.getElementById("saveSchedule").addEventListener("click", function () {
//         const workTime = [];
//         let rangeStart = null;
//         let startTime = "";
//         let endTime = "";
//
//         days.forEach((day, index) => {
//             const checkbox = document.getElementById(day.short);
//             const start = document.querySelector(`[data-day='${day.full}'] .time-start`).value;
//             const end = document.querySelector(`[data-day='${day.full}'] .time-end`).value;
//
//             if (checkbox.checked) {
//                 if (!rangeStart) {
//                     rangeStart = day.short;
//                     startTime = start;
//                     endTime = end;
//                 } else if (startTime === start && endTime === end) {
//                     // Продовжуємо діапазон
//                 } else {
//                     workTime.push(`${rangeStart}-${days[index - 1].short} ${startTime}-${endTime}`);
//                     rangeStart = day.short;
//                     startTime = start;
//                     endTime = end;
//                 }
//             } else if (rangeStart) {
//                 workTime.push(`${rangeStart}-${days[index - 1].short} ${startTime}-${endTime}`);
//                 rangeStart = null;
//             }
//         });
//
//         if (rangeStart) {
//             workTime.push(`${rangeStart}-${days[days.length - 1].short} ${startTime}-${endTime}`);
//         }
//
//         console.log(JSON.stringify({ work_time: workTime }));
//         // Тут можна додати відправку у БД
//     });
// });

function generateWorkingHours() {
    const days = [
        {short: "Mn", full: "Пн"},
        {short: "Tu", full: "Вт"},
        {short: "We", full: "Ср"},
        {short: "Th", full: "Чт"},
        {short: "Fr", full: "Пт"},
        {short: "St", full: "Сб"},
        {short: "Sn", full: "Нд"}
    ];
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

//
// function generatePhotoUpload() {
//     const container = document.createElement("div");
//
//     const gallery = document.createElement("div");
//     gallery.id = "photo-gallery";
//     gallery.classList.add("photo-gallery");
//
//     const uploadDiv = document.createElement("div");
//     uploadDiv.classList.add("photo-upload");
//
//     const input = document.createElement("input");
//     input.type = "text";
//     input.id = "photo-url";
//     input.placeholder = "Вставити наступне фото...";
//
//     const button = document.createElement("button");
//     button.id = "add-photo";
//     button.textContent = "Додати фото";
//
//     button.addEventListener("click", function (event) {
//         event.preventDefault();
//         const url = input.value.trim();
//         if (url) {
//             const img = document.createElement("img");
//             img.src = url;
//             img.alt = "Фото";
//             img.style.width = "100px";
//             img.style.height = "100px";
//             img.style.margin = "5px";
//             gallery.appendChild(img);
//             input.value = "";
//         }
//     });
//
//     uploadDiv.append(input, button);
//     container.append(gallery, uploadDiv);
//
//     return container;
// }


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
