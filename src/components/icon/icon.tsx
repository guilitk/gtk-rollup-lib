import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faSignOut, faSpinner } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {IconProps} from "./icon.model";

export const Icon = (props:IconProps) => {
    const getIcon = () => {
        switch (props.iconType) {
            case "signIn":
                return <FontAwesomeIcon icon={faSignIn} />;
            case "signOut":
                return <FontAwesomeIcon icon={faSignOut} />;
                case "progress":
                return <FontAwesomeIcon icon={faSpinner} />;
        }
    };
    return getIcon();
};
