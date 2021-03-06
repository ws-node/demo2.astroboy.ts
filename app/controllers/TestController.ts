import TestService from "../services/test";
import Test02Service from "../services/test02";
import BusinessContext from "../services/business-context";
import DataService from "../services/Data";
import MixinService from "../services/mixin";
import {
  Controller,
  Configs,
  AstroboyContext,
  JsonResult,
  GET,
  POST,
  FromParams,
  FromBody,
  Deserialize,
  IContext,
  BASE_ROUTE_DECO_FACTORY,
  RenderResult,
  Render,
  FromQuery,
  Middlewares
} from "@exoskeleton/core";
import { STR_OPT } from "../../options/strOpt";
import { DEMO_OPTIONS } from "../../options/demo";
import { MyConfigsReader } from "../config/config.default";

function Param(key: string) {
  return FromParams({
    useStatic: true,
    transform: data => data[key]
  });
}

function Query(key: string, useTypes: any[] = []) {
  return FromQuery({
    useStatic: true,
    transform: data => data[key]
    // useTypes,
    // useStatic: false,
    // transform: (data) =>  data[key],
    // finally: (data, types = []) => {
    //   console.log(types);
    //   if (types.includes(Number)) return Number(data) || "蔡徐坤";
    //   if (types.includes(Boolean)) return String(data) === "true";
    //   return data;
    // }
  });
}

function MyGet(path: string) {
  return BASE_ROUTE_DECO_FACTORY({
    method: "GET",
    force: true,
    patterns: [
      `api/{{@group}}/fuck-you/${path}`,
      `m/{{@group}}/fuck-you-again/${path}`,
      `xxx/{{@group}}/hahahahahaha/${path}`
    ]
  });
}

interface GetQuery {
  id: string;
  name: string;
  fuck: string;
}

interface PostData {
  id: number;
  name: string;
}

class ClassQuery {
  @Deserialize()
  readonly id: number;

  @Deserialize()
  readonly type: string;

  @Deserialize()
  readonly isTrue: boolean;
}

@Controller({
  group: "test",
  pattern: {
    patterns: ["api/{{@group}}/{{@path}}"]
  }
})
@Middlewares(
  [
    (context: TestController) => {
      console.log(context.data);
      throw new Error("wgnm");
    }
  ],
  {
    closeOnThrows: true,
    onError(context: TestController, error) {
      console.log(error);
      context["business"].ctx.body = "nmsl";
    }
  }
)
class TestController {
  constructor(
    private configs: Configs,
    private reader: MyConfigsReader,
    private mixin: MixinService,
    private base: AstroboyContext<IContext & { fakeId: string }>,
    private business: BusinessContext,
    private render: Render,
    private data: DataService,
    private test: TestService,
    private test02: Test02Service
  ) {}

  @GET("get")
  @Middlewares.Crear()
  public Get(@FromParams() params: GetQuery) {
    const { ctx } = this.base;
    const { id, name } = params;
    ctx.type = "application/json";
    return new JsonResult({
      id,
      name,
      url: ctx.url,
      configs: this.reader.global
    });
  }

  @MyGet("hei-hei-hei")
  public MyGet() {
    return new JsonResult({
      msg: "66666666666"
    });
  }

  // @GET("get")
  // public Get(@FromParams() params: GetQuery) {
  //   const { ctx } = this.base;
  //   const { id, name } = params;
  //   ctx.type = "application/json";
  //   ctx.body = JSON.stringify({
  //     id,
  //     name,
  //     url: ctx.url,
  //   });
  // }

  // @POST("post/:type")
  // public async Post(@FromParams() params: ClassQuery, @FromBody() { id, name }: PostData) {
  //   const { type, id: id2, isTrue } = params;
  //   return new JsonResult({
  //     id,
  //     name,
  //     type,
  //     id2,
  //     isTrue,
  //     data: this.data.stamp,
  //     config: {
  //       str_opt: this.configs.get(STR_OPT),
  //       demo_options: this.configs.get(DEMO_OPTIONS)
  //     }
  //   });
  // }

  @POST("post/:type")
  public async Post(
    @Param("type") type: string,
    @Query("id") id2: number,
    @Query("isTrue") isTrue: boolean,
    @FromBody() body: PostData
  ) {
    console.log({ type, id2, isTrue });
    const { id, name } = body;
    this.mixin.add("222");
    this.mixin.add(222);
    return new JsonResult({
      id,
      name,
      type,
      id2,
      isTrue,
      data: this.data.stamp,
      config: {
        str_opt: this.configs.get(STR_OPT),
        demo_options: this.configs.get(DEMO_OPTIONS)
      },
      mixin: {
        stamp: this.mixin.stamp,
        strOpt: this.mixin.ctx.getConfig("strOpt"),
        testValue: this.mixin.showValue(1),
        test02Value: this.mixin.showValue(2)
      }
    });
  }

  @GET("get2/:fuck")
  public async GetMore(@FromParams() params: GetQuery) {
    const { id, name, fuck } = params;
    this.test02.add(345);
    this.test.reset(4534);
    console.log("what ths fuck");
    // const env = this.configs.get(ENV);
    // console.log(env);
    // console.log(this.base);
    // throw new Error("fuck");
    // await this.delay(250);
    // console.log(this.base.config);
    this.render.setView({
      loadFn: () => "fuck",
      status: this.test.demoMethod2(),
      // config: this.base.getConfig(),
      // haha: this.notMethod(),
      // env,
      query_id: id,
      query_name: name,
      query_fuck: fuck,
      ctx: this.business.ctx === this.base.ctx,
      t05: this.test.t05 === this.test.t02.t05,
      t08: this.test.t08 === this.test.t06.t08
    });
    return new RenderResult({
      path: "test/index.njk",
      astConf: {
        use: false,
        configs: {},
        state: {}
      }
    });
  }

  private notMethod() {
    return "hahaha";
  }

  private delay(time = 100) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
}

export = TestController;
