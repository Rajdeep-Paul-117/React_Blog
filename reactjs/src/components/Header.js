import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import '../Styles/header.css'

const user=JSON.parse(localStorage.getItem('user'))

export class Header extends Component {
    render() {
        return (
            <div className="n">
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark h0 c">
                <NavLink to="/" activeClassName="act" className="nb" exact={true}>Home</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <NavLink to="/About" activeClassName="act" className="n1">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/contact" activeClassName="act" className="n1">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                    {user?(<NavLink to="/addpost" activeClassName="act" className="n1">AddBlog</NavLink>):null}
                    </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    {user?null:<NavLink to="/Signup" activeClassName="act" className="n1">SignUp</NavLink>}
                    </li>
                    <li className="nav-item">
                    {user?null:<NavLink to="/Signin" activeClassName="act" className="n1">SignIn</NavLink>}
                    </li>
                    <li className="nav-item">
                    {user?<NavLink to="/Logout" activeClassName="act" className="n1">Logout</NavLink>:null}
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }

}

export default Header
