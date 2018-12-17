import path from "path";
import { createOptions } from "astroboy.ts";

export interface IEjsRenderOptions {
  root: string;
  cache: boolean;
}

export const defaultEjsOptions: IEjsRenderOptions = {
  root: path.resolve(process.cwd(), "app/views"),
  cache: false,
};

export const EJS_ENGINE_OPTIONS = createOptions<IEjsRenderOptions>("EJS_ENGINE_OPTIONS");
