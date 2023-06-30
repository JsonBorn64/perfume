<template>
    <footer class="footer">
        <img class="logo" src="~/assets/images/logo.svg" alt="logo">
        <div id="map"></div>
    </footer>
</template>

<script setup>
onMounted(() => {
    function initMap() {
        const locations = [
            { lat: 48.8566, lng: 2.3522, name: 'Магазин Coco Chanel в Париже, Франция' },
            { lat: 51.5074, lng: -0.1278, name: 'Магазин Coco Chanel в Лондоне, Великобритания' },
            { lat: 40.7128, lng: -74.0060, name: 'Магазин Coco Chanel в Нью-Йорке, США' },
            { lat: 45.4642, lng: 9.1900, name: 'Магазин Coco Chanel в Милане, Италия' },
            { lat: 35.6895, lng: 139.6917, name: 'Магазин Coco Chanel в Токио, Япония' },
            { lat: 52.5200, lng: 13.4050, name: 'Магазин Coco Chanel в Берлине, Германия' },
            { lat: 41.9028, lng: 12.4964, name: 'Магазин Coco Chanel в Риме, Италия' },
            { lat: 48.2082, lng: 16.3738, name: 'Магазин Coco Chanel в Вене, Австрия' },
            { lat: 25.2048, lng: 55.2708, name: 'Магазин Coco Chanel в Дубае, ОАЭ' },
            { lat: -33.8675, lng: 151.2070, name: 'Магазин Coco Chanel в Сиднее, Австралия' }
        ];

        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: { lat: 48.8566, lng: 2.3522 },
            streetViewControl: false,
            mapTypeControl: false,
            zoomControl: false,
            rotateControl: false,
            scaleControl: false
        });

        locations.forEach(function (location) {
            const marker = new google.maps.Marker({
                position: { lat: location.lat, lng: location.lng },
                map: map,
                title: location.name
            });
        });
    }
    initMap()
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.footer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: calc($index * 11.54);
    background-color: $black;
    padding: 0 calc($index * 2);
}

.logo {
    width: calc($index * 10.28);
}

#map {
    height: calc($index * 7.26);
    width: calc($index * 28.84);
}
</style>
