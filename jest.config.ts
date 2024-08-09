import type { Config } from "@jest/types";

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config.InitialOptions = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  globals: {
    "ts-jest": {
      useESM: true,
      tsconfig: {
        verbatimModuleSyntax: false,
      },
    },
  },
};

module.exports = createJestConfig(config);
