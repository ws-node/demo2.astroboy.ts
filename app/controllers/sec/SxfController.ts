import {
  Controller,
  GET,
  JsonResult,
  Context,
  RenderResult,
  Render
} from "@exoskeleton/core";
import MixinService from "../../services/mixin";
class WWWWWW {
  constructor(private ctx: any) {}

  protected toJSON(value: any): JsonResult {
    return new JsonResult(value, {
      jsonTemplate: {
        status: 200,
        msg: "success",
        data: null
      },
      jsonTplKey: "data"
    });
  }
}

class XXXXXX extends WWWWWW {
  constructor(ctx: any) {
    super(ctx);
  }

  protected toJSON(value: any): JsonResult {
    return new JsonResult(value, {
      jsonTemplate: {
        xCode: 0,
        msg: "success",
        data: null
      },
      jsonTplKey: "data"
    });
  }
}

@Controller("bbb")
class TestController extends XXXXXX {
  constructor(
    private context: Context,
    private render: Render,
    private mixin: MixinService
  ) {
    super(context.ctx);
  }

  @GET("xxcdc")
  public xxx() {
    return this.toJSON({
      abc: 123
    });
  }

  @GET("xxcdc2")
  public xxx2() {
    this.render.setView(
      {
        pageTitle: "woshinidie-title",
        testKey: 123456,
        loadFn: () => {
          return this.context.ctx.url;
        }
      },
      { toSnake: false }
    );
    console.log(this.mixin.stamp);
    // console.log(this.render.views);
    return new RenderResult("test/index.njk");
    // return new RenderResult({
    //   path: "test/index.njk",
    //   root: path.resolve(__dirname, "../../views2"),
    // });
  }
}
export = TestController;
