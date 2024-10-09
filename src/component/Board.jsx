import React from "react"
import Place from "./Place"

export default function Board( props){
    let nextPlayer = props.gameSetting.nextPlayer();

    function addMove(id){
        //console.log('id addedp ',props.gameSetting.PlayerTurn())
        props.gameSetting.addMove(nextPlayer,id)
    }

    function isplayed(id){
        return props.gameSetting.movesX.includes(id) ? "X" :props.gameSetting.movesO.includes(id) ? "O":""
    }
      console.log("board is re-rendered ",props)
    return (
        <>
        <h1>Player  {nextPlayer}</h1>
        <div className="board">
            <Place id={1} add={()=>addMove(1)} isPlayed={isplayed(1)} />
            <Place id={2} add={()=>addMove(2)} isPlayed={isplayed(2)} />
            <Place id={3} add={()=>addMove(3)} isPlayed={isplayed(3)} />
            <Place id={4} add={()=>addMove(4)} isPlayed={isplayed(4)} />
            <Place id={5} add={()=>addMove(5)} isPlayed={isplayed(5)} />
            <Place id={6} add={()=>addMove(6)} isPlayed={isplayed(6)} />
            <Place id={7} add={()=>addMove(7)} isPlayed={isplayed(7)} />
            <Place id={8} add={()=>addMove(8)} isPlayed={isplayed(8)} />
            <Place id={9} add={()=>addMove(9)} isPlayed={isplayed(9)} />
        
        </div>
        </>
    )
}