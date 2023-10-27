import React from "react";
export interface ButtonProps {
    classes?: string[];
    faIconClasses?: string[];
    progress?: boolean;
    children: React.ReactNode;
    onClick?: () => any;
}
