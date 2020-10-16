export class CharacterCollection {
  constructor(public data: string) {
    
  }

  get length(): number {
    return this.data.length;
 }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex];

  }

  swap(leftIndex: number, rightIndex: number): void {
    const charArray = this.data.split("")
    const leftHand = charArray[leftIndex];
    charArray[leftIndex] = this.data[rightIndex]
    charArray[rightIndex] = leftHand
    const charString= charArray.join("")
  }
}
