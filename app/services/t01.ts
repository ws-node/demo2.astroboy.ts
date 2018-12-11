import { Injectable, Context, injectScope } from "astroboy.ts";
import T05Service from "./t05";
import T06Service from "./t06";
import T07Service from "./t07";
import T08Service from "./t08";
import T04Service from "./t04";
import T03Service from "./t03";
import T02Service from "./t02";

@Injectable({})
class T01Service {

  constructor(
    public t02: T02Service,
    public t03: T03Service,
    public t04: T04Service,
    public t05: T05Service,
    public t06: T06Service,
    public t07: T07Service,
    public t08: T08Service,
    public context: Context) { }

}

export = T01Service;