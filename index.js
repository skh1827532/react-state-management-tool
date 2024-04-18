const { saveStore, loadStore } = require("./store");

let globalStore = loadStore(); // Load the store at the application startup

function createGlobal(key, value) {
  globalStore[key] = typeof value === "function" ? value.toString() : value;
  saveStore(globalStore); // Save updates to the store
  console.log("Updated globalStore:", globalStore);
}

function getFromGlobal(key) {
  let value = globalStore[key];
  if (typeof value === "string" && value.startsWith("function")) {
    try {
      const fn = eval(`(${value})`);
      return fn;
    } catch (e) {
      console.error("Failed to convert string to function:", e);
    }
  }
  return value;
}

module.exports = {
  createGlobal,
  getFromGlobal,
};
