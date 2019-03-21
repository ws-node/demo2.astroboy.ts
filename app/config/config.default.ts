import { IStrictConfigsCompiler, ConfigReader } from "astroboy.ts";

type DIType = "proxy" | "native";

export interface IConfigs {
    "@astroboy.ts": {
        showTrace: boolean;
        diType: DIType;
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
    f: {
        v: string
    };
}

export class MyConfigsReader extends ConfigReader<IConfigs> { }

export default class NameClass implements IStrictConfigsCompiler<IConfigs> {

    imports() {
        return [
            "const path = require('path');"
        ];
    }

    configs(process: NodeJS.Process) {
        return {
            "@astroboy.ts": {
                showTrace: true,
                diType: <DIType>"proxy"
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
            },
            "f": ConfigReader.Expression(`{ v: path.resolve(__dirname, "abcd") },`)
        };
    }

}