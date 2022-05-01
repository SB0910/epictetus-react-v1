import React from "react";

export default function Logo(props){
    return(
        <div className="logo">
            <svg src={props.logo} alt=''/>
        </div>
    );
}