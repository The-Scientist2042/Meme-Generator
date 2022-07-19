import React from "react";

export default function Star(props){
    return(
        <div onClick={props.ha}>
            {props.isFilled}
        </div>
    )
}