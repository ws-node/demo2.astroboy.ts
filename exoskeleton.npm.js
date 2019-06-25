const path = require("path");
const config = require("./exoskeleton.config");
const { merge } = require("@exoskeleton/cli/cmd");

module.exports = merge(config, {
  tsconfig: "tsconfig.npm.json"
});
