import React, { ReactNode } from 'react';

type IconTypes = "signIn" | "signOut" | "progress";

type ButtonProps = {
    density?: "medium";
    style?: "brand" | "danger";
    type: "button";
    emphasis: "primary";
    icon?: IconTypes;
    progress?: boolean;
    children?: ReactNode;
    onClick?: () => any;
};

declare const Button: (props: ButtonProps) => React.JSX.Element;

export { Button };
