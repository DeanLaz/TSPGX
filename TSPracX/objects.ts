const profile = {
  name: "dean",
  age: 23,
  coords: {
    lat: 200,
    lng: 130,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
