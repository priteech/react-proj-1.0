import React from "react"
import ReactDOM from "react-dom"
import App from "../App"

 
function Joke(props)
{
    return(
        <div>
            <h3>Question:{ props.Question}</h3>
            <h3>Answer:{props.Answer}</h3>
           
        </div>
    )

}

export default Joke