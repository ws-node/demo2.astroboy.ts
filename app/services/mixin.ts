import { Injectable, Context, IContext, createInjectMixin } from "astroboy.ts";
import DataService from "./Data";
import TestService from "./test";
import Test02Service from "./test02";
import T01Service from "./t01";
import T05Service from "./t05";
import T06Service from "./t06";
import T07Service from "./t07";
import T08Service from "./t08";
import T04Service from "./t04";
import T03Service from "./t03";
import T02Service from "./t02";

namespace MixinService {
  export interface Contract extends Context.Contract, DataService.Contract, TestService.Contract, Test02Service.Contract {
    /** 重载：TestService.add */
    add(v: string): void;
    /** 重载：Test02Service.add */
    add(v: number): void;
    /** 重载：TestService.showValue */
    showValue(type: 1): number;
    /** 重载：TestService02.showValue */
    showValue(type: 2): number;
    /** 重载：TestService02.showValue */
    showValue(): number;
  }
}

abstract class MixinService implements MixinService.Contract {
  t01: T01Service;
  t02: T02Service;
  t03: T03Service;
  t04: T04Service;
  t05: T05Service;
  t06: T06Service;
  t07: T07Service;
  t08: T08Service;
  context: Context<IContext>;
  public thisValue: number;
  public ctx: IContext;
  public stamp: number;
  /** 重载：TestService.add */
  public abstract add(v: string): void;
  /** 重载：Test02Service.add */
  public abstract add(v: number): void;
  /** 重载：TestService.showValue */
  public abstract showValue(type: 1): number;
  /** 重载：TestService02.showValue */
  public abstract showValue(type: 2): number;
  /** 重载：TestService02.showValue */
  public abstract showValue(): number;
  // 其余的都可以简单地进行proxy转发
  public abstract reset(v: number): void;
  public abstract demoMethod2(): number;
  public abstract setStamp(v: number): void;
}

@Injectable({ token: MixinService })
class MixinServiceImplement {

  constructor(private context: Context<{}>, private test: TestService, private test02: Test02Service, private data: DataService) {
    return createInjectMixin(this, [
      "context",
      "test",
      "test02",
      "data"
    ]);
  }

  public add(v: number | string): void {
    if (typeof v === "number") return this.test02.add(v);
    return this.test.add(v);
  }

  public showValue(type?: 1 | 2) {
    if (type === 1) return this.test.showValue();
    return this.test02.showValue();
  }

}

export = MixinService;