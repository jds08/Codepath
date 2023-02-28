import React from "react";
const Card  = (props) => {
return(
    <div className="card">
        <h1>{props.event_name}</h1>
        <img src = {props.img} width ="200" heigth ="100"></img>
        <p><strong>{props.date}</strong> <br></br>
        {props.description}</p>
        <a href={props.link}>More information & Sign Up</a>

        
    </div>
);
}

export default Card;