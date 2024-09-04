import React from "react";

export default function WrapperComponent() {
    return <>
    <CardWrapper>
        <h2>Hello World</h2>
    </CardWrapper>
    <CardWrapper>
        <h2>Hello World</h2>
    </CardWrapper>

    </>
}

function CardWrapper({children}){

    return(
        <div style={{backgroundColor:"red", color:"white", width:"200px", height:"200px"}}>
         {children}

        </div>
    )
}