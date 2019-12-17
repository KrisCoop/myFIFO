import React, {Component} from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputEmail: '',
            inputPassword: ''
        }
    }

    updateInput = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return(
            <div>
                <div className='loginInputs'>
                    <input type='text' placeholder='email' name='inputEmail' value={this.state.inputEmail} 
                    onChange={this.updateInput}/>
                    <input type='password' placeholder='password' name='inputPassword' value={this.state.inputPassword}
                    onChange={this.updateInput}/>
                    <button>Login</button>
                    <h3>Not a member? <Link to='/Register'>Register</Link> </h3>

                </div>
            </div>
        )
    }
}

export default Login;