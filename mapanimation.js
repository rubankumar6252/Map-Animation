// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
      [77.3881346697735,11.06239661863335],
      [77.34833444906229,11.098494576943608],
      [77.28306364650093,10.994569708151852],
      [77.22223790999458,11.001939325204768],
      [77.18496165550842,11.017135826126722],
      [77.13419280999474,11.028672044660883],
];
 
// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoicnViYW5rdW1hciIsImEiOiJja3hlNjNpNW8xNWxjMm9wZGtxeDU4ZGR6In0.frCKgqrxIsRpiBc_diKpyQ';
 
// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/outdoors-v11',
  center: [77.3881346697735,11.06239661863335],
  zoom: 12
});
 
// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker = new mapboxgl.Marker({"color": "#b40219"})
.setLngLat([77.3881346697735,11.06239661863335])
.addTo(map);
 
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(() => {
    if(counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 2000);
}
 