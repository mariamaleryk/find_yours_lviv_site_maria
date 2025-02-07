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

    const h5 = document.createElement("h5");
    h5.className = "place";
    h5.textContent = place.district;

    name_and_district.appendChild(h1);
    name_and_district.appendChild(h5);

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

    const link = document.querySelector(".text-end a");
    link.target = "_blank";
    link.href = place.website_link;
    link.textContent = place.website_link || "немає";

    const photos = document.querySelector(".scroller");
    photos.innerHTML = place.photos && place.photos.slice(1).map(photo => `<img src="${photo}" alt="${place.place_name}">`).join('') || '';

    updateScrollerClasses('.scroller');
})