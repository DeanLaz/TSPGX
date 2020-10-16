"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
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
