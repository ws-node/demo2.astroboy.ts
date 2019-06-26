import { IConfigs } from "./config.default";

function NameClass2(): Partial<IConfigs> {
  const path = require("path");
  return {
    b: "daily"
  };
}

export default NameClass2;
