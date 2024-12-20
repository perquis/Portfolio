import { describe, expect, it } from "@jest/globals";

import { composeProviders, createProvider } from "@/shared/utils/providers";

describe("providers", () => {
  it("should create provider with props", () => {
    const provider = createProvider(() => null, { key: "value" });

    expect(provider).toEqual({
      Component: expect.any(Function),
      props: { key: "value" },
    });
  });

  it("should create provider without props", () => {
    const provider = createProvider(() => null);

    expect(provider).toEqual({
      Component: expect.any(Function),
    });
  });

  it("should compose providers", () => {
    const provider1 = createProvider(() => null, { key: "value" });
    const provider2 = createProvider(() => null, { key2: "value2" });

    const composedProvider = composeProviders([provider1, provider2]);

    expect(composedProvider).toEqual(expect.any(Function));
  });
});
