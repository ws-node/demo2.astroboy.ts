import { serverInit } from "astroboy.ts";

async function DI_INIT(context: any, next: any) {
    return await serverInit(context, next);
}

export default DI_INIT;
 