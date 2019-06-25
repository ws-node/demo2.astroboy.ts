import { Injectable, AstroboyContext } from "@exoskeleton/core";

namespace DataService {
  export interface Contract {
    readonly stamp: number;
    setStamp(v: number): void;
  }
}

@Injectable()
class DataService implements DataService.Contract {
  private value = 0;

  public get stamp() {
    return this.value;
  }

  constructor(public context: AstroboyContext) {}

  public setStamp(v: number) {
    this.value = v;
  }
}

export = DataService;
