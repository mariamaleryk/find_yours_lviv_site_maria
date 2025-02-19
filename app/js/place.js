document.addEventListener('DOMContentLoaded', function () {

    let place = sessionStorage.getItem('placePage');
    place = JSON.parse(place)[0];

    const main_photo = document.getElementById("main_photo");
    const photo = document.createElement("img");
    photo.src = place.photos[0];
    photo.alt = "Фото з закладу";
    main_photo.appendChild(photo);

    const name_and_district = document.getElementById("n&d");
    const h1 = document.createElement("h1");
    h1.id = "name";
    h1.textContent = place.place_name;

    name_and_district.prepend(h1);

    const districtName = document.getElementById("districtName");
    districtName.textContent = place.district;

    const districtImg = document.getElementById("districtImg");
    districtImg.src = districtIcons[place.district];

    const tagsContainer = document.getElementById("tags");
    const tagsArr = [place.district, place.type_name, place.budget, ...place.cuisine, ...place.purposes];
    tagsContainer.innerHTML = tagsArr
        .filter(item => item && item !== 'null')
        .map(item => `<button id="${item}">#${item.toLowerCase()}</button>`)
        .join('');

    const type = document.getElementById("place-type");
    type.textContent = place.type_name;

    const friendly = document.getElementById("pet-friendly");
    if (place.pet_friendly) {
        friendly.textContent = 'так';
    } else {
        friendly.textContent = 'ні';
    }

    const time = document.getElementById("working-time");
    if (place.work_time[0] === 'null')
        time.innerHTML = 'немає';
    else
        time.innerHTML = place.work_time.join('<br>');

    const cuisine_name = document.getElementById("cuisine");
    if (place.cuisine[0] === 'null')
        cuisine_name.innerHTML = 'немає';
    else
        cuisine_name.innerHTML = place.cuisine.join(", ");

    const budget = document.getElementById("budget");
    budget.textContent = place.budget;

    const address = document.getElementById("address");
    address.textContent = place.address;
    address.href = place.map_link;

    const description = document.querySelector(".rest-description");
    description.textContent = place.description;

    const phone = document.querySelector(".connect a");
    phone.href = `tel:${place.phone ? place.phone.join(', ') : 'немає'}`;
    phone.innerHTML = place.phone ? place.phone.join(', ') : 'немає';

    const link = document.getElementById('link');
    if (place.website_link){
        link.href = place.website_link;
        link.textContent = place.website_link;
    }else{
        link.textContent = "Сайт відсутній";
    }

    const photos = document.querySelector(".scroller");
    photos.innerHTML = place.photos && place.photos.slice(1).map(photo => `<img src="${photo}" alt="${place.place_name}">`).join('') || '';

    updateScrollerClasses('.scroller');
    handleTagsClick();
})

function handleTagsClick() {
    handleDistrict();
    handleType();
    handleBudget();
    handleCuisine();
    handlePurposes();
}

function handleDistrict(){
    const districts = ["Центр міста", "Франківський", "Сихівський", "Залізничний", "Шевченківський","Личаківський"]

    const selectors = districts.map(item => `button[id="${item}"]`).join(", ");
    const buttons = $(selectors);

    buttons.click(function () {
        let districtName = $(this).text().replaceAll('#', '');
        districtName = districtName.charAt(0).toUpperCase() + districtName.slice(1);

        const params = {"districts_to_sort": districtName};

        const URL = `http://localhost:8080/api/places/recommendations?types_to_sort=[1,2,3,4,5,6]&districts_to_sort=["${districtName}"]&purposes_to_sort=[1,2,3,4,5]&cuisines_to_sort=[1,2,3,4,5,6,7]&pet_friendly="Неважливо"&budgets_to_sort=["Мінімальний","Середній","Преміум"]`;

        getRecommendations(URL, params);
    })
}

function handleType(){
    const types=["ресторан","кав’ярня","стейк-хаус","фаст-фуд","бар","піцерія"]
    const types_ids = {};
    types.forEach((type, index) => {
        types_ids[type] = index + 1;
    });

    const selectors = types.map(item => `button[id="${item}"]`).join(", ");
    const buttons = $(selectors);

    buttons.click(function () {
        const params = {"types_to_sort": types_ids[$(this).text().replaceAll('#','')]};

        const URL = `http://localhost:8080/api/places/recommendations?types_to_sort=[${types_ids[$(this).text().replaceAll('#','')]}]&districts_to_sort=["Центр міста","Шевченківський","Личаківський","Сихівський","Франківський","Залізничний"]&purposes_to_sort=[1,2,3,4,5]&cuisines_to_sort=[1,2,3,4,5,6,7]&pet_friendly="Неважливо"&budgets_to_sort=["Мінімальний","Середній","Преміум"]`;

        getRecommendations(URL,params);
    })
}

function handleBudget(){
    const budgets = ["Мінімальний","Середній","Преміум"];

    const selectors = budgets.map(item => `button[id="${item}"]`).join(", ");
    const buttons = $(selectors);

    buttons.click(function () {
        let budgetName = $(this).text().replaceAll('#', '');
        budgetName = budgetName.charAt(0).toUpperCase() + budgetName.slice(1);

        const params = {"budgets_to_sort": budgetName};

        const URL = `http://localhost:8080/api/places/recommendations?types_to_sort=[1,2,3,4,5,6]&districts_to_sort=["Центр міста","Шевченківський","Личаківський","Сихівський","Франківський","Залізничний"]&purposes_to_sort=[1,2,3,4,5]&cuisines_to_sort=[1,2,3,4,5,6,7]&pet_friendly="Неважливо"&budgets_to_sort=["${budgetName}"]`;

        getRecommendations(URL, params);
    })
}

function handleCuisine(){
    const cuisines = ["українська","європейська","азійська","американська","грузинська","італійська"];

    const cuisines_ids = {};
    cuisines.forEach((cuisine, index) => {
        cuisines_ids[cuisine] = index + 1;
    });

    const selectors = cuisines.map(item => `button[id="${item}"]`).join(", ");
    const buttons = $(selectors);

    buttons.click(function () {
        const params = {"cuisines_to_sort": cuisines_ids[$(this).text().replaceAll("#","")]};

        const URL = `http://localhost:8080/api/places/recommendations?types_to_sort=[1,2,3,4,5,6]&districts_to_sort=["Центр міста","Шевченківський","Личаківський","Сихівський","Франківський","Залізничний"]&purposes_to_sort=[1,2,3,4,5]&cuisines_to_sort=[${cuisines_ids[$(this).text().replaceAll("#","")]}]&pet_friendly="Неважливо"&budgets_to_sort=["Мінімальний","Середній","Преміум"]`;

        getRecommendations(URL,params);
    })
}

function handlePurposes(){
    const purposes = ["банкет","сімейний відпочинок","побачення","ситно поїсти","зустріч з друзями"];

    const purposes_ids = {};
    purposes.forEach((purpose, index) => {
        purposes_ids[purpose] = index + 1;
    });

    const selectors = purposes.map(item => `button[id="${item}"]`).join(", ");
    const buttons = $(selectors);

    buttons.click(function () {
        const params = {"purposes_to_sort": purposes_ids[$(this).text().replaceAll("#","")]};

        const URL = `http://localhost:8080/api/places/recommendations?types_to_sort=[1,2,3,4,5,6]&districts_to_sort=["Центр міста","Шевченківський","Личаківський","Сихівський","Франківський","Залізничний"]&purposes_to_sort=[${purposes_ids[$(this).text().replaceAll("#","")]}]&cuisines_to_sort=[1,2,3,4,5,6,7]&pet_friendly="Неважливо"&budgets_to_sort=["Мінімальний","Середній","Преміум"]`;

        getRecommendations(URL, params);
    })
}

async function getRecommendations(URL, params){
    try {
        const res = await fetch(URL,{credentials: 'include'});

        if (!res.ok) {
            throw new Error('Response isn`t ok');
        }

        const data = await res.json();
        sessionStorage.setItem('recommendationsList', JSON.stringify(data));
        sessionStorage.setItem('paramsList', JSON.stringify(params));
        window.location.href = 'recommendations.html';
    } catch (error) {
        console.error('Error while fetching recommendation data:', error);
    }
}

const districtIcons = {
    'Франківський': "../../icons/districts/frankivskiy.svg",
    'Центр міста': "../../icons/districts/centre.svg",
    'Сихівський': "../../icons/districts/syhivskiy.svg",
    'Шевченківський': "../../icons/districts/shevchenkivskiy.svg",
    'Личаківський': "../../icons/districts/lychakivskiy.svg",
    'Залізничний': "../../icons/districts/zaliznychniy.svg"
};