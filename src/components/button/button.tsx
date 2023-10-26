import React from "react";
import classNames from "classnames";
import {ButtonProps} from "./button.model";
import "../../procempa-ds.css"


export const Button = (props:ButtonProps) =>{
    return <button className={classNames("br-button","primary")}><i className={classNames("fa fa-spin fa-spinner")}></i>{props.label}</button>
}

