import path from "path";
import { Astroboy, Server, RENDER_RESULT_OPTIONS } from "@exoskeleton/core";
import {
  EJS_ENGINE_OPTIONS,
  defaultEjsOptions,
  EjsEngine
} from "./app/framework/plugins/ejs";

class DemoBaseFramework extends Astroboy {
  get [Symbol.for("BASE_DIR")]() {
    return path.join(__dirname, ".");
  }
}

export class UpgradeServer extends Server {
  static Create(framework?: any, args?: any) {
    return new UpgradeServer(args, framework);
  }

  constructor(args: any, framework?: any) {
    super(bindDI(framework) || DemoBaseFramework, args);
    this.option(RENDER_RESULT_OPTIONS, { engines: { ejs: EjsEngine } });
    this.option(EJS_ENGINE_OPTIONS, defaultEjsOptions);
    this.scoped(EjsEngine);
  }
}

function bindDI(ctor: any) {
  if (!ctor) return undefined;
  // tslint:disable-next-line:class-name
  return class BIND_CLASS extends ctor {
    protected get [Symbol.for("BASE_DIR")]() {
      return path.join(__dirname, ".");
    }
  };
}

import TestService from "./app/services/test";
import BusinessContext from "./app/services/business-context";
import MixinService from "./app/services/mixin";

export * from "./options/demo";
export * from "./options/strOpt";

export { IConfigs as Demo2Configs } from "./app/config/config.default";

export { TestService, MixinService, BusinessContext, EJS_ENGINE_OPTIONS };
