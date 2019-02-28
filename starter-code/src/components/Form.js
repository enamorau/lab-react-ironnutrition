import React from "react";


class AddFood extends React.Component {


    constructor(props){
        super(props);
  
        this.state = { 
          name: '',
          calories: '',
          image: '',
          quantity: 0
        }
    }

// form submit 

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addFood(this.state);
        this.setState({     
          name: '',
          calories: '',
          image: '',
          quantity: 0,
        })  
    }  


    // event handler for each case

    handleName = (event) => {
        this.setState({
          name: event.target.value
        })
      }
    
      handleCalories = (event) => {
        this.setState({
          calories: event.target.value
        })
      }
    
      handleImage = (event) => {
        this.setState({
            image: event.target.value
          })
      }

        render() {

      return(
<div>
    <form onSubmit={this.handleFormSubmit}>
    <label>Name:</label>
    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleName(e)}/>

    <br/>

    <label>Calories</label>
    <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleCalories(e)}/> 

    <br/>

    <label>Image URL:</label>
    <input type="url" name="image" value={this.state.image} onChange={(e) => this.handleImage(e)}/> 

    <br/>

    <input type="submit" value="Submit" />
    </form>

    <br/>

</div>

      )
  }
}

export default AddFood