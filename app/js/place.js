document.addEventListener('DOMContentLoaded', function () {

    let place = sessionStorage.getItem('placePage');
    place = JSON.parse(place);

    place.forEach((item) => {
        const main_photo = document.getElementById("data-container");
        const photo = document.createElement("img");
        photo.src = item.photos[0];
        photo.alt = "Фото з закладу";
        main_photo.appendChild(photo);

        const name_and_district = document.getElementById("n&d");
        const h1 = document.createElement("h1");
        h1.id = "name";
        h1.textContent = item.place_name;

        const h5 = document.createElement("h5");
        h5.className = "place";
        h5.textContent = item.district;

        name_and_district.appendChild(h1);
        name_and_district.appendChild(h5);

        const type = document.getElementById("place-type");
        type.textContent = item.type_name;

        const friendly = document.getElementById("pet-friendly");
        if (item.pet_friendly) {
            friendly.textContent = 'так';
        } else {
            friendly.textContent = 'ні';
        }

        const time = document.getElementById("working-time");
        if (item.work_time[0] === 'null')
            time.innerHTML = 'немає';
        else
            time.innerHTML = item.work_time.join('<br>');

        const cuisine_name = document.getElementById("cuisine");
        if (item.cuisine[0] === 'null')
            cuisine_name.innerHTML = 'немає';
        else
            cuisine_name.innerHTML = item.cuisine.join(", ");

        const budget = document.getElementById("budget");
        budget.textContent = item.budget;

        const location = document.getElementById("location");
        location.textContent = item.address;

        const description = document.querySelector(".rest-description");
        description.textContent = item.description;

        const phone = document.querySelector(".connect a");
        phone.href = `tel:${item.phone ? item.phone.join(', ') : 'немає'}`;
        phone.innerHTML = item.phone ? item.phone.join(', ') : 'немає';

        const link = document.querySelector(".text-end a");
        link.target = "_blank";
        link.href = item.website_link;
        link.textContent = item.website_link || "немає";

        const photos = document.querySelector(".scroller");
        photos.innerHTML = item.photos && item.photos.slice(1).map(photo => `<img src="${photo}" alt="${item.place_name}">`).join('') || '';

        updateScrollerClasses('.scroller');
    });
})