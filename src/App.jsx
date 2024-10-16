import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './component/Board'
import Gamerester from './component/Gamereseter'

function App() {

  let gameObject= {
    Game:"tic_tac_toe",
    gameRenderedTimes:0,
    isGameStillRunnning:true,
    isGameFirstMove:true,
    Players:["X","O"],
    turns:[],
    Winner:"",
    nextPlayer:function(){
      if(!this.turns.length){
        let x = this.Players[Math.floor(Math.random()*this.Players.length)]
        console.error('the pppppppppplyer first go is : ',x )
        return x
      }
      let next = this.turns[this.turns.length-1] ==='X' ? 'O' : 'X'
      console.log('form next plyer function next is : ',next)
      return next
    },
    PlayerTurn:function(){
        // if(this.turns.length){
        //  return this.nextPlayer()
        // }
        console.log("plyerTurn is called")
      // return this.turns[this.turns.push(this.movesX.length > this.movesO.length ? "O":"X")-1]
      return this.turns[this.turns.length-1]
    },
    movesX:[],
    movesO:[],
    addMove:function(player,move){
      player === "X" ? this.movesX.push(move) : this.movesO.push(move)
      if((this.movesO.length +this.movesX.length) >= 4){
        this.Winner = this.check_wining_player(this.movesX) ? "X" : this.check_wining_player(this.movesO) ? "O" :"" 
        if((this.movesO.length+this.movesX.length) == 9 && this.Winner == ''){
          this.Winner='draw'
        }
      }
      this.turns.push(player)
      setGame(prev =>({...prev,gameRenderedTimes:prev.gameRenderedTimes+1}))
    },
      //so this function you need to give it moves of plyer and then it will tell you if player is wining or not 
    //based on thier moves by comparing it wiht all win moves in the win_combo array
    check_wining_player:function (playersMoves){
      let winingCombos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[7,5,3]]
      let checking_fun = (moves,combos) => combos.every(item_combo => moves.includes(item_combo))
      return winingCombos.some(winCombo => checking_fun(playersMoves,winCombo))
    }
  }
  let [game,setGame] = useState(gameObject)

  function resetGame (){
    setGame((prev)=> ({...prev,movesO:[],movesX:[],Winner:"",turns:[]}) )
  }

  return (
    <>
      {console.error("the app component is re-rendered")}
    {game.Winner ?  <Gamerester  {...{winner:game.Winner,mReset:resetGame}} /> : <Board gameSetting={game} setGame={setGame}/> }
    </>
  )
}

export default App