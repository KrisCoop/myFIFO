import React, {Component} from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputFirst: '',
            inputLast: '',
            inputEmail: '',
            inputPassword: '',
            inputPassword2: ''
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
                <div className='registerInfo'>
                    <input type='text' placeholder='first name' name='inputFirst' value={this.state.inputFirst} onChange={this.updateInput}/>
                    <input type='text' placeholder='last name' name='inputLast' value={this.state.inputLast} onChange={this.updateInput}/>
                    <input type='text' placeholder='email' name='inputEmail' value={this.state.inputEmail} onChange={this.updateInput}/>
                    <input type='text' placeholder='password' name='inputPassword' value={this.state.inputPassword} onChange={this.updateInput}/>
                    <input type='text' placeholder='re-type password' name='inputPassword2' value={this.state.inputPassword2} onChange={this.updateInput}/>

                    <button>Register</button>

                    <h1>All the stuff:</h1>
                    {this.state.inputFirst}
                    <br />
                    {this.state.inputLast}
                    <br />
                    {this.state.inputEmail}
                    <br />
                    {this.state.inputPassword}
                    <br />
                    {this.state.inputPassword2}

                    <h3>Already a member? <Link to='/Login'>Login</Link></h3>
                </div>
            </div>
        )
    }
}

export default Register;