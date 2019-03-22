import { AstroboyContext } from "astroboy.ts";
import * as atc from "astroboy.ts";

export default async function testMiddleware(context: AstroboyContext, injector: atc.InjectService) {
    console.log(new Date().getTime());
}
