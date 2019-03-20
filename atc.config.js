const path = require("path");

module.exports = {
  tsconfig: "tsconfig.json",
  inspect: true,
  // debug: "*",
  // mock: "http://127.0.0.1:8001",
  routers: {
    enabled: true,
    always: false,
    approot: "/v1",
    filetype: "ts",
    details: true
  },
  configCompiler: {
    enabled: true,
    configroot: 'config-ts',
  },
  env: {
    // NODE_ENV: "production"
  },
  watch: [
    path.join(__dirname, "app/**/*.*"),
    path.join(__dirname, "config/**/*.*"),
    path.join(__dirname, "plugins/**/*.*")
  ],
  ignore: []
};
