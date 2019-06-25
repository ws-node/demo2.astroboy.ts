import { BaseClass } from "@exoskeleton/core";

class OldService extends BaseClass {
  getUrl() {
    return this.ctx.url;
  }
}

export = OldService;
