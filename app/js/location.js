document.addEventListener("DOMContentLoaded", function () {

    let locationPage = sessionStorage.getItem("locationPage");
    locationPage = JSON.parse(locationPage)[0];

    const main_photo = document.querySelector(".clipped");
    const photo = document.createElement("img");
    photo.className = "responsive-img";
    photo.src = locationPage.photos[0];
    photo.alt = "Place";
    main_photo.appendChild(photo);

    const name = document.getElementById("name");
    name.textContent = locationPage.place_name;

    const location = document.getElementById("location");
    location.textContent = locationPage.address;
    location.href = locationPage.map_link;

    const district = document.getElementById("district");
    const img = document.createElement("img");
    img.className = "icon";
    img.alt = locationPage.district;
    img.src = districtIcons[locationPage.district];

    const span = document.createElement("span");
    span.textContent = locationPage.district;

    district.appendChild(img);
    district.appendChild(span);

    const link = document.getElementById("link");
    link.href = locationPage.website_link;
    link.textContent = locationPage.website_link || 'немає';

    const description = document.getElementById("description");
    description.textContent = locationPage.description || 'немає';

    const photos = document.querySelector(".scroller");
    photos.innerHTML = locationPage.photos && locationPage.photos.slice(1).map(photo => `<img src="${photo}" alt="${locationPage.place_name}">`).join('') || '';

    updateScrollerClasses('.scroller');

})

const districtIcons = {
    'Франківський': "../../icons/districts/frankivskiy.svg",
    'Центр міста': "../../icons/districts/centre.svg",
    'Сихівський': "../../icons/districts/syhivskiy.svg",
    'Шевченківський': "../../icons/districts/shevchenkivskiy.svg",
    'Личаківський': "../../icons/districts/lychakivskiy.svg",
    'Залізничний': "../../icons/districts/zaliznychniy.svg"
};