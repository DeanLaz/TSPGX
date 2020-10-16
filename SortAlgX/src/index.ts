
// import { Sorter } from "./Sorter"
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from "./LinkedList";

console.log("Typescript Algs!")


const numberCollection = new NumberCollection([10, 3, -5, 0])
numberCollection.sort();
console.log(numberCollection.data)


const charCollection = new CharacterCollection("HELLO")
charCollection.sort();
console.log(charCollection.data)


const linkedList = new LinkedList()
linkedList.add(5042340);
linkedList.add(213423)
linkedList.add(2313423);
linkedList.add(423942)
linkedList.sort();
linkedList.print()

// const charCollection = new CharacterCollection("D1E2A3N4R5O6C7KS")
// const linkedList = new LinkedList()
// const sorter = new Sorter(charCollection)
// sorter.sort();
// console.log(charCollection.data)
  
// const linkedList = new LinkedList()
// linkedList.add(5042340);
// linkedList.add(213423)
// linkedList.add(2313423);
// linkedList.add(423942)
//  const sorter = new Sorter(linkedList)
//  sorter.sort();
// linkedList.print()