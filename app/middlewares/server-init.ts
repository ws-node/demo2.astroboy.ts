// [astroboy.ts] 自动生成的代码
import astroboy_ts_1 = require("astroboy.ts");
async function DI_INIT(context, next) {
    return await astroboy_ts_1.serverInit(context, next);
}
export = () => DI_INIT;