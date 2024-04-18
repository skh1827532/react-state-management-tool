// globals.js

const globalStore = {};

/**
 * Creates or updates a global variable based on the provided object.
 * @param {Object} variable - An object with one key-value pair where the key is the variable name and the value is the variable content.
 */
function createGlobal(variable) {
  globalStore[variable] = variable;
}

function getFromGlobal() {
  return globalStore;
}

module.exports = {
  createGlobal,
  getFromGlobal,
};
