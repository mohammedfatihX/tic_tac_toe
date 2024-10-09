import React from "react"


export default function Place (props){
    let x = () => console.log(props.id)
    console.log("button place is rerendered")
 switch(props.isPlayed){
    case "X" :
        return (
            <button className="place"  style={{backgroundColor:"#FF0000"}}>{props.place}</button>
        )
        break;
    case "O":
        return(
            <button className="place"  style={{backgroundColor:"#00FF00"}}>{props.place}</button>
        ) 
        
        break;
    default:
        return(
            <button onClick={()=>props.add()} className="place">{props.place}</button>
        )
 }
    
}