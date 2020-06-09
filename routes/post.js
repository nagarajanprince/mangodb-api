const express = require('express');
const Post = require('../modules/post')

const routes = express.Router();

// get lists
routes.get('/',async (req,res)=>{
    try{
        const getlist = await Post.find();
        res.json(getlist) 
    }
    catch (err){
        res.json({message:err})
    }
})
// post value in db
routes.post('/', async(req,res) => {
    const post = new Post({
        title:req.body.title,
        name:req.body.name
    })

    try{
    const savepost = await post.save()
    res.json(savepost);
    }
    catch (err){
        res.json({message:err})
    }

})

// get spefic data
routes.get('/:postId',async(req,res) => {
    try{
    const specficpost = await Post.findById(req.params.postId)
    res.json(specficpost)
}
catch (err){
    res.json({message:err})
}
})


// delete data
routes.delete('/:postId',async(req,res) => {
    const removepost = await Post.remove({ _id : req.params.postId })
    res.json(removepost)
})


// update

routes.patch('/:postId',async(req,res) => {

    const updatepost = await Post.updateOne({_id:req.params.postId},
        {$set: {title:req.body.title}
    })
    res.json(updatepost)
})

routes.put('/:postId',async(req,res) => {
    const putpost = await Post.updateOne({_id:req.params.postId},
        {$set: {title:req.body.title}
    })
    res.json(putpost)
})

module.exports = routes; 