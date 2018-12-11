import { preInitFn } from "astroboy.ts";

preInitFn({
  routerRoot: "/v1",
  routerAlwaysBuild: true
});