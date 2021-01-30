var express=require('express')
var router=express.Router();
var Post=require('../models/post')

router.get('/getposts',function(req,res){
    Post.find({},function(err,data){
        if(err)
        console.log(err);
        else
        {
            res.send(data);
        }
    })
})
router.post('/add_post',islogedin,function(req,res){
    
    Post.create(req.body,function(err,data){
        if(err)
        {
            console.log(err)
        }
        else
        {
        console.log(data);
        }
    })
})
router.put('/edit_post',isAuthor,function(req,res){
    Post.findByIdAndUpdate(req.body.id,req.body,function(err,data){
        if(err)
        console.log(err)
        else
        {
            console.log(data)
        }
    })
})

router.post('/delete_post',isAuthor,function(req,res){
    Post.findByIdAndDelete(req.body.id,function(err,result){
        if(err)
        throw err;
        else
        {
            console.log("Deleted")
            res.send("ok")
        }
    })
})

function isAuthor(req,res,next){
    if(islogedin)
    {
        Post.findById(req.body.id,function(err,blog){
            if(err)
            throw err
            if(blog.userid&&blog.userid.equals(req.user._id))
            {
                console.log("match");
                return next();
            }
            else
            {
                res.json("not the author");
            }
        })
    }
}

function islogedin(req,res,next)
{
    if(req.isAuthenticated())
    {
        console.log("logedin")
        return next();
    }
    else
    {   
        console.log("not loged in")
    }
}

module.exports=router;