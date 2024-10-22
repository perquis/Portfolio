const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "docs", "style", "refactor", "test", "chore", "docker"]],
    "subject-case": [2, "always", ["sentence-case", "lower-case"]],
    "header-max-length": [2, "always", 200],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(:\w*:)?\s?(\w*)(?:\((.*)\))?!?:\s(.*)$/,
      headerCorrespondence: ["emoji", "type", "scope", "subject"],
    },
  },
};

export default config;
