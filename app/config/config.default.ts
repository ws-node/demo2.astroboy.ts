import { ConfigReader } from "astroboy.ts";

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

export function woshinidie() {
    xFunc();
    return 123456;
}

export function sadvgasd() {
    console.log("fuck");
}

export function resolveV(path: typeof import("path")) {
    return { v: path.resolve(__dirname, "abcd") };
}

export function xFunc () {
    console.log({
        a: 124,
        b: "sdfad"
    });
}

export function xxxxxv() {
    return {
        a: 1234134,
        b: "245324",
        c: false,
        d: {
            e: [34243, "24353"],
        },
        f: Symbol("adsfadf")
    };
}

export default function DefaultCOnfigs (): IConfigs {
    const path = require("path");
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
        "a": woshinidie(),
        "b": "default",
        "c": {
            d: false,
            e: "352424"
        },
        "f": resolveV(path)
    };
}