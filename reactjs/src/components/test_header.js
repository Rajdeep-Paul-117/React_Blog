import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import '../Styles/header.css'
export class test_header extends Component {
    render() {
        return (
            <div className="n">
                    <NavLink to="/About" activeClassName="act" className="n1">About</NavLink>
                    <NavLink to="/contact" activeClassName="act" className="n1">Contact</NavLink>
                    <NavLink to="/addpost" activeClassName="act" className="n1">Add Blog</NavLink> 
                    <NavLink to="/Signup" activeClassName="act" className="n2">SignUp</NavLink>
                    <NavLink to="/Signin" activeClassName="act" className="n2">SignIn</NavLink>
            </div>

        )
    }
}

export default test_header
