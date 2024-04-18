const fs = require("fs");
const path = require("path");

const storePath = path.join(__dirname, "globalStore.json");

function saveStore(store) {
  fs.writeFileSync(storePath, JSON.stringify(store, null, 2), "utf8");
}

function loadStore() {
  try {
    const data = fs.readFileSync(storePath, "utf8");
    return JSON.parse(data);
  } catch (e) {
    // If the file does not exist or other errors occur, return an empty object
    return {};
  }
}

module.exports = { saveStore, loadStore };
