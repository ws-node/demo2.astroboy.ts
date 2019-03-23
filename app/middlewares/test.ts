// [astroboy.ts] 自动生成的代码
import { injectScope, IMiddlewaresScope } from "astroboy.ts";
import astroboy_ts_1 = require("astroboy.ts");
import * as astroboy_ts_2 from "astroboy.ts";
import testA_1 = require("../utils/testA");
import test_b_1 = require("../utils/test-b");
import TestC_1 = require("../utils/TestC");
import Test_d_1 = require("../utils/Test-d");
async function testMiddleware(context, injector) {
    console.log(new Date().getTime());
    console.log(context.ctx.url);
    await testA_1.testA();
    await test_b_1.testB();
    await Test_d_1.testD();
    await TestC_1.testC();
    console.log({
        testA: testA_1.testA,
        testB: test_b_1.testB,
        testC: TestC_1.testC,
        testD: Test_d_1.testD
    });
    await this.next();
}
export = () => injectScope(async ({ injector, next }: IMiddlewaresScope) => {
  const _p0 = injector.get(astroboy_ts_1.AstroboyContext);
  const _p1 = injector.get(astroboy_ts_2.InjectService);
  await testMiddleware.call({ next }, _p0, _p1);
});