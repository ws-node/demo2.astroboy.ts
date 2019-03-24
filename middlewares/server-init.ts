import { serverInit } from "astroboy.ts";

async function DI_INIT({ ctx: context, next }) {
    try {
        return await serverInit(context, next);
    } catch (error) {
        console.log("DI UNHANDLED ERROR : ");
        console.log(error);
    }
}

export default DI_INIT;
