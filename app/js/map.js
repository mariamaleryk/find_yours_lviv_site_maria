const map = L.map('map', {
    center: [49.84, 24.03],
    zoom: 14,
    zoomControl: false
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
}).addTo(map);

document.addEventListener("DOMContentLoaded", () => {
    // check if we on map page
    if (document.URL.includes('map')) {
        map.setZoom(12.4, {animate: false});
        renderMapData();
    } else {
        $(document).ready(function () {
            const name = $('#name').get(0).innerText;
            let place;

            if (document.URL.includes('place')) {
                place = sessionStorage.getItem('placePage');
            } else {
                place = sessionStorage.getItem('locationPage');
            }

            place = JSON.parse(place)[0];
            map.setView([place.latitude, place.longitude]);
            const icon = L.icon({
                iconUrl: typeIcons[place.type_id],
                iconSize: 30,
            });
            const marker = L.marker([place.latitude, place.longitude],
                {
                    opacity: 0.9,
                    icon: icon
                })
                .bindPopup(name)
                .addTo(map);
        })
    }
});

async function getMapData() {

    const cachedData = sessionStorage.getItem('mapData');
    const cacheTime = sessionStorage.getItem('mapDataTimestamp');
    const expirationTime = 30 * 60 * 1000;
    if (cachedData && cacheTime && Date.now() - cacheTime < expirationTime) {
        console.log('Using cached map data');
        return JSON.parse(cachedData);
    }

    const URL = 'http://localhost:8080/api/getMapData'

    try {
        const res = await fetch(URL,{credentials: 'include'});

        if (!res.ok) {
            throw new Error('Error while fetching map data');
        }

        const data = await res.json();
        sessionStorage.setItem('mapData', JSON.stringify(data));
        sessionStorage.setItem('mapDataTimestamp', Date.now().toString());
        return data;
    } catch (error) {
        console.error('Error while fetching map data:', error);
    }
}

async function renderMapData() {
    const data = await getMapData();

    const markers = L.featureGroup();
    const restaurant = L.featureGroup();
    const coffee = L.featureGroup();
    const steak_house = L.featureGroup();
    const fast_food = L.featureGroup();
    const bar = L.featureGroup();
    const pizza = L.featureGroup();
    const park = L.featureGroup();
    const theater = L.featureGroup();
    const gallery = L.featureGroup();
    const architectural = L.featureGroup();
    const cinema = L.featureGroup();
    const church = L.featureGroup();
    const museum = L.featureGroup();
    const other = L.featureGroup();

    const layers = {
        1: restaurant,
        2: coffee,
        3: steak_house,
        4: fast_food,
        5: bar,
        6: pizza,
        7: park,
        8: theater,
        9: gallery,
        10: architectural,
        11: cinema,
        12: church,
        13: museum,
        14: other
    };

    data.forEach((item) => {
        const name = item.name;

        const icon = L.icon({
            iconUrl: typeIcons[item.type_id],
            iconSize: 30,
        });

        const marker = L.marker([item.latitude, item.longitude],
            {
                opacity: 0.9,
                title: name,
                icon: icon,
                alt: name,
                shadowPane: item.location_id
            });

        marker.addTo(markers);
        marker.addTo(layers[item.type_id]);
    })

    map.addLayer(markers);

    $(document).ready(function () {
        $('.leaflet-control-layers-group-label').click();
    })

    const overlays = {
        "Всі маркери": {
            "Ресторан": restaurant,
            "Кав’ярня": coffee,
            "Стейк-хаус": steak_house,
            "Фаст-фуд": fast_food,
            "Бар": bar,
            "Піцерія": pizza,
            "Парк": park,
            "Театр": theater,
            "Галерея": gallery,
            "Пам’ятка архітектури": architectural,
            "Кінотеатр": cinema,
            "Церква/собор": church,
            "Музей": museum,
            "Інше": other
        }
    };

    const layerControl = L.control.groupedLayers(null, overlays,
        {
            groupCheckboxes: true,
            position: 'topleft'
        })
        .addTo(map);

    markers.eachLayer((layer) => {
        layer.on('click', () => {

            const location_id = layer.options.shadowPane;

            const elementId = 'contentNode' + `${location_id}`;
            const isAlreadyShown = $(`#${elementId}`);
            if (!(isAlreadyShown.length === 0)) {
                return;
            }

            const place = data.find(place => place.location_id === location_id);

            createCard();
            formPlaceContent(place);

            const dialogChanged = new Event('dialogChanged');
            document.dispatchEvent(dialogChanged);

            $(".button").click(function () {
                const type = $(this).attr("class").split(" ")[1];
                const id = $(this).attr("id");

                placeOrLocation(type, id);
            })
        })
    })
}

function formPlaceContent(place) {
    const container = document.getElementById("contentNode");
    container.id = container.id + `${place.location_id}`;
    const column1 = document.createElement("div");
    column1.className = "col-6 ph position-relativer";

    const photo = document.createElement("img");
    photo.src = place.photo_link;
    photo.className = 'photo';
    photo.alt = place.name;
    column1.appendChild(photo);

    const like_icon = document.createElement("div");
    like_icon.className = "like-icon";
    like_icon.innerHTML = '<svg width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '                            <path d="M10 0.5H22.0544C27.3011 0.5 31.5544 4.75329 31.5544 10V19C31.5544 24.2467 27.3011 28.5 22.0544 28.5H9.99999C4.75329 28.5 0.5 24.2467 0.5 19V10C0.5 4.7533 4.7533 0.5 10 0.5Z"\n' +
        '                                  fill="#D9D9D9" fill-opacity="0.1" stroke="white"/>\n' +
        '                            <path d="M15.9196 8.66861L16.2721 9.01901L16.6246 8.66861C16.6775 8.61602 16.7314 8.56534 16.7862 8.51656C18.8727 6.65921 22.4103 7.47909 23.623 9.9253C24.2132 11.1156 24.2747 12.751 23.2096 14.7358C22.1622 16.6874 20.0285 18.9633 16.2721 21.4052C12.5158 18.9633 10.382 16.6875 9.33465 14.7358C8.26951 12.751 8.33106 11.1156 8.92118 9.92531C10.134 7.4791 13.6715 6.65921 15.758 8.51655C15.8128 8.56533 15.8667 8.61601 15.9196 8.66861Z"\n' +
        '                                  stroke="white"/>\n' +
        '                        </svg>'
    column1.appendChild(like_icon);

    const column2 = document.createElement("div");
    column2.className = "col-6";

    const card_content = document.createElement("div");
    card_content.className = "card-content";

    const name = document.createElement("h2");
    name.className = `button ${place.type_id}`;
    // if(place.type_id > 6){
    //     name.classList.add(`${place.place_id}`);
    // }
    name.innerText = place.name;
    name.id = place.location_id;
    card_content.appendChild(name);

    const icon = document.createElement("div");
    icon.className = 'icon';

    if (place.cuisine_name === 'null') {
        const img = document.createElement("img");
        img.className = 'icons';
        img.src = '../../icons/map/white-globe.svg';
        img.alt = 'Іконка района';
        icon.appendChild(img);
        const span = document.createElement('span');
        span.innerText = place.district;
        icon.appendChild(span);
    } else {
        icon.innerHTML = '<svg width="59" height="70" viewBox="0 0 59 70" fill="none"\n' +
            '                                 xmlns="http://www.w3.org/2000/svg">\n' +
            '                                <path d="M43.416 20.5078H15.584V16.9326C12.9303 15.6708 11.1895 13.113 11.1895 10.2539C11.1895 6.10764 14.8037 2.73438 19.2461 2.73438C20.2561 2.73438 21.2389 2.91129 22.1629 3.25445C23.9481 1.22979 26.6371 0 29.5 0C32.3629 0 35.0519 1.22979 36.8371 3.25445C37.7611 2.91129 38.7439 2.73438 39.7539 2.73438C44.1963 2.73438 47.8105 6.10764 47.8105 10.2539C47.8105 13.1128 46.0697 15.6708 43.416 16.9326V20.5078Z"\n' +
            '                                      fill="white"/>\n' +
            '                                <path d="M22.9082 45.3379V47.1677C22.9082 50.5656 25.8594 53.3201 29.5 53.3201C33.1406 53.3201 36.0918 50.5656 36.0918 47.1677V45.3379C34.0454 46.0774 31.8228 46.4841 29.5 46.4841C27.1772 46.4841 24.9546 46.0774 22.9082 45.3379Z"\n' +
            '                                      fill="white"/>\n' +
            '                                <path d="M15.584 24.6094V29.3945C15.584 36.5563 21.8267 42.3828 29.5 42.3828C37.1733 42.3828 43.416 36.5563 43.416 29.3945V24.6094H15.584Z"\n' +
            '                                      fill="white"/>\n' +
            '                                <path d="M29.5 57.4219C23.4421 57.4219 18.5137 52.822 18.5137 47.168V46.4844H17.7812C8.47759 46.4844 0.935547 53.5236 0.935547 62.207V67.9492C0.935547 69.0818 1.91934 70 3.13281 70H11.1895V64.9414C11.1895 63.8088 12.1732 62.8906 13.3867 62.8906C14.6002 62.8906 15.584 63.8088 15.584 64.9414V70H31.6973V57.2156C30.9871 57.3506 30.2523 57.4219 29.5 57.4219ZM26.5703 65.625C25.3568 65.625 24.373 64.7068 24.373 63.5742C24.373 62.4416 25.3568 61.5234 26.5703 61.5234C27.7838 61.5234 28.7676 62.4416 28.7676 63.5742C28.7676 64.7068 27.7838 65.625 26.5703 65.625Z"\n' +
            '                                      fill="white"/>\n' +
            '                                <path d="M41.2188 46.4844H40.4863V47.168C40.4863 50.5154 38.7584 53.4929 36.0918 55.3655V70H43.416V64.9414C43.416 63.8088 44.3998 62.8906 45.6133 62.8906C46.8268 62.8906 47.8105 63.8088 47.8105 64.9414V70H55.8672C57.0807 70 58.0645 69.0818 58.0645 67.9492V62.207C58.0645 53.5236 50.5224 46.4844 41.2188 46.4844Z"\n' +
            '                                      fill="white"/>\n' +
            '                            </svg>';
        const span = document.createElement('span');
        span.innerText = place.cuisine_name;
        icon.appendChild(span);
    }

    card_content.appendChild(icon);

    const address_icon = document.createElement("div");
    address_icon.className = 'icon';
    address_icon.innerHTML = '<svg width="37" height="33" viewBox="0 0 37 33" fill="none"\n' +
        '                                 xmlns="http://www.w3.org/2000/svg">\n' +
        '                                <path d="M18.5 33C18.5 33 32.375 21.272 32.375 12.375C32.375 5.54048 26.163 0 18.5 0C10.837 0 4.625 5.54048 4.625 12.375C4.625 21.272 18.5 33 18.5 33ZM18.5 18.5625C14.6685 18.5625 11.5625 15.7923 11.5625 12.375C11.5625 8.95774 14.6685 6.1875 18.5 6.1875C22.3315 6.1875 25.4375 8.95774 25.4375 12.375C25.4375 15.7923 22.3315 18.5625 18.5 18.5625Z"\n' +
        '                                      fill="white"/>\n' +
        '                            </svg>';
    const address = document.createElement('span');
    address.innerText = place.address;
    address_icon.appendChild(address);
    card_content.appendChild(address_icon);

    const likes = document.createElement('div');
    likes.className = 'icon';
    likes.innerHTML = '<span>120 вподобань</span>';
    card_content.appendChild(likes);
    column2.appendChild(card_content);

    container.appendChild(column1);
    container.appendChild(column2);
}

const typeIcons = {
    1: "../../icons/map/restaurant.svg",
    2: "../../icons/map/coffee.svg",
    3: "../../icons/map/steak-house.svg",
    4: "../../icons/map/fast-food.svg",
    5: "../../icons/map/bar.svg",
    6: "../../icons/map/pizza.svg",
    7: "../../icons/map/park.svg",
    8: "../../icons/map/theater.svg",
    9: "../../icons/map/gallery.svg",
    10: "../../icons/map/architectural.svg",
    11: "../../icons/map/cinema.svg",
    12: "../../icons/map/church.svg",
    13: "../../icons/map/museum.svg",
    14: "../../icons/map/other.svg"
};

function placeOrLocation(type, id){
    let URL = '';
    if (type <= 6) {
        URL = `http://localhost:8080/api/places/id/${id}`;
        getPlace(URL);
    } else if (type > 6) {
        URL = `http://localhost:8080/api/locations/id/${id}`;
        getLocation(URL);
    }
}

async function getPlace(URL){
    try {
        const res = await fetch(URL,{credentials: 'include'});

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

async function getLocation(URL){
    try {
        const res = await fetch(URL,{credentials: 'include'});

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

document.addEventListener('dialogChanged', () => {
    const cardContainer = document.getElementById("cards-container");
    const cards = cardContainer.querySelectorAll(".cards");
    if (cards.length > 2) {
        cardContainer.style.overflowY = "auto";
        cardContainer.style.overflowX = "hidden";
    } else {
        cardContainer.style.overflowY = "unset";
        cardContainer.style.overflowX = "";
    }
})

function createCard() {
    const card_container = document.getElementById("cards-container");
    const cards = document.createElement('div');
    cards.className = 'cards';
    cards.style.width = '511.88px';
    cards.style.height = '200px';

    const place_card = document.createElement('div');
    place_card.className = 'place-card';

    const close_button = document.createElement('div');
    close_button.className = 'close-button';

    const close_icon = document.createElement('img');
    close_icon.src='../../icons/cross.svg';
    close_icon.alt = 'close-button';

    close_button.appendChild(close_icon);
    place_card.appendChild(close_button);

    const row = document.createElement('div');
    row.className = 'row';
    row.id = 'contentNode';
    place_card.appendChild(row);
    cards.appendChild(place_card);
    card_container.appendChild(cards);

    close_button.addEventListener('click', () => {
        const dialogChanged = new Event('dialogChanged');
        cards.remove();
        document.dispatchEvent(dialogChanged);
    });
}