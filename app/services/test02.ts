import { Injectable, InjectScope } from "@exoskeleton/core";

namespace Test02Service {
  export interface Contract {
    add(v: number): void;
    showValue(): number;
  }
}

@Injectable(InjectScope.Singleton)
class Test02Service implements Test02Service.Contract {
  private value = 98765;

  public add(v: number) {
    this.value += v;
  }

  public showValue() {
    return this.value;
  }
}

export = Test02Service;
