import React, { Component } from 'react'
import  { connect } from 'react-redux'
import {editpost} from '../actions/post'
import axios from 'axios'
import '../Styles/addpost.css'
export class AddPost extends Component {
    state={
        status:""
    }
    componentDidMount(){
        window.scroll(0,0);
    }
    componentDidUpdate(){
        window.scroll(0,0);
    }
    fsubmit=(e)=>{
        this.setState({status:"Successfully Updated"})
        e.preventDefault();
       this.props.dispatch(editpost({
            id:this.props.location.state.id,
            title:e.target.pt.value,
            author:e.target.at.value,
            content:e.target.ct.value,
            image:e.target.im.value
        }))
        var post={
            id:this.props.location.state.id,
            title:e.target.pt.value,
            author:e.target.at.value,
            content:e.target.ct.value,
            image:e.target.im.value
        }
        axios.put('https://blogsdiary.herokuapp.com/edit_post',post).then(
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
        const id1=this.props.location.state.id;
        return (
        this.props.posts.filter(({id})=>id===id1).map((post)=>(
            <div>
                <form className="pf" onSubmit={this.fsubmit}>
                    <h1 className={this.state.status?"ss":""}>{this.state.status}</h1>
                    <h3>Post Title</h3>
                    <input className="ip" name="pt" defaultValue={post.title} required type="text"></input>
                    <h3>Author</h3>
                    <input className="ip" name="at" defaultValue={post.author} required tyoe="text"></input>
                    <h3>Post Content</h3>
                    <textarea name="ct" defaultValue={post.content}></textarea>
                    <h3>Upload Image</h3>
                    <input className="ui" name="im" type="file" accept="image/*"></input>
                    <br></br>
                    <button className="pb" type="submit" >Post</button>
                </form>
            </div>
        )))
    }
}
const mapStateToProps=(state)=>{
    return{
        posts:state.posts
    }
}
export default connect(mapStateToProps)(AddPost)