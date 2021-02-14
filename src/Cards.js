import React from 'react';
import './Cards.css';
function Card(props){
   return(<>
   
    <div className="cards">
        <div className="card-img">
            <img src={props.imgsrc} alt="imageNetflix"/>
        </div>
        <div className="card-info">
            <h2 className="title">{props.title} </h2>
            <span className="description">{props.description}</span>
            
        </div>
        <div className="btn">
            <a href={props.link} className="play-btn">
        </a>
        </div>
    </div>
    
   </>)
}

export default Card;