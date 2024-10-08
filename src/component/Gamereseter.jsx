import React from "react"


export default function Gamerester(props){
    console.log(props)
    return (
        <div className="card" >
            <h1 className="title">the game session is done</h1>
            <h2 className="subtitle">and winner is <span>{props.winner}</span></h2>
            <button className="restbutton" onClick={()=> props.mReset()}>Reset</button>
        </div>
    ) 

}