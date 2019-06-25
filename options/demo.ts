import { createConfig } from "@exoskeleton/core";

interface DemoOptions {
  /** ccccc */
  key01: number;
  key02: string;
}

export const DEMO_OPTIONS = createConfig<DemoOptions>("demo");
