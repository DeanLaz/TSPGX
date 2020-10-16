"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
var CharacterCollection = /** @class */ (function () {
    function CharacterCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharacterCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharacterCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex];
    };
    CharacterCollection.prototype.swap = function (leftIndex, rightIndex) {
        var charArray = this.data.split("");
        var leftHand = charArray[leftIndex];
        charArray[leftIndex] = this.data[rightIndex];
        charArray[rightIndex] = leftHand;
        var charString = charArray.join("");
    };
    return CharacterCollection;
}());
exports.CharacterCollection = CharacterCollection;
