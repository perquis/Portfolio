import type { ComponentProps } from "react";

import type { icons } from "@/shared/icons";

export type ButtonProps = ComponentProps<"button">;
type ExcludedSize = Exclude<Size, "tiny">;
type IconName = keyof typeof icons;

export interface IIconButton {
  size: ExcludedSize;
  icon: IconName;
  children: ButtonProps["children"];
}

type IconButtonWithIcon = Omit<IIconButton, "children"> & { icon: IconName; children?: never };
type IconButtonWithChildren = Omit<IIconButton, "icon"> & { children: ButtonProps["children"]; icon?: never };

export type TIconButton = IconButtonWithIcon | IconButtonWithChildren;

export type ButtonPropsWithSize = Pick<IIconButton, "size"> & ButtonProps;
export type IconButtonProps = TIconButton & ButtonProps;