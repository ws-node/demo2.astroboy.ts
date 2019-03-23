import { IConfigs } from "./config.default";
import path  from "path";

export function env(path: typeof import("path")) {
    return path.delimiter === ";" ? "qa" : "[unknown]";
}

export default function NameClass2(): Partial<IConfigs> {
    return {
        b: env(path)
    };
}