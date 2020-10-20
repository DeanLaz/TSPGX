import { CSVReader } from "./CSVReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
const csvReader = new CSVReader("./football.csv");

const matchReader = new MatchReader(csvReader);
matchReader.load();

// const dateOfFirstMatch = reader.data[0][0];

// console.log(reader.data);

// enum matchResult { // enum or ENUMERATION == ENUMS ARE BASICALLY OBJECTS THAT HAVE CLOSELY RELATED VALUES
//   HomeWin = "H",
//   AwayWin = "A",
//   Draw = "D",
// }
