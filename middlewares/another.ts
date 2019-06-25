import { AstroboyContext } from "@exoskeleton/core";

// export default function AnotherFn(context: AstroboyContext) {
//     console.log([context]);
// }

export default async function AnotherFn({ ctx, next }) {
  console.log([ctx, next]);
  await next();
}
