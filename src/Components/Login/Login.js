import React, {Component} from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div>
                <div className='loginInputs'>
                    <input type='text' placeholder='email' />
                    <input type='password' placeholder='password' />
                    <button>Login</button>
                    <h3>Not a member? <Link to='/Register'>Register</Link> </h3>
                </div>
            </div>
        )
    }
}

export default Login;