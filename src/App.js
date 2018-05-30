import React, { Component} from 'react';
import CardList from './CardList';
import {cheese} from './cheese';
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state = {
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }

   render(){
        const filteredCheese = cheese.filter(c => {
            
            const currentName = c.name.toLowerCase()
            const includesSearchTerm = currentName.includes(this.state.searchfield.toLowerCase())
            return includesSearchTerm
            // return c.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })


        //console.log(filteredCheese);

        return(
            <div className="background">
                <h1> Cheese </h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList fcheese={ filteredCheese } />
                </Scroll>
            </div>
    ) 
   }  
}

export default App;