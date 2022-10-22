// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from '../../middleware/mongoose'
import Post from '../../models/Post'

const handler = async (req,res)=> {
  let posts = await Post.find()
  res.status(200).json({ posts })
}

export default connectDb(handler)