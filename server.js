var express=require('express');
var app=express();
var mongoose=require('mongoose');
var bodyParser=require('body-parser')
var cors=require('cors');
var passport=require('passport')
const path = require("path")

const header_middleware = require("./middleware/header")
require('dotenv').config();

var postRoutes=require('./router/post')
var userRoutes=require('./router/user')

app.use(header_middleware)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/*app.use(cors({
    origin:'https://blogsdiary.herokuapp.com',
    credentials: true // enable set cookie
    
}));*/


var db=process.env.MONGODB_URI;
mongoose.connect(db,{useNewUrlParser:true});

var connection=mongoose.connection;
connection.once("open",function(){
    console.log("connected with mongodb");
});


app.use(require('express-session')({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function(user,done){
    done(null,user)
})
passport.deserializeUser(function(user,done){
    done(null,user)
})

app.use(postRoutes)
app.use(userRoutes)


app.use(express.static(path.join(__dirname, "reactjs", "build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "reactjs", "build", "index.html"));
});


app.listen(process.env.PORT || 4000, function(){
    console.log("server is running");
})