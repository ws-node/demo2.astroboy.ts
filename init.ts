import { preInitFn } from "astroboy.ts";

preInitFn({
  appRoot: "/v1",
  always: true,
  enabled: true,
  fileType: "ts"
});