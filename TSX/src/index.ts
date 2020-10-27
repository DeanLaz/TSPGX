import { User } from "./models/User";

const user = new User({ name: "Dean", age: 2000 });

const on = user.on;
const trigger = user.trigger;

on("change", () => {
  console.log("user changed");
});

trigger("change");
