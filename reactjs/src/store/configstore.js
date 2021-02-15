import {createStore,combineReducers} from 'redux';
import posts from '../reducers/posts'
import user from '../reducers/user'

export default ()=>{
    const store=createStore(
        combineReducers(
            {
                posts:posts,
                user:user
            }
        )
    )
    return store;
}