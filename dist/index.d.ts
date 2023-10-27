import React from 'react';

interface ButtonProps {
    classes?: string[];
    faIconClasses?: string[];
    progress?: boolean;
    children: React.ReactNode;
    onClick?: () => any;
}

declare const Button: (props: ButtonProps) => React.JSX.Element;

export { Button };
