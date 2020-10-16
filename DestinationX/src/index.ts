import { User } from "./User";
import { Destination } from "./Destination";
import { Map } from "./Map";

const user = new User();
const destination = new Destination();
const map = new Map("map");

map.addMarker(user);
map.addMarker(destination);

// const user = new User();
// const destination = new Destination();
// console.log(user)
// console.log(destination)

// const MAP_DIV = document.getElementById("map")

// const map = new google.maps.Map(MAP_DIV, {
//   zoom: 0,
//   center: {
//     lat: 0,
//     lng: 0,
//   }
// });

// map
