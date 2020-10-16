// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }
export abstract class Sorter {

  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(LeftIndex: number, rightIndex: number): void;
  abstract length: number;
  sort(): void {
    const { length } = this;
    
    for (let i = 0; i < length; i++) {

      for (let j = 0; j < length - i - 1; j++) {
  
          if (this.compare(j, j+1)) {
         this.swap(j, j+1)
          }
      
      
      }

    }

  }

}

// BAD CODE
    
  // class Sorter {
  //   constructor(public collection: number[] | string) {
    
  //   }
  // sort(): void {
  //   const { length } = this.collection;
    
  //   for (let i = 0; i < length; i++) {

  //     for (let j = 0; j < length - i - 1; j++) {
  //       if (this.collection instanceof Array) { // TYPEGUARD
          
  //         if (this.collection[j] > this.collection[j + 1]) {
  //         const leftHandIndex = this.collection[j];
  //         this.collection[j] = this.collection[j + 1]
  //         this.collection[j + 1] = leftHandIndex
  //         }
  //         if (typeof this.collection === "string"){
  
  //         }
  //     }
      
  //     }

  //   }