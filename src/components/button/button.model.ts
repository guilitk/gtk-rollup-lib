import React from "react";

export interface ButtonProps {
  density: "medium";
  style: "brand";
  type: "button";
  emphasis: "primary" | "tertiary";
  faIconClasses?: string[];
  progress?: boolean;
  children: React.ReactNode;
  onClick?: () => any;
}
