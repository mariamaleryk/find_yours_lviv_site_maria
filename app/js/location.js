document.addEventListener("DOMContentLoaded", function () {

    let locationPage = sessionStorage.getItem("locationPage");
    locationPage = JSON.parse(locationPage);

    locationPage.forEach((item) => {
        const main_photo = document.querySelector(".clipped");
        const photo = document.createElement("img");
        photo.className = "responsive-img";
        photo.src = item.photos[0];
        photo.alt = "Place";
        main_photo.appendChild(photo);

        const name = document.getElementById("name");
        name.textContent = item.place_name;

        const location = document.getElementById("location");
        location.textContent = item.address;

        const district = document.getElementById("district");
        const img = document.createElement("img");
        img.className = "icon";
        img.alt = item.district;
        img.src = districtIcons[item.district];

        const span = document.createElement("span");
        span.textContent = item.district;

        district.appendChild(img);
        district.appendChild(span);

        const link = document.querySelector("span a");
        link.target = "_blank";
        link.href = item.website_link;
        link.textContent = item.website_link || 'немає';

        const description = document.querySelector(".description");
        const p = document.createElement("p");
        p.textContent = item.description || 'немає';
        description.appendChild(p);

        const photos = document.querySelector(".scroller");
        photos.innerHTML = item.photos && item.photos.slice(1).map(photo => `<img src="${photo}" alt="${item.place_name}">`).join('') || '';

        updateScrollerClasses('.scroller');
    });
})

const districtIcons = {
    'Франківський': "../../icons/districts/frankivskiy.svg",
    'Центр міста': "../../icons/districts/centre.svg",
    'Сихівський': "../../icons/districts/syhivskiy.svg",
    'Шевченківський': "../../icons/districts/shevchenkivskiy.svg",
    'Личаківський': "../../icons/districts/lychakivskiy.svg",
    'Залізничний': "../../icons/districts/zaliznychniy.svg"
};