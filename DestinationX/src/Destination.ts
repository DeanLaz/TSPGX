import faker from "faker"
import { Mappable } from './Map';
export class Destination implements Mappable {
  name: string;
  slogan: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.name = faker.company.companyName();
    this.slogan = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude())
    }

  }
  markerContent(): string {
    return `<h4>Destination: ${this.name}</h4>
    <h4>Slogan: ${this.slogan}</h4>`
  }
}

