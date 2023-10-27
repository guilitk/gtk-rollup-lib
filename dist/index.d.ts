import React from 'react';

interface ButtonProps {
    density: "medium";
    style: "brand";
    type: "button";
    emphasis: "primary" | "tertiary";
    faIconClasses?: string[];
    progress?: boolean;
    children: React.ReactNode;
    onClick?: () => any;
}

declare const Button: (props: ButtonProps) => React.JSX.Element;

export { Button };
