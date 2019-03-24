import { serverInit } from "astroboy.ts";

async function DI_INIT({ ctx: context, next }) {
    return await serverInit(context, next);
}

export default DI_INIT;
