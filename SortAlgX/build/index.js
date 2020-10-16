"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharacterCollection_1 = require("./CharacterCollection");
console.log("Typescript Algs!");
// const numberCollection = new NumberCollection([10, 3, -5, 0])
// const sorter = new Sorter(numberCollection)
// sorter.sort();
var charCollection = new CharacterCollection_1.CharacterCollection("D1E2A3N4R5O6C7KS");
var sorter = new Sorter_1.Sorter(charCollection);
sorter.sort();
// console.log(numberCollection.data)
console.log(charCollection.data);
