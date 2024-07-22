// https://gist.github.com/phatnguyenuit/68122170e317d13e7148c7563be021b6
import React from "react";

interface Provider<TProps> {
  Component: React.ComponentType<React.PropsWithChildren<TProps>>;
  props?: Omit<TProps, "children">;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function composeProviders<TProviders extends Array<Provider<any>>>(
  providers: TProviders,
): React.ComponentType<React.PropsWithChildren> {
  const ProviderComponent: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
    const initialJSX = <>{children}</>;

    return providers.reduceRight<JSX.Element>((prevJSX, { Component: CurrentProvider, props = {} }) => {
      return <CurrentProvider {...props}>{prevJSX}</CurrentProvider>;
    }, initialJSX);
  };

  return ProviderComponent;
}

export function createProvider<TProps>(
  Component: React.ComponentType<React.PropsWithChildren<TProps>>,
  props?: Omit<TProps, "children">,
): Provider<TProps> {
  return { Component, props };
}
