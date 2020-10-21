import { User } from "./models/User";

console.log("Dean");

const user = new User({ name: "Dean", age: 23 });

user.set({ name: "newname", age: 9999 });

console.log(user.get("name"));
console.log(user.get("age"));
