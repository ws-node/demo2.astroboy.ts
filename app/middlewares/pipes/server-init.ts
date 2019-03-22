import { serverInit } from "astroboy.ts";

function DI_INIT(context: any, next: any) {
    return serverInit(context, next);
}

export default DI_INIT;
