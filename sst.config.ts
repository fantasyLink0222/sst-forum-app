import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "my-sst-app",
      region: "ca-central-1",
    };
  },
  stacks(app) {
    app.stack(API);
  }
} satisfies SSTConfig;
