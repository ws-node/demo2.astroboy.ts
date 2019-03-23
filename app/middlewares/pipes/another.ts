import { AstroboyContext } from "astroboy.ts";

// export default function AnotherFn(context: AstroboyContext) {
//     console.log([context]);
// }

export default async function AnotherFn({ ctx, next }) {
    console.log([ctx]);
    await next();
}