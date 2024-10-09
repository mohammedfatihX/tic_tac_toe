import React from "react"


export default function Gamerester(props){
    console.log(props)
    return (
        <div className="card" >
            <h1 className="title">the game is done</h1>
            {['X','O'].includes(props.winner) ? <h2 className="subtitle">and winner is <span>{props.winner}</span></h2>:
                <h2 className="subtitle">there's no winner it's a <span>DRAW</span></h2>
            }
            
            <button className="restbutton" onClick={()=> props.mReset()}>Reset</button>
        </div>
    ) 

}