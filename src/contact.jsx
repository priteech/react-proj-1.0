import React from "react"


function Contact(props)

{
    return(
        <div> <h1>Name:{props.A.Name}</h1>
        <p> phone:{props.A.Phone}</p>
        <p> email: {props.A.email}</p>
        </div>
    
    )
}

export default  Contact