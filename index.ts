import path from "path";
import { Astroboy, Server, RENDER_RESULT_OPTIONS } from "astroboy.ts";
import { EJS_ENGINE_OPTIONS, defaultEjsOptions, EjsEngine } from "./app/framework/plugins/ejs";

class DemoBaseFramework extends Astroboy {
  get [Symbol.for("BASE_DIR")]() {
    return path.join(__dirname, ".");
  }
}

export class UpgradeServer extends Server {

  static Create(args?: any, framework?: any) {
    return new UpgradeServer(framework, args);
  }

  constructor(args: any, framework?: any) {
    super(framework || DemoBaseFramework, args);
    this.option(RENDER_RESULT_OPTIONS, { engines: { ejs: EjsEngine } });
    this.option(EJS_ENGINE_OPTIONS, defaultEjsOptions);
    this.scoped(EjsEngine);
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
