import { Collection } from "./models/Collection";

const collection = new Collection("http://localhost:3000/users");

collection.on("change", () => {
  console.log(collection);
});
collection.fetch();

// import axios, { AxiosResponse } from "axios";

// axios.get("http://localhost:3000/users").then((response: AxiosResponse) => {
//   console.log(response.data);
// });

// import { User } from "./models/User";

// const user = User.buildUser({ id: 1, name: "DEANS NEWEST NAME" });

// const { on, trigger, fetch, save } = user;
// on("change", () => {
//   console.log(user);
// });
// fetch();
