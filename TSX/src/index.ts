import { User } from "./models/User";

const user = new User({ id: 1 });

const { on, trigger, fetch } = user;
on("change", () => {
  console.log(user);
});

fetch();
