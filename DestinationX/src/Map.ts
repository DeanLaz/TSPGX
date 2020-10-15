import { } from "googlemaps"  // IMPORT GOOGLE MAPS// GET DIV BY ID
import { User } from "./User"
import { Destination } from './Destination';

// INSTRUCTION TO CLASSES TO BE ARGUMENT TO addMarker FUNCTION
interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
}

export class Map {
  private googleMap: google.maps.Map  // PRIVATE THE MAP
  constructor(divId: string) {  // CREATE CONSTRUCTOR
    this.googleMap = new google.maps.Map(document.getElementById(divId), {  // CREATE MAP
      zoom: 2,
      center: {
        lat: 0,
        lng: 0,
      }
    });
  }
  
  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
  }
}

  // BAD CODE

  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng
  //     }
  //   })
  // }
  // addDestinationMarker(destination: Destination): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: destination.companyLocation.lat,
  //       lng: destination.companyLocation.lng,
  //     }
  //   })
  // }