import { AstroboyContext } from "@exoskeleton/core";
import * as atc from "@exoskeleton/core";
import { testA } from "../app/utils/testA";
import { testB } from "../app/utils/test-b";
import { testC } from "../app/utils/TestC";
import { testD } from "../app/utils/Test-d";

export default async function testMiddleware(
  context: AstroboyContext,
  injector: atc.InjectService
) {
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
