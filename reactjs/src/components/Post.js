import React, { Component } from 'react'
import {connect} from  'react-redux'
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../Styles/post.css'
import { removepost } from '../actions/post';


const user=JSON.parse(localStorage.getItem('user'))
export class Post extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    bsubmit=(id)=>{
        axios.post('https://blogsdiary.herokuapp.com/delete_post',{id}).then(
            res=>{
                this.props.dispatch(removepost({
                    id:id
                }))
                this.props.history.push('/')
            }
        )
    }
    render() {
        try {
        const id1=this.props.location.state.id;
        let show=false;
        return (
            this.props.posts.filter(({id})=>id===id1)).map((post)=>(
            <div className="p" key={post.id}>
                {show=user?post.userid===user._id?true:false:false}
                <h1 className="t">{post.title}</h1>
                <div className="pim">
                    <object data={post.image} type="image">
                        <img src="https://picsum.photos/200/300"alt={post.title} ></img>
                    </object>
                </div>
                <p> {post.content}</p> 
                {
                    show?(
                        <div>
                        <Link className='b btn btn-info' type="button" to={{pathname:'/edit_post',state:{id:post.id}}}>Edit</Link>
                        <button className="b btn btn-danger" type="button" onClick={()=>this.bsubmit(id1)}>Delete</button>
                        </div>
                ):null
                }
            </div>
            
        ))
        } catch (error) {
            this.props.history.push('/notfound')   
            return null
        }
    }
}
const mapPropToState=(state)=>({
    posts:state.posts
});
export default connect(mapPropToState)(Post)