const path = require("path");

module.exports = {
  routers: {
    enabled: true,
    always: false,
    approot: "/v1",
    filetype: "ts",
    details: true,
    tsconfig: "tsconfig.json"
  },
  watch: [
    path.join(__dirname, "app/**/*.*"),
    path.join(__dirname, "config/**/*.*"),
    path.join(__dirname, "plugins/**/*.*")
  ],
  ignore: []
};
