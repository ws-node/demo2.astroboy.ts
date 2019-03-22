import { AstroboyContext } from "astroboy.ts";
import * as atc from "astroboy.ts";

export default async function testMiddleware(context: AstroboyContext, injector: atc.InjectService) {
    class X {}
    console.log(new Date().getTime());
    console.log(this);
    const arr: X[] = [];
    for (let i = 0; i < 20; i++) {
      console.log(i);
    }
    await this.next();
}
