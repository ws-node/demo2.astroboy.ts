// [astroboy.ts] 自动生成的代码
import { injectScope } from "astroboy.ts";
import astroboy_ts_1 = require("astroboy.ts");
import * as astroboy_ts_2 from "astroboy.ts";
async function testMiddleware(context, injector) {
    class X {
    }
    console.log(new Date().getTime());
    console.log(this);
    const arr = [];
    for (let i = 0; i < 20; i++) {
        console.log(i);
    }
    await this.next();
}
export = () => injectScope(async ({ injector, next }: any) => {
  const _p0 = injector.get(astroboy_ts_1.AstroboyContext);
  const _p1 = injector.get(astroboy_ts_2.InjectService);
  await testMiddleware.call({ next }, _p0, _p1);
});