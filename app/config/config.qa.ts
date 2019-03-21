import { IConfigsCompiler } from "astroboy.ts";
import { IConfigs } from "./config.default";

export = class NameClass2 implements IConfigsCompiler<IConfigs> {

    configs(process: NodeJS.Process) {
        return {
            b: "qa"
        };
    }

};