import { IStrictConfigsCompiler, ConfigReader } from "astroboy.ts";

export interface IConfigs {
    "@astroboy.ts": {
        showTrace: boolean;
        diType: "proxy" | "native";
    };
    demo: {
        key01: number;
        key02: string;
    };
    strOpt: string;
    a: number;
    b: string;
    c: {
        d: boolean,
        e?: string
    };
}

export class MyConfigsReader extends ConfigReader<IConfigs> { }

export default class NameClass implements IStrictConfigsCompiler<IConfigs> {

    configs(process: NodeJS.Process) {
        return {
            "@astroboy.ts": {
                showTrace: true,
                diType: <"proxy" | "native">"proxy"
            },
            "demo": {
                key01: 12345,
                key02: "woshinidie"
            },
            "strOpt": "test_string_config",
            "a": 3241234324,
            "b": "default",
            "c": {
                d: false,
                e: "352424"
            }
        };
    }

}