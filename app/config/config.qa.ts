import { IConfigs } from "./config.default";

export function env(path: typeof import("path")) {
    return path.delimiter === ";" ? "qa" : "unknown";
}

export default function NameClass2(): Partial<IConfigs> {
    const path = require("path");
    return {
        b: env(path)
    };
}