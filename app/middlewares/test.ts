import { AstroboyContext, IMiddlewaresScope, injectScope } from "@exoskeleton/core";
import * as atc from "@exoskeleton/core";
import { testA } from "../utils/testA";
import { testB } from "../utils/test-b";
import { testC } from "../utils/TestC";
import { testD } from "../utils/Test-d";
async function testMiddleware(context: AstroboyContext, injector: atc.InjectService) {
    console.log(new Date().getTime());
    console.log(context.ctx.url);
    await testA();
    await testB();
    await testD();
    await testC();
    console.log({
        testA,
        testB,
        testC,
        testD
    });
    // throw new Error("fuck");
    await this.next();
}
export = (options: any = {}, app: any) => injectScope(async ({ injector, next }: IMiddlewaresScope) => {
    const _p0 = injector.get(AstroboyContext);
    const _p1 = injector.get(atc.InjectService);
    await testMiddleware.call({ next, options, app }, _p0, _p1);
});
