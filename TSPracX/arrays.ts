const carMakers: string[] = ["ford", "toyota", "chevy"];
const date = [new Date(), new Date()];

const carsByMake = [
  ["f150"],
  ["colorolla"],
  ["camaro"]
]
const carsByMakers: string[][] = []

// HELP WITH INFERENCE WHEN EXTRACTING VALUES
const car = carMakers[0];
const myCar = carMakers.pop()

// PREVENT INCOMPATIBLE VALUES
carMakers.push("100")

// HELP WITH .map
carMakers.map((car: string): string => {
  return car.toUpperCase()
})

// FLEXIBLE TYPES
const importantDates: (Date | string)[] = [new Date(), '2030-10-10']
importantDates.push("2030-10-10");
importantDates.push(new Date())