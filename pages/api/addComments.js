import Comment from '../../models/Comment'
import connectDb from '../../middleware/mongoose'

const handler =async (req,res)=> {
    if(req.method == 'POST'){
        let u = new Comment({
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment,
        image: req.body.image,
        postId: req.body.postId
     })
     await u.save()
    res.status(200).json({success: "success"}) 
    }
    else {
        res.status(400).json({error: "This method is not allowed"}) 
    }
}
export default connectDb(handler)