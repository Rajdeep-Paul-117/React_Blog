const { ObjectID } = require('mongodb');
var mongoose=require('mongoose');

var postschema= new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    author:{
        type:String
    },
    title:{
        type:String
    },
    content:{
        type:String,
    },
    image:{
        type:String,
    }
})

module.exports = mongoose.model("post",postschema);
