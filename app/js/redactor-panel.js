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
        {
            type: "fieldset",
            legend: "Номери телефону",
            fields: [
                {type: "tel", name: "phone"}
            ]
        },
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
        {
            type: "fieldset",
            legend: "Номери телефону",
            fields: [
                {type: "tel", name: "phone"}
            ]
        },
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
        {
            type: "fieldset",
            legend: "Номери телефону",
            fields: [
                {type: "tel", name: "phone"}
            ]
        },
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
            legend: "Номери телефону",
            fields: [
                {type: "tel", name: "phone"}
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
        {
            type: "fieldset",
            legend: "Номери телефону",
            fields: [
                {type: "tel", name: "phone"}
            ]
        },
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
        if ((field.type === "text" || field.type === "number" || field.type === "textarea" /*|| field.type === "tel"*/ || field.type === "url") && field.name !== "photos") {
            const input = document.createElement(field.type === "textarea" ? "textarea" : "input");
            input.type = field.type;
            input.name = field.name;
            input.placeholder = field.placeholder;
            if (field.required) input.required = true;
            formContainer.appendChild(input);
        }
        else if (field.type === "radio" || field.type === "checkbox") {
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
                } else if (subField.type === "tel" && subField.name === "phone") {
                    fieldset.appendChild(generatePhoneInput());
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

//photo url convert, close and drag
function generatePhotoUpload() {
    const container = document.createElement("div");
    container.classList.add("photo-upload");

    const gallery = document.createElement("div");
    gallery.classList.add("photo-gallery");
    gallery.id = "photo-gallery";

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
    container.appendChild(inputContainer);

    let photoArray = [];

    function addPhoto(url) {
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

        // Додаємо обробники для перетягування
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

    // --- Логіка для Drag and Drop ---
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

        photoDiv.addEventListener("dragover", function (event) {
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
        const newOrder = Array.from(gallery.children).map(photoDiv => {
            return photoDiv.querySelector("img").src;
        });

        photoArray = newOrder;
        updatePhotoStorage();
    }

    return container;
}

//working hours
function generateWorkingHours() {
    const days = [
        "Пн","Вт","Ср","Чт", "Пт","Сб","Нд"
    ];
    const engdays = [
        "Mn","Tu","Wd","Th", "Fr","St","Sn"
        //check names in db
    ];
    const container = document.createElement("div");
    container.classList.add("working-hours");

    days.forEach((day, index) => {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.dataset.day = day;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = engdays[index];
        checkbox.checked = true;

        const label = document.createElement("label");
        label.htmlFor = engdays[index];
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

//phone numbers
function generatePhoneInput() {
    const container = document.createElement("div");
    container.classList.add("phone-numbers");

    const phoneList = document.createElement("ul");
    phoneList.classList.add("phone-list");

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("phone-input");

    const input = document.createElement("input");
    input.type = "tel";
    input.placeholder = "+380XXXXXXXXX або 0XXXXXXXXX";
    input.pattern = "\\+380\\d{9}";
    input.title = "Введіть номер у форматі +380XXXXXXXXX або 0XXXXXXXXX";

    const button = document.createElement("button");
    button.type = "button";
    button.id = "submit";
    button.textContent = "Додати номер";

    inputContainer.appendChild(input);
    inputContainer.appendChild(button);

    container.appendChild(phoneList);
    container.appendChild(inputContainer);

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
        removeButton.type = "button";
        removeButton.id = "remove";
        removeButton.textContent = "Видалити";
        //removeButton.classList.add("remove-phone");

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

    button.addEventListener("click", function (event) {
        event.preventDefault();
        let number = input.value.trim();

        // Додаємо +38, якщо його немає на початку
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

    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            button.click();
        }
    });

    return container;
}
