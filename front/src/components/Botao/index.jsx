import React from "react";
import './style.css';

export const Botao = (props) => {
    return (
       <button style={{
        backgroundColor: props?.backgroundColor,
        color: props?.color,
        width: props?.width,
        border: props?.border
        }}
        onClick={props?.onClick}
        >{props?.text}</button>
    )
}