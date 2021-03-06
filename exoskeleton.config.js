const path = require("path");

module.exports = {
  tsconfig: "tsconfig.json",
  inspect: true,
  compile: true,
  // debug: "*",
  // mock: "http://127.0.0.1:8001",
  routers: {
    enabled: true,
    always: true,
    approot: "/v1",
    filetype: "ts",
    details: true
  },
  configCompiler: {
    enabled: true,
    force: true,
    configroot: 'app/config',
  },
  middlewareCompiler: {
    enabled: true,
    force: true,
    root: 'middlewares',
  },
  env: {
    // NODE_ENV: "production"
  },
  watch: [
    path.join(__dirname, "app/**/*.*"),
    path.join(__dirname, "middlewares/**/*.*"),
    path.join(__dirname, "plugins/**/*.*")
  ],
  ignore: [
    path.join(__dirname, "app/middlewares/*.ts"),
  ]
};
