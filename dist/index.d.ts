import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps {
    density: "medium";
    style: "brand";
    type: "button";
    emphasis: "primary" | "tertiary";
    faIconClasses?: string[];
    faIcon?: IconDefinition;
    progress?: boolean;
    children: React.ReactNode;
    onClick?: () => any;
}

declare const Button: (props: ButtonProps) => React.JSX.Element;

export { Button };
