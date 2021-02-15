import React, { Component } from 'react'
import  { connect } from 'react-redux'
import {addpost} from '../actions/post'
import axios from 'axios'
import '../Styles/addpost.css'
const user=JSON.parse(localStorage.getItem("user"))
export class AddPost extends Component {
    state={
        status:""
    }
    componentDidUpdate(){
        window.scroll(0,0)
    }
    fsubmit=(e)=>{
        this.setState({status:"Successfully Submitted"})
        e.preventDefault();
       this.props.dispatch(addpost({
            userid:user._id,
            title:e.target.pt.value,
            author:e.target.at.value,
            content:e.target.ct.value,
            image:e.target.im.value
        }))
        var post={
            userid:user._id,
            title:e.target.pt.value,
            author:e.target.at.value,
            content:e.target.ct.value,
            image:e.target.im.value
        }
        axios.post('https://blogsdiary.herokuapp.com/add_post',post).then(
            res=>{
            }
        )

        return(
            e.target.pt.value="",
            e.target.at.value="",
            e.target.ct.value="",
            e.target.im.value=""
        )
    }
    render() {
        return (
            <div>
                <form className="pf" onSubmit={this.fsubmit}>
                    <h1 className={this.state.status?"ss":""}>{this.state.status}</h1>
                    <h3>Post Title</h3>
                    <input className="ip" name="pt" required type="text"></input>
                    <h3>Author</h3>
                    <input className="ip" name="at" required tyoe="text"></input>
                    <h3>Post Content</h3>
                    <textarea name="ct"></textarea>
                    <h3>Upload Image</h3>
                    <input className="ui" name="im" type="file" accept="image/*"></input>
                    <br></br>
                    <button className="pb" type="submit" >Post</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps=()=>{
    return{}
}
export default connect(mapStateToProps)(AddPost)