import React, {Component} from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div>
                <div className='registerInfo'>
                    <input type='text' placeholder='first name' />
                    <input type='text' placeholder='last name' />
                    <input type='text' placeholder='email' />
                    <input type='text' placeholder='password' />
                    <input type='text' placeholder='re-type password' />

                    <button>Register</button>
                    <h3>Already a member? <Link to='/Login'>Login</Link></h3>
                </div>
            </div>
        )
    }
}

export default Register;