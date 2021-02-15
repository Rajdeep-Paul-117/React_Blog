var mongoose=require('mongoose');

var userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required: true
    },
    mobile:{
        type:String,
        required:true
    },
    DOB:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now()
    }
})
module.exports=mongoose.model('User',userSchema);