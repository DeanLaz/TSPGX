import { User } from "./models/User";

const user = new User({ id: 1 });

user.set({ name: "DEANS NEW NAME", age: 2001 });

user.events.on("change", () => {
  console.log("change");
});

user.events.trigger("change");
