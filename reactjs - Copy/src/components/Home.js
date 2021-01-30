import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import '../Styles/home.css';

export class Home extends Component {
    render() {
       return (
            this.props.posts.map((post)=>(   
            <div className="h" key={post.id}>
                <div className="posts">
                <NavLink to={{ pathname: '/post',state:{id:post.id} }}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <div className="im">
                        <object data={post.image} type="image">
                        <img src="https://picsum.photos/200/300"alt={post.title} ></img>
                        </object>
                    </div>
                </NavLink>
                    <NavLink className="rm" to={{pathname:'/post',state:{id:post.id}}}>Read More</NavLink>
                </div>
            </div>
            )
            )
       )
        
    }
}

const mapStateToProps=(state)=>{
    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Home);
