const mongoose = require('mongoose');


const postschema = mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        }

});

module.exports = mongoose.model('post',postschema);