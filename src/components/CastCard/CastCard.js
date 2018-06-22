import React from "react";
import "./CastCard.css";

const CastCard = props => (
  <div className="card" onClick={() => props.cardClick(props.id)} >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  
  </div>
);

export default CastCard;
