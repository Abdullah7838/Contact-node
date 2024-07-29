const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    number:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        required:true
    }
});

const Contact = mongoose.model('Contact',contactSchema);
module.exports=Contact;