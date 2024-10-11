import React from "react";


export default function Title(props){
    console.log('title rerender ',props)
    return(
        <>
        <h1>the turn is for plyer <span>{props.playerTurn()}</span></h1>
        </>
    )
}