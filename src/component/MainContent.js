import React from "react";

import '../App.css';



function MainContent(){
const date = new Date()
const hours = date.getHours()
let timeOfDay

if (hours<12){
            timeOfDay= "Good Morning"
        }
        else if(hours>=12 && hours < 17) {
            timeOfDay="Good Afternoon"
            
        } else { timeOfDay="Night"
            
        }
        
        return(<div className='body'>
            <input type= "textbox"></input>
            <p>Input text</p>
            <h3>Hi I am ABC</h3>
            
            <input type= "textbox"></input>
            <p>Input text</p>
            
            <input type= "textbox"></input>
            <p>Input text</p>
            <input type= "textbox"></input>
            <p>Input text</p>
            
            <h1>Good {timeOfDay}</h1></div>)
    }
        
        




export default MainContent 