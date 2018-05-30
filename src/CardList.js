import React from 'react';
import Card from './Card';



const CardList = ({fcheese}) =>{
    
    const cardArray = fcheese.map((currentCheese)=>{
        return ( <Card 
            key={currentCheese.id} 
            id={currentCheese.id} 
            name = {currentCheese.name} 
            origin ={currentCheese.origin} 
            img={currentCheese.img} 
            flavor ={currentCheese.flavor}/>
        )
    })

    return(
        <div>

            {cardArray}
            {/* <Card id={cheese[0].id} name = {cheese[0].name} origin ={cheese[0].origin} img={cheese[0].img} flavor ={cheese[0].flavor}/>

            <Card id={cheese[1].id} name = {cheese[1].name} origin ={cheese[1].origin} img={cheese[1].img}flavor ={cheese[1].flavor}/>

            <Card id={cheese[2].id} name = {cheese[2].name} origin ={cheese[2].origin} img={cheese[2].img}flavor ={cheese[2].flavor}/>

            <Card id={cheese[3].id} name = {cheese[3].name} origin ={cheese[3].origin} img={cheese[3].img}flavor ={cheese[3].flavor}/>

            <Card id={cheese[4].id} name = {cheese[4].name} origin ={cheese[4].origin} img={cheese[4].img}flavor ={cheese[4].flavor}/>

            <Card id={cheese[5].id} name = {cheese[5].name} origin ={cheese[5].origin} img={cheese[5].img}flavor ={cheese[5].flavor}/> */}
        </div>

    );
}

export default CardList;