const express = require('express')
const router = express.Router()

const Post = require('../models/post')

//POST (create data)
router.post('/', async(req,res)=>{
    //console.log(req.body)
    const postData = new Post({
        user:req.body.user,
        title:req.body.title,
        text:req.body.text,
        hastag:req.body.hastag,
        location:req.body.location,
        url:req.body.url
    })
    try{
        const postToSave = await postData.save()
        res.send(postToSave)
    }catch(err){
        res.send({message:err})
    }
})


//GET 1(read the data)
router.get('/', async(req,res)=>{
    try{
        const getPosts = await Post.find().limit(10)
        res.send(getPosts)
    }catch(err){
        res.send({message:err})
    }
})

//GET 2 (read only what user requests - by id)
router.get('/:postId', async(req,res)=>{
    try{
        const getPostById = await Post.findById(req.params.postId)
        res.send(getPostById)
    }catch(err){
        res.send({message:err})
    }
})

//PATCH (update)
router.patch('/:postId', async(req,res) =>{
    try{
        const updatePostById = await Post.updateOne(
            {_id:req.params.postId},
            {$set:{
                user:req.body.user,
                title:req.body.title,
                text:req.body.text,
                hastag:req.body.hastag,
                location:req.body.location,
                url:req.body.url
                 }
            })
            res.send(updatePostById)
    }catch(err){
        res.send({message:err})
    }
})

//DELETE (Delete)
router.delete('/:postId', async(req,res)=>{
    try{
    const deletePostById = await Post.deleteOne({_id:req.params.postId})
        res.send(deletePostById)
    }catch(err){
        res.send({message:err})
    }   
})



module.exports = router