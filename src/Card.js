import React from 'react';
import './Card.css';


const Card=(props) =>{
    const {id, img, name, origin, flavor} = props;

    return(
        <div className="cards">
            <img alt='cheese' src={img}/>
            <div>
                <h2> {name} </h2>
                <p> Origin: {origin} </p>
                <p> Flavor: {flavor} </p>
            </div>
        </div>

    );
}

export default Card;