import Post from '../../models/Post'
import connectDb from '../../middleware/mongoose'

const handler =async (req,res)=> {
    if(req.method == 'POST'){
     let a = new Post({
      slug: req.body.slug,
      title: req.body.title,
      excerpt: req.body.excerpt,
      content: req.body.content,
      image: req.body.image,
      category: req.body.category,
     })
     await a.save()
    res.status(200).json({success: "success"}) 
    }
    else {
        res.status(400).json({error: "This method is not allowed"}) 
    }
}
export default connectDb(handler)