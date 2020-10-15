import { } from "googlemaps"  // IMPORT GOOGLE MAPS// GET DIV BY ID


// INSTRUCTION TO CLASSES TO BE ARGUMENT TO addMarker FUNCTION
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
  markerContent(): string;
}

export class Map {
  private googleMap: google.maps.Map  // PRIVATE THE MAP
  constructor(divId: string) {  // CREATE CONSTRUCTOR
    this.googleMap = new google.maps.Map(document.getElementById(divId), {  // CREATE MAP
      zoom: 1.15,
      center: {
        lat: 0,
        lng: 0,
      }
    });
  }
  
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
    content: mappable.markerContent()
      })
      infoWindow.open(this.googleMap, marker)
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