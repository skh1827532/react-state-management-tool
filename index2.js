const { createGlobal } = require("./index");

function showData() {
  console.log("Hello");
}

let name = "Sanjay";
createGlobal("hello", showData);
createGlobal("name", name);
