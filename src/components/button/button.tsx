import React from "react"
import {ButtonProps} from "./button.model";
import "./button.css"

export const Button = (props:ButtonProps) =>{
    return <button className={"container"}>{props.label}</button>
}

