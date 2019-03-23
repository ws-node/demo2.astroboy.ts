import { AstroboyContext } from "astroboy.ts";
import * as atc from "astroboy.ts";
import { testA } from "../../utils/testA";
import { testB } from "../../utils/test-b";
import { testC } from "../../utils/TestC";
import { testD } from "../../utils/Test-d";

export default async function testMiddleware(context: AstroboyContext, injector: atc.InjectService) {
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
    await this.next();
}
