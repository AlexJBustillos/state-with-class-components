
import './App.css';
import React, { Component } from 'react';
 
class App extends Component {
    constructor() {
        super()

        this.state = {
            count: 0,
        }
    }
    increment = () => {
        const amountToAdd = prompt('How muchh do you want to add?')
        const newCount = this.state.count + parseInt(amountToAdd)
        

        this.setState({ count: newCount })
    }
    decrement = () => {
        const amountToSub = prompt('How much to subtract?')
        const newSub = this.state.count - parseInt(amountToSub)
        
        this.setState({ count: newSub })
    }

    render() {
        return(
            <div>
                <h1> {this.state.count} </h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}
export default App;
