const map = L.map('map', {
    center: [49.84, 24.03],
    zoom: 14
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '<a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
    })
    .addTo(map);

document.addEventListener("DOMContentLoaded", () => {
    // check if we on map page
    if (document.URL.includes('map')) {
        map.setZoom(12.4, {animate: false});
        renderMapData();
    } else {
        const name = $('#name').get(0).innerText;
        console.log(name);
        // right now using city centre coords
        const marker = L.marker([49.84181862718789, 24.03162551465858]).bindPopup(name).addTo(map);
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
        const res = await fetch(URL);

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
    const markers = L.layerGroup();
    data.forEach((item) => {
        const name = item.name;

        const marker = L.marker([item.latitude, item.longitude],
            {
                opacity:0.9,
                title: name
            })
            .bindPopup(name)
            .addTo(markers);
    })
    map.addLayer(markers);

    const overlays  = {
        "Markers": markers
    };
    const layerControl = L.control.layers({},overlays).addTo(map);
}
