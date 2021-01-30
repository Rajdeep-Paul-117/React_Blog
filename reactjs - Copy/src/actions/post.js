export const addpost=({id='',userid='',title='',author='',content='',image=''}={})=>({
    type:"ADD_POST",
    post: {    
        id,
        userid,
        title,
        author,
        content,
        image
    }
});
export const removepost=({id={}})=>({
    type:"REMOVE_POST",
    id
});

export const editpost=({id='',title='',author='',content='',image=''}={})=>({
    type: "EDIT_POST",
    id,
    updates:{
        title,
        author,
        content,
        image
    }
});