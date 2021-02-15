import React, { Component } from 'react'
import axios from 'axios'


export class Logout extends Component {

    componentDidMount()
    {
        
    axios.get('http://localhost:4000/logout').then(
    res=>{
        localStorage.clear();
        this.props.history.push('/')
        window.location.reload()
    }
    )
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Logout
