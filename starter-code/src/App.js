import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";

import Foodbox from "./components/Foodbox.js";
import Form from "./components/Form.js";
import SearchBar from "./components/SearchBar.js";

class App extends Component {

  state ={
showForm : false,
liveFoods : foods,
filterFoods: foods,
userInput : ""
  }



  render() {
    return (
      <div>
        <div className="container">
          <h1 className="title">IronNutrition</h1>
          <div>
            
            <SearchBar filterFood= {(input) => {

              console.log(input)
      
              let searchFoods = this.state.liveFoods.filter((element) => {
                return element.name.toLowerCase().indexOf(input.toLowerCase()) > -1
              })
              this.setState({filterFoods: searchFoods}) 
            }} />

            {this.state.showForm ? 

            <Form addFood={(food) => {
              
              let newFoods = [...this.state.liveFoods]
              newFoods.push(food)
              this.setState({liveFoods: newFoods}) 
            }

            }/> 
            : 
            <button onClick={() => this.setState({showForm : true})} >Add food</button> }
            

          </div>
          <div className="columns">
            <div className="column">
              {this.state.filterFoods.map((food, index) => {
                return (
                  <Foodbox
                    name={food.name}
                    calories={food.calories}
                    image={food.image}
                    quantity={food.quantity}
                  />
                );
              })}
            </div>
            <div className="column content">
              <h2 className="subtitle">Today's foods</h2>
              <ul>
                <li>1 Pizza = 400 cal</li>
                <li>2 Salad = 300 cal</li>
              </ul>
              <strong>Total: 700 cal</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
