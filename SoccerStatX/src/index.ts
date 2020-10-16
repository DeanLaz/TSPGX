import fs from "fs";
import { CSVReader } from "./CSVReader";

const reader = new CSVReader("./football.csv");
reader.read();
// enu, // ENUMERATION
// ENUMS ARE BASICALLY OBJECTS THAT HAVE CLOSELY RELATED VALUES

enum matchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
// const MATCH_RESULT = {
//   HomeWin: "H",
//   AwayWin: "A",
//   Draw: "D",
// };

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === matchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === matchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
