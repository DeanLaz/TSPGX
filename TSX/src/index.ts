import { User } from "./models/User";

const user = new User({ id: 1, name: "DEANS NEWEST NAME" });

const { on, trigger, fetch, save } = user;
on("change", () => {
  console.log(user);
});
save();
fetch();
