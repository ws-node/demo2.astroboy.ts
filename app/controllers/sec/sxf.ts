import { Controller, GET, JsonResult, Context, RenderResult } from "astroboy.ts";

class WWWWWW {

  constructor(private ctx: any) {

  }

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

  constructor(private context: Context) {
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
    return new RenderResult({
      path: "",
      engine: "xxx",
      engines: {
        xxx: undefined
      }
    });
  }

}
export = TestController;
