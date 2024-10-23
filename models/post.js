const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    user:{
        type:String,
        required:true //adds validation - eg. this field must have an entry
    },
    title:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    hastag:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default:Date.now
    }
})

module.exports = mongoose.model('posts', postSchema)
