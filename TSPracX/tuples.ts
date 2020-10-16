const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];

const sprite: Drink = ["clear", true, 46];

const tea: Drink = ["brown", true, 14];

// HARD TO UNDERSTAND

const carSpecs: [number, number] = [400, 3354];

// WHY OBJECTS ARE BETTER

const carStats = {
  horsepower: 600,
  weight: 1200,
};
