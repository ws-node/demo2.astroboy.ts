import { Controller, GET, JsonResult } from "astroboy.ts";

class XXXXXX {

}

@Controller("bbb")
class TestController extends XXXXXX {

  @GET("xxcdc")
  public xxx() {
    return new JsonResult({
      abc: 123
    });
  }

}
export = TestController;
