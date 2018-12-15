import { Render, Injectable, createInjectMixin, AstroboyContext } from "astroboy.ts";

@Injectable({
  token: Render
})
export class Render2 {

  private _render: Render;

  constructor(private _context: AstroboyContext) {
    this._render = new Render(_context);
    this._render.setView({
      loadFn01: () => {
        return `show url: ${this._context.ctx.url}`;
      },
      loadFn02: () => {
        return `show method : ${this._context.ctx.method}`;
      }
    });
    return createInjectMixin(this, ["_render"]);
  }

}