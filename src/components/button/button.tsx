import React from "react";
import {ButtonProps} from "./button.model";
import "../../procempa-ds.css";


export const Button = (props:ButtonProps) =>{
    return <button className={"br-button primary"}><i className={"fa fa-spin fa-spinner"}></i>{props.label}</button>
}

