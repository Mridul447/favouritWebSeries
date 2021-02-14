import React from 'react';
import Card from './Cards';
import Data from './Data';
import './App.css';

function eachCard(val){
    return ( 
   <Card imgsrc={val.imgsrc} title={val.title} link={val.link} description={val.description} />
    )
        
}
function App(){
   return(
       <>
       <h1 className="neons">Favourite Web-Series Collections</h1>

        {Data.map(eachCard)}

       <div className="footer">
        <h4>Created by-</h4>
        <span className="created-by"><strong><a href="https://www.linkedin.com/in/abhinandanmishra1">Abhinandan Mishra</a></strong></span>
       </div>
       </>
   )
}

export default App;