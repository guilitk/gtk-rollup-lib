import {type ReactNode} from "react";
import {IconTypes} from "../icon/icon.model";

export type ButtonProps = {
  density?: "medium";
  style?: "brand" | "danger";
  type: "button";
  emphasis: "primary";
  icon?: IconTypes;
  progress?: boolean;
  children?: ReactNode;
  onClick?: () => any;
}
