document.addEventListener("DOMContentLoaded", function () {

    let recommendations = sessionStorage.getItem("recommendationsList");
    recommendations = JSON.parse(recommendations);
    const type = recommendations[0].message;

    if (type === 'place') {
        const container = document.getElementById("title");
        container.innerText = "Рекомендовані заклади";
        const random = document.getElementsByClassName("random")[0];
        random.classList.add('option');
        random.innerHTML = "Випадковий вибір <br> закладу";
    }
    if (type === 'location') {
        const container = document.getElementById("title");
        container.innerText = "Рекомендовані локації";
        const random = document.getElementsByClassName("random")[0];
        random.classList.add('option');
        random.innerHTML = "Випадковий вибір <br> локації";
    }

    let params = sessionStorage.getItem("paramsList");
    params = JSON.parse(params);
    params = Object.values(params);

    if (!recommendations || !params) {
        const container = document.getElementById('recommendations');
        const div = document.createElement('div');
        div.className = 'rec';
        div.innerText = "Відбулася помилка при обробці даних!"
        container.append(div);
        return;
    }

    displayChosenParams(params, type);
    displayRecommendations(recommendations, type);
})

function displayRecommendations(recommendations, type) {

    const container = document.getElementById('recommendations');
    if (type === 'No results found') {
        const div = document.createElement('div');
        div.className = 'rec';
        div.innerText = "На жаль, за вашим запитом не знайдено жодного місця!"
        container.append(div);
        return;
    }

    recommendations.forEach((recommendation) => {

        const card = document.createElement("div");
        card.className = 'card';

        const row = document.createElement("div");
        row.className = 'row p-0';

        const column1 = document.createElement("div");
        column1.className = 'col-3 col-md-3 col-lg-3 position-relative';

        const img = document.createElement("img");
        img.src = recommendation.photos[0];
        img.className = 'photo';
        img.alt = "Фото з закладу";

        column1.appendChild(img);

        const like = document.createElement("div");
        like.className = 'like-icon';
        like.innerHTML = '<svg width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '                                <path d="M10 0.5H22.0544C27.3011 0.5 31.5544 4.75329 31.5544 10V19C31.5544 24.2467 27.3011 28.5 22.0544 28.5H9.99999C4.75329 28.5 0.5 24.2467 0.5 19V10C0.5 4.7533 4.7533 0.5 10 0.5Z" fill="#D9D9D9" fill-opacity="0.1" stroke="white"/>\n' +
            '                                <path d="M15.9196 8.66861L16.2721 9.01901L16.6246 8.66861C16.6775 8.61602 16.7314 8.56534 16.7862 8.51656C18.8727 6.65921 22.4103 7.47909 23.623 9.9253C24.2132 11.1156 24.2747 12.751 23.2096 14.7358C22.1622 16.6874 20.0285 18.9633 16.2721 21.4052C12.5158 18.9633 10.382 16.6875 9.33465 14.7358C8.26951 12.751 8.33106 11.1156 8.92118 9.92531C10.134 7.4791 13.6715 6.65921 15.758 8.51655C15.8128 8.56533 15.8667 8.61601 15.9196 8.66861Z" stroke="white"/>\n' +
            '                            </svg>';

        column1.appendChild(like);
        row.appendChild(column1);

        const column2 = document.createElement("div");
        column2.className = 'col-9 col-md-9 col-lg-9';

        const content = document.createElement("div");
        content.className = 'card-content';

        const name = document.createElement("h2");
        name.className = 'button';
        name.innerHTML = recommendation.place_name;
        content.appendChild(name);

        if (type === "place") {
            name.id = recommendation.loc_id;
            name.classList.add(type);
            const cuisine = document.createElement("div");
            cuisine.className = 'icon';

            const cuisine_icon = document.createElement("img");
            cuisine_icon.src = "../../icons/place/chef.svg";
            cuisine_icon.className = 'icons';
            cuisine_icon.alt = "chef";

            cuisine.appendChild(cuisine_icon);

            const cuisine_name = document.createElement("span");
            if (recommendation.cuisine[0] === 'null')
                cuisine_name.innerHTML = 'немає';
            else
                cuisine_name.innerHTML = recommendation.cuisine.join(", ");

            cuisine.appendChild(cuisine_name);
            content.appendChild(cuisine);
        } else {
            name.id = recommendation.place_id;
            name.classList.add(type);
            const district = document.createElement("div");
            district.className = 'icon';

            const district_icon = document.createElement("img");
            district_icon.src = districtIcons[recommendation.district];
            district_icon.className = 'icons';
            district_icon.alt = "chef";

            district.appendChild(district_icon);

            const district_name = document.createElement("span");
            district_name.innerHTML = recommendation.district;

            district.appendChild(district_name);
            content.appendChild(district);
        }

        const address = document.createElement("div");
        address.className = 'icon';

        const address_icon = document.createElement("img");
        address_icon.src = "../../icons/geo-alt-fill.svg";
        address_icon.className = 'icons';
        address_icon.alt = "geo";

        address.appendChild(address_icon);

        const address_name = document.createElement("span");
        address_name.innerHTML = recommendation.address;

        address.appendChild(address_name);
        content.appendChild(address);

        const description = document.createElement("p");
        description.className = 'description';
        description.innerHTML = recommendation.description;
        content.appendChild(description);
        column2.appendChild(content);
        row.appendChild(column2);
        card.appendChild(row);
        container.appendChild(card);
    })


}

function displayChosenParams(params, type) {

    const paramsContainer = document.getElementById("params");

    displayTypes(params, paramsContainer);
    displayDistricts(params, paramsContainer);
    displayPurposes(params, paramsContainer);

    if (type === 'location' || type === 'No results found')
        return;

    displayCuisines(params, paramsContainer);
    displayPetFriendly(params, paramsContainer);
    displayBudgets(params, paramsContainer);
}

function displayTypes(params, container) {
    let types = params[0];
    types = types.map(type => `${typeNames[type]}`);

    const ms = document.createElement('p');
    ms.innerHTML = '<b>Тип закладу:';
    container.appendChild(ms);

    types.forEach((type) => {
        const p = document.createElement('p');
        p.innerText = type;
        container.appendChild(p);
    })
}

function displayDistricts(params, container) {
    const districts = params[1];

    const ms = document.createElement('p');
    ms.innerHTML = '<b>Район:';
    container.appendChild(ms);


    districts.forEach((district) => {
        const p = document.createElement('p');
        p.innerText = district.charAt(0).toUpperCase() + district.slice(1);
        container.appendChild(p);
    })
}

function displayPurposes(params, container) {
    let purposes = params[2];
    purposes = purposes.map(p => `${purposeNames[p]}`);

    const ms = document.createElement('p');
    ms.innerHTML = '<b>Мета візиту:';
    container.appendChild(ms);


    purposes.forEach((purpose) => {
        const p = document.createElement('p');
        p.innerText = purpose;
        container.appendChild(p);
    })
}

function displayCuisines(params, container) {
    let cuisines = params[3];
    cuisines = cuisines.map(c => `${cuisineNames[c]}`)

    const ms = document.createElement('p');
    ms.innerHTML = '<b>Кухня:';
    container.appendChild(ms);

    cuisines.forEach((cuisine) => {
        const p = document.createElement('p');
        p.innerText = cuisine;
        container.appendChild(p);
    })
}

function displayPetFriendly(params, container) {
    const pet = params[4];
    const ms = document.createElement('p');
    ms.innerHTML = '<b>Пет-френдлі:';
    container.appendChild(ms);
    const p = document.createElement('p');
    p.innerText = pet;
    container.appendChild(p);
}

function displayBudgets(params, container) {
    const budgets = params[5];
    const ms = document.createElement('p');
    ms.innerHTML = '<b>Бюджет:';
    container.appendChild(ms);
    budgets.forEach((budget) => {
        const p = document.createElement('p');
        p.innerText = budget;
        container.appendChild(p);
    })
}

$(document).ready(function () {
    $(".button").click(function () {
        const id = $(this).attr("id");
        const type = $(this).attr("class").split(" ")[1];
        placeOrLocation(type, id);
    })
})

function placeOrLocation(type, id) {
    let URL = '';
    if (type === 'place') {
        URL = `http://localhost:8080/api/places/id/${id}`;
        getPlace(URL);
    } else if (type === 'location') {
        URL = `http://localhost:8080/api/locations/id/${id}`;
        getLocation(URL);
    } else {
        console.error("Невідомий тип сторінки.");
        return;
    }
}

async function getPlace(URL) {
    try {
        const res = await fetch(URL, {credentials: 'include'});

        if (!res.ok) {
            throw new Error('Response isn`t ok');
        }

        const data = await res.json();
        sessionStorage.setItem('placePage', JSON.stringify(data));
        window.location.href = 'place.html';
    } catch (error) {
        console.error('Error while fetching map data:', error);
    }
}

async function getLocation(URL) {
    try {
        const res = await fetch(URL, {credentials: 'include'});

        if (!res.ok) {
            throw new Error('Response isn`t ok');
        }

        const data = await res.json();
        sessionStorage.setItem('locationPage', JSON.stringify(data));
        window.location.href = 'location.html';
    } catch (error) {
        console.error('Error while fetching map data:', error);
    }
}

const typeNames = {
    1: "Ресторан",
    2: "Кав’ярня",
    3: "Стейк-хаус",
    4: "Фаст-фуд",
    5: "Бар",
    6: "Піцерія",
    7: "Парк",
    8: "Театр",
    9: "Галерея",
    10: "Пам’ятка архітектури",
    11: "Кінотеатр",
    12: "Церква/собор",
    13: "Музей",
    14: "Інше"
};

const purposeNames = {
    1: "Банкет",
    2: "Сімейний відпочинок",
    3: "Побачення",
    4: "Ситно поїсти",
    5: "Зустріч з друзями",
    6: "Активний відпочинок",
    7: "Пасивний відпочинок",
    8: "Культурний відпочинок",
    9: "Розважитись"
};

const cuisineNames = {
    1: "Українська",
    2: "Європейська",
    3: "Азійська",
    4: "Американська",
    5: "Грузинська",
    6: "Італійська",
    7: "Інше"
};

const districtIcons = {
    'Франківський': "../../icons/districts/frankivskiy.svg",
    'Центр міста': "../../icons/districts/centre.svg",
    'Сихівський': "../../icons/districts/syhivskiy.svg",
    'Шевченківський': "../../icons/districts/shevchenkivskiy.svg",
    'Личаківський': "../../icons/districts/lychakivskiy.svg",
    'Залізничний': "../../icons/districts/zaliznychniy.svg"
};