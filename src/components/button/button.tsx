import "@fortawesome/fontawesome-svg-core/styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
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
            {props.faIcon && <FontAwesomeIcon icon={faSpinner}/>}
            {!props.progress && props.children}
            {props.progress === true && <FontAwesomeIcon
                icon={faSpinner}
                spin={true}
            />}
        </button>
    );
};
