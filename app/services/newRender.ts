import { Render, Injectable, createInjectMixin, AstroboyContext } from "astroboy.ts";

@Injectable({
  token: Render
})
// 单继承实现注入分离
export class Render2 extends Render {

  constructor(_context: AstroboyContext) {
    super(_context);
    this.setView({
      loadFn01: () => {
        return `show url: ${_context.ctx.url}`;
      },
      loadFn02: () => {
        return `show method : ${_context.ctx.method}`;
      }
    });
  }

}
// 多重继承组合实现注入分离
// export class Render2 {

//   private _render: Render;

//   constructor(private _context: AstroboyContext) {
//     this._render = new Render(_context);
//     this._render.setView({
//       loadFn01: () => {
//         return `show url: ${this._context.ctx.url}`;
//       },
//       loadFn02: () => {
//         return `show method : ${this._context.ctx.method}`;
//       }
//     });
//     return createInjectMixin(this, ["_render"]);
//   }

// }