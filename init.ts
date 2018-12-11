const { preInitFn } = require("astroboy.ts");

preInitFn({
  routerRoot: "/v1",
  routerAlwaysBuild: true
});