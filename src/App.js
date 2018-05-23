import React, { Component} from 'react';
import CardList from './CardList';
import {cheese} from './cheese';
import SearchBox from "./SearchBox";
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state = {
            cheese: cheese,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }

   render(){
        const filteredCheese = this.state.cheese.filter(cheese => {
            return cheese.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        console.log(filteredCheese);

        return(
            <div className="background">
                <h1> Cheese </h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList cheese={ filteredCheese } />
            </div>
    ) 
   }  
}

export default App;