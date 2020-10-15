import faker from "faker";
import {Mappable} from "./Map"
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  }


  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude())
    }
    // this.location.lat = Number(faker.address.latitude());
    // this.location.lng = Number(faker.address.longitude());
  }
  markerContent(): string {
    return `<h4>Name: ${this.name}</h4>`
  }
}


