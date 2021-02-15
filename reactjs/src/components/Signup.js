import axios from 'axios';
import React, { Component } from 'react'
import '../Styles/signup.css'


export default class Signup extends Component {

    state={
        msg:""
    }
    usubmit=(e)=>{
        e.preventDefault();
        var user={
            name:e.target.name.value,
            email:e.target.email.value,
            mobile:e.target.mobile.value,
            password:e.target.password.value,
            DOB:e.target.DOB.value
        }
        axios.post('http://localhost:4000/register',user).then(
            user=>{
                if(user.data.email)
                {
                    this.setState({msg:user.data.email});
                }
                if(user.data.status)
                this.props.history.push('/signin')
            },
        )
    }
    render() {
        return (
            <div className="sp">
                <h3 className="m alert-danger" role="alert">{this.state.msg}</h3>
                <form className="fom" method="POST" onSubmit={this.usubmit}>
                    <label className="m">Name: <input required type="text" name="name" placeholder="Enter your name"></input></label>
                    <br></br>
                    <label>Email: <input required type="email" name="email" placeholder="Enter your Email Id"></input></label>
                    <br></br>
                    <label>Mobile No: <input required type="text" name="mobile" placeholder="Enter your Mobile no."></input></label>
                    <br></br>
                    <label>Password: <input required type="password" name="password" placeholder="Enter password"></input></label>
                    <br></br>
                    <label>D.O.B: <input required type="Date" name="DOB" placeholder="Enter D.O.B"></input></label>
                    <br></br>
                    <button className="rtr" type="submit">Register</button>   
                 </form>
            </div>
        )
    }
}
