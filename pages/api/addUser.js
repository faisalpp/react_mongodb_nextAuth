import Admin from '../../models/Admin'
import connectDb from '../../middleware/mongoose'
import { ENCRYPTION_SALT } from '../../config';
var CryptoJS = require("crypto-js");

const handler =async (req,res)=> {
    if(req.method == 'POST'){
        let u = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(JSON.stringify(req.body.password), ENCRYPTION_SALT).toString(),
        image: req.body.image,
     })
     await u.save()
    res.status(200).json({success: "success"}) 
    }
    else {
        res.status(400).json({error: "This method is not allowed"}) 
    }
}
export default connectDb(handler)