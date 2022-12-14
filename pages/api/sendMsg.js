import Message from '../../models/Message'
import connectDb from '../../middleware/mongoose'

const handler =async (req,res)=> {
    if(req.method == 'POST'){
        let u = new Message({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
     })
     await u.save()
    res.status(200).json({success: "success"}) 
    }
    else {
        res.status(400).json({error: "This method is not allowed"}) 
    }
}
export default connectDb(handler)