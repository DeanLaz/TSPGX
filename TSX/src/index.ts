import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const ROOT = document.getElementById("root");
const user = User.buildUser({ name: "Dean", age: 23 });
if (ROOT) {
  const userEdit = new UserEdit(ROOT, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error("Root element not found");
}

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
