import React from "react"

export default function Card(props) {
   
    
    return (
        <div className="card">
       
                    <img src={`../images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
            <div className="location">
             <img src="../images/location.jpg" className="card--star" /> 
             <p className="card--location">{props.item.location}</p>
             </div>
                     <h1 className="card--title">{props.item.title}</h1>
                     <h3 className="card--Date">{props.item.Date}</h3>
                     <p className="card--Info" > {props.item.Info}</p>
                   
                     </div>
                
               
          
            
        </div>
    )
}
// <img src="../images/star.png"  /> 
//      <span>{props.item.stats.rating}</span>
// <span className="gray">({props.item.stats.reviewCount}) • </span>
//     <span className="gray">{props.item.location}</span>
// <p className="card--price"><span className="bold">From ${props.item.price}</span> /