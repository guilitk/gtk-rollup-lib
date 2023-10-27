import styles from "./button.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ButtonProps } from "./button.model";
import React from "react";
import cn from "classnames";

export const Button = (props: ButtonProps) => {
    return (
    <button
      onClick={props.onClick}
      className={cn(props.progress ? styles.hideText : undefined)}
    >
      {props.faIconClasses ? <i className={cn(props.faIconClasses)} /> : undefined}
      {props.children}
      <FontAwesomeIcon
        className={cn(styles.spinner,props.progress ? styles.showSpinner : undefined)}
        icon={faSpinner}
        spin={true}
      />
    </button>
  );
};
