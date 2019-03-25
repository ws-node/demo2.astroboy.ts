const path = require("path");
const config = require("./atc.config");
const { merge } = require("astroboy.ts/cmd");

module.exports = merge(config, {
  tsconfig: "tsconfig.npm.json"
});
