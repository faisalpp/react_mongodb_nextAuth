import Post from '../../models/Post'
import connectDb from '../../middleware/mongoose'

const handler =async (req,res)=> {
    if(req.method == 'POST'){
     let a = new Post({
      userEmail: req.body.userEmail,
      title: req.body.title,
      excerpt: req.body.excerpt,
      content: req.body.content,
      image: req.body.image,
      category: req.body.category,
      isFeatured: req.body.isFeatured,
      slug: req.body.slug,
     })
     await a.save()
    res.status(200).json({success: "success"}) 
    }
    else {
        res.status(400).json({error: "This method is not allowed"}) 
    }
}
export default connectDb(handler)