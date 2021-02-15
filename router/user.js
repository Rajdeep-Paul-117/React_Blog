var express=require('express')
var router=express.Router();
var User=require('../models/user');
var passport=require('passport');
var LocalStrategy=require('passport-local')
var bcrypt=require('bcryptjs')



passport.use(new LocalStrategy({
    usernameField:'email',
    usernamePassword:'password'
},
function(email,password,done){
    User.findOne({email:email},function(err,user){
        if(err)
        throw err;
        if(!user)
        {
            return done(null,false)
        }
        bcrypt.compare(password,user.password,function(err,isMatch){
            if(err)
            {
                console.log(err);
            }
            if(isMatch)
            {
                return done(null,user);
            }
            else
            {
                return done(null,false)
            }
        })
    })
}))

router.post('/register',function(req,res){
    User.findOne({email:req.body.email}).then(
        user=>{
            if(user)
            {
                res.json({email:"Email already exists"})
            }
            else
            {
                bcrypt.hash(req.body.password,10,function(err,hash){
                    if(err)
                    console.log(err)
                    else{
                        req.body.password=hash
                        User.create(req.body,function(err,data){
                            if(err)
                            {
                                console.log(err);
                            }
                            else
                            {
                                res.json({status:"success"})
                                console.log(data);
                            }
                        })
                    }
                })
            }
        }
    )
})


router.get('/secret',islogedin,function(req,res){
    res.send("success");
})

router.post('/signin',function(req,res,next){
    passport.authenticate('local',function(err,user){
        if(err)
        console.log(err)
        if(!user)
        {
            res.json("invalid credential")
        }
        else
        {
            req.logIn(user, function(err) {
                if (err) { 
                    return next(err); 
                }
                return res.json({status:"Successfully logedin",user:user});
              });  
        }
    })(req,res,next)
    
})
router.get('/logout',function(req,res){
    req.logout();
    res.json({status:"Successfully logedout"})
})

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


module.exports=router