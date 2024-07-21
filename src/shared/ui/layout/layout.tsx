import type { ComponentType } from "react";
import { Fragment } from "react";

type ComponentOrComponentWithProps<T = {}> = ComponentType<T> | [Component: ComponentType<T>, props: T];

type LayoutProps<T> = {
  components: ComponentOrComponentWithProps<T>[];
};

export default function Layout<T extends {}>({ components }: LayoutProps<T>) {
  return (
    <>
      {components.map((component, index) => {
        let Component: ComponentType<any>;
        let props = {};

        if (Array.isArray(component)) {
          [Component, props] = component;
        } else {
          Component = component;
        }

        return (
          <Fragment key={index}>
            <Component {...props} />
          </Fragment>
        );
      })}
    </>
  );
}
