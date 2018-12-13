import path from "path";
import { Server, Astroboy, JSON_RESULT_OPTIONS, JsonResolvers, ENV } from "astroboy.ts";
import { DEMO_OPTIONS } from "../options/demo";
import { STR_OPT } from "../options/strOpt";

// new Astroboy({
//   ROOT_PATH: path.resolve(__dirname, "..")
// }).on("start", () => {
//   console.log("hello world!");
// }).on("error", (err) => {
//   console.log(`fuck it : ${String(err)}`);
// });

Server.Create(Astroboy, {
  ROOT_PATH: path.resolve(__dirname, "..")
})
  .option(STR_OPT)
  .option(DEMO_OPTIONS)
  .option(JSON_RESULT_OPTIONS, {
    format: true,
    keyResolver: JsonResolvers.camelcase,
    jsonTemplate: {
      code: 0,
      message: "success",
      data: null
    },
    jsonTplKey: "data"
  })
  .run({
    onStart: () => console.log("hello world!"),
    onError: (err) => console.log(`fuck it : ${String(err)}`)
  });
