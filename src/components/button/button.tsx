import React from "react"
import {ButtonProps} from "./button.model";
import styles from "./button.module.css"

export const Button = (props:ButtonProps) =>{
    return <button className={styles.container}>{props.label}</button>
}

