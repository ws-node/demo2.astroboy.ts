// [astroboy.ts] 自动生成的代码
import astroboy_ts_1 = require("astroboy.ts");
async function DI_INIT({ ctx: context, next }) {
    try {
        return await astroboy_ts_1.serverInit(context, next);
    }
    catch (error) {
        console.log("DI UNHANDLED ERROR : ");
        console.log(error);
    }
}
export = (options: any = {}, app: any) => async (ctx: any, next: any) => {
    return await DI_INIT(<any>{ ctx, options, app, next });
};