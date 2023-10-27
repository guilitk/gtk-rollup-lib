import {ButtonProps} from "./button.model";
import React from "react";
import cn from "classnames";
import {Icon} from "../icon/icon";
import styles from "./button.module.scss";

export const Button = (props: ButtonProps) => {
    return (
        <button
            onClick={props.onClick}
            className={cn(styles[props.type],styles[props.emphasis])}
        >
            {props.icon && <Icon iconType={props.icon}/>}
            {!props.progress && props.children}
            {props.progress && <Icon iconType={"progress"}/>}
        </button>
    );
};
