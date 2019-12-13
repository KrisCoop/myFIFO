import React, {Component} from 'react';


class FoodDisplay extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div>
                <h1>{this.props.food_name}</h1>
            </div>
        )
    }
}

export default FoodDisplay;