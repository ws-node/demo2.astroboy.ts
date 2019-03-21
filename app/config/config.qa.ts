import { IConfigsCompiler, DefineConfig, ConfigReader } from "astroboy.ts";
import { IConfigs } from "./config.default";

function env(path: typeof import("path")) {
    return path.delimiter === ";" ? "qa" : "unknown";
}

@DefineConfig({
    modules: { path: "path" },
    functions: [ env ]
})
class NameClass2 implements IConfigsCompiler<IConfigs> {
    configs(process: NodeJS.Process) {
        return {
            b: ConfigReader.Expression("env(path)")
        };
    }
}

export = NameClass2;