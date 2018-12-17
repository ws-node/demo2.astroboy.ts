import path from "path";
import { Astroboy } from "astroboy.ts";

export class DemoBaseFramework extends Astroboy {
  get [Symbol.for("BASE_DIR")]() {
    return path.join(__dirname, ".");
  }
}

import TestService from "./app/services/test";
import BusinessContext from "./app/services/business-context";

export * from "./options/demo";
export * from "./options/strOpt";

export {
  TestService,
  BusinessContext
};
