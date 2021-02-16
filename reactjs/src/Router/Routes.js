import React, { Component } from 'react'
import {Route,BrowserRouter,Switch, Redirect} from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Signin from '../components/Signin'
import Signup from '../components/Signup'
import Contact from '../components/Contact'
import NotFound from '../components/NotFound'
import Post from '../components/Post'
import AddPost from '../components/AddPost'
import Logout from '../components/Logout'
import EditPost from '../components/EditPost'

const user=JSON.parse(localStorage.getItem('user'))


export class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                <Route path='/' component={Home} exact={true} ></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/contact' component={Contact}></Route>
                <Route path='/post' component={Post} ></Route>
                {user?
                (
                    <Switch>
                    <Route path='/addpost' component={AddPost} ></Route>
                    <Route path='/Logout' component={Logout}></Route>
                    <Route path='/edit_post' component={EditPost}></Route>
                    <Route component={NotFound}></Route>
                    </Switch>
                ):
                (
                    <Switch>
                    <Route path='/signin' component={Signin}></Route>
                    <Route path='/signup' component={Signup}></Route>
                    <Route path='/notfound' component={NotFound}></Route>
                    <Redirect to='/signin'></Redirect>
                    </Switch>
                )}
                <Route component={NotFound}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes
