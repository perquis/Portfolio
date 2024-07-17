import clsx from "clsx";
import type { ComponentProps } from "react";

type IForm = ComponentProps<"form">;

export default function Form({ children, className, onSubmit = (e) => e.preventDefault(), ...props }: IForm) {
  return (
    <form onSubmit={onSubmit} className={clsx("flex flex-col gap-3", className)} {...props}>
      {children}
    </form>
  );
}
