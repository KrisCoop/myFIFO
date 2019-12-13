import React, {Component} from 'react';
import './Homepage.css';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import FoodDisplay from './FoodDisplay/FoodDisplay';


class Homepage extends Component{
    constructor(props){
        super(props)
        this.state = {
            foodList: [
                {food_name: 'popcorn'},
                {food_name: 'cheese'}
            ]
        }
    }

    componentDidMount(){
        axios.get('/ping')
        .then((res) => {
            console.log(res)
            console.log(res.data)
        })
    }

    render(){
        let foodFeed = this.state.foodList.map((element) => {
            return <FoodDisplay food_name={element.food_name}/>
        })

        return(
            <div>
                <div className='NavBarLink'>
                    <NavBar />
                </div>
                {foodFeed}
            </div>
        )
    }
}

export default Homepage;