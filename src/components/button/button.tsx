import React from "react"
import {ButtonProps} from "./button.model";

export const Button = (props:ButtonProps) =>{
    return <button>{props.label}</button>
}

