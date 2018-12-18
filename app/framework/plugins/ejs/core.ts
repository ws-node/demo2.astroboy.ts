import ejs, { Options } from "ejs";
import path from "path";
import { Injectable, IViewEngine, Configs, Render } from "astroboy.ts";
import { EJS_ENGINE_OPTIONS } from "./options";

@Injectable()
export class EjsEngine implements IViewEngine {

  private get configs() { return this.cfg.get(EJS_ENGINE_OPTIONS); }

  constructor(private cfg: Configs, private rs: Render) { }

  public async render(name: string, configs: any): Promise<string> {
    const cf = this.configs;
    return ejs.renderFile(
      path.isAbsolute(name) ? name : `${cf.root}/${name}`,
      this.rs.views,
      <any>{ ...(cf || {}), ...configs, async: true }
    );
  }

  public async renderString(tpl: string, configs: any): Promise<string> {
    return ejs.render(
      tpl,
      this.rs.views,
      <Options & { async: true }>{ ...this.configs, ...configs, async: true }
    );
  }

}
