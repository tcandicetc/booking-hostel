<script>
// to get current year
function getYear() {
  var currentDate = new Date()
  var currentYear = currentDate.getFullYear()
  //document.querySelector('#displayYear').innerHTML = currentYear
}

getYear()

/** google_map js **/
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  }
  var map = new google.maps.Map(document.getElementById('googleMap'), mapProp)
}

const src =
  'https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap'
</script>

<template>
  <!-- map section -->

  <div class="map_section">
    <div class="map_container">
      <div class="map">
        <div id="googleMap"></div>
      </div>
    </div>
  </div>

  <!-- end map section -->
</template>

<style scoped>
.map_section .map_container {
  height: 375px;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  padding: 0;
}

.map_section .map_container .map {
  height: 100%;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.map_section .map_container .map #googleMap {
  height: 100%;
}
</style>
