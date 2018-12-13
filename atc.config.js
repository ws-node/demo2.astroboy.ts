const path = require("path");

module.exports = {
  watch: [
    path.join(__dirname, "app/**/*.*"),
    path.join(__dirname, "config/**/*.*"),
    path.join(__dirname, "plugins/**/*.*")
  ],
  ignore: []
};
