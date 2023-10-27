import {ButtonProps} from "./button.model";
import React from "react";
import cn from "classnames";
import "../../styles/global.css";

export const Button = (props: ButtonProps) => {
    return (
        <button
            onClick={props.onClick}
            className={cn("br-button",props.emphasis)}
        >
            {props.faIcon && <i className={cn(props.faIconClasses)}></i>}
            {!props.progress && props.children}
            {props.progress === true && <i className={cn("fa fa-spin fa-spinner")}></i>}
        </button>
    );
};
