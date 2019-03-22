// [astroboy.ts] 自动生成的代码
import { injectScope } from "astroboy.ts";
import astroboy_ts_1 = require("astroboy.ts");
import * as astroboy_ts_2 from "astroboy.ts";
async function testMiddleware(context, injector) {
    console.log(new Date().getTime());
}
export = () => injectScope(async ({ injector, next }: any) => {
  const _p0 = injector.get(astroboy_ts_1.AstroboyContext);
  const _p1 = injector.get(astroboy_ts_2.InjectService);
  await testMiddleware(_p0, _p1);
  await next();
});