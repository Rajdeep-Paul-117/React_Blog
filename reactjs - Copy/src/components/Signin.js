import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import '../Styles/signin.css'

axios.defaults.withCredentials=true;
export class Signin extends Component {
    state={
            msg:""
        }

    fsubmit=(e)=>{
        e.preventDefault();
        var detail={
            email:e.target.email.value,
            password:e.target.password.value
        }
        axios.post('http://localhost:4000/signin',detail,).then(
            result=>{
                if(result.data.status==="Successfully logedin")
                {   
                    localStorage.setItem('user',JSON.stringify(result.data.user))
                    this.props.history.push('/')
                    window.location.reload()
                }
                if(result.data==="invalid credential")
                this.setState({msg:result.data})
            }
        )
    }

    render() {
        return (
        <div className="sp">
        <h3 className="m alert-danger" role="alert">{this.state.msg}</h3>
        <form className="fom" onSubmit={this.fsubmit} method="POST">
            <label>Email: <input required type="email" name="email" placeholder="Enter your Email Id"></input></label>
            <br></br>
            <label>Password: <input required type="password" name="password" placeholder="Enter password"></input></label>
            <br></br>
            <button className="li" type="submit">Log In</button>
         </form>
    </div>
        )
    }
}
const mapstatetoprops=()=>{
    return{
    }
}
export default connect(mapstatetoprops)(Signin)