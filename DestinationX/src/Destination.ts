import faker from "faker"
export class Destination {
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
}

