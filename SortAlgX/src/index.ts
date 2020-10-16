
import { Sorter } from "./Sorter"
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';

console.log("Typescript Algs!")
// const numberCollection = new NumberCollection([10, 3, -5, 0])
// const sorter = new Sorter(numberCollection)
// sorter.sort();

const charCollection = new CharacterCollection("D1E2A3N4R5O6C7KS")
const sorter = new Sorter(charCollection)
sorter.sort();
// console.log(numberCollection.data)
console.log(charCollection.data)


  