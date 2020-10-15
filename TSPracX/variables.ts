// VALUE TYPES

let apples: number = 9102;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// BUILT IN OBJECTS

let now: Date = new Date();

// ARRAY

let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, true, false, false];

// CLASSES

class Monster {

}
let monster: Monster = new Monster()

// OBJECT LITERAL

let point: { x: number; y: number} = {
  x: 10,
  y: 20
}

// FUNCTION

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

//  WHEN TO USE ANNOTATIONS     //

//     1) FUNCTION THAT RETURNS "ANY" TYPE     //

const json: string = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number;} = JSON.parse(json) // ISSUE//
console.log(coordinates)

    // 2) WHEN WE DECLARE A VARIABLE ON ONE LINE AND INITIALIZE IT LATER  //

let words = ["red", "green", "blue"]
let foundWord: boolean;  // ISSUE // 


for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true; 
  }
}


    // 3) VARIABLE WHOS TYPE CANNOT BE INFERRED CORRECTLY 

let number = [-10, -1, 12]
let numberAboveZero: boolean | number = false // BOOLEAN OR NUMBER 
for (let i = 0; i < number.length; i++) {
  if (number[i] > 0) {
    numberAboveZero = number[i];
  }
}