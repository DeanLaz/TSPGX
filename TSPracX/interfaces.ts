// CREATE INTERFACE

interface Vehicle {
  owner: string;
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}
  
interface Reportable {
  summary(): string;
  }


// CARS

const Civic = {
  owner: "Dean",
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string { return  `I'm Deans Civic`
}
}

const Ferrari = {
  owner: "Dean",
  name: "Ferrari",
  year: 2019,
  broken: false,
  summary(): string { return `I'm Deans Ferrari` },
}

// PRINT VEHICLES WITH INTERFACE MODEL

const printVehicle = (vehicle: Vehicle): void => {
console.log(vehicle)
}

printVehicle(Civic)
printVehicle(Ferrari)


// CARS

const drinker = {
  color: "brown",
  carbonated: true,
  sugar: 2000,
  summary(): string {
    return "Drink Drink"
  }
}

const pepsicola = {
  color: "brown",
  carbonated: true,
  sugar: 2000,
  summary(): string {
    return `PEPSI PEPSI`
  }
}

// PRINT VEHICLES WITH INTERFACE MODEL

const printReport = (item: Reportable): void => {
    console.log(item);
  }

printReport(drinker)
printReport(pepsicola);

// CODE REUSE 

// Create functions that accept arguments hat are types with interfaces,
// objects/classes can decide to "implement" a given interface to work with a function

// Create a function that creates interface type as argument so other values so implement that interface