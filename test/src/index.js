import Moon from "../../libs/index";

import App from "./components/App.js";

let aaa = new Moon({
  el: "#app",
  render: c => c(App)
});

console.log(5555, aaa._vm);