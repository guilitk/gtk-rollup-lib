import "@fortawesome/fontawesome-svg-core/styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {ButtonProps} from "./button.model";
import React from "react";
import cn from "classnames";

export const Button = (props: ButtonProps) => {
    return (
        <button
            onClick={props.onClick}
            className={cn(props.classes)}
        >
            {(props.faIconClasses && props.faIconClasses.length > 0) && <i className={cn(props.faIconClasses)}/>}
            {!props.progress && props.children}
            {props.progress === true && <FontAwesomeIcon
                icon={faSpinner}
                spin={true}
            />}
        </button>
    );
};
