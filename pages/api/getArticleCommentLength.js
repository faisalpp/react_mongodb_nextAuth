// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from '../../middleware/mongoose'
import Comment from '../../models/Comment'

const handler = async (req,res)=> {
  if(req.method == 'POST'){
  let comments = await Comment.find({'postId': req.body.id})
  res.status(200).json({comments:comments })
}else {
  res.status(400).json({ success: false })
}
}

export default connectDb(handler)