import React from "react";
import './style.css';

export const Botao = (props) => {
    return (
       <button style={{
        backgroundColor: props?.backgroundColor,
        color: props?.color,
        width: props?.width,
        }}
        onClick={props?.onClick}
        >{props?.text}</button>
    )
}