import { Injectable, Context } from "astroboy.ts";
import T08Service from "./t08";

@Injectable()
class T07Service {

  constructor(public t08: T08Service, public context: Context) { }

}

export = T07Service;