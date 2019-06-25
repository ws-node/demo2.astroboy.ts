const path = require("path");
const config = require("./atc.config");
const { merge } = require("@exoskeleton/cli/cmd");

module.exports = merge(config, {
  tsconfig: "tsconfig.npm.json"
});
