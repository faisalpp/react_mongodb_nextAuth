const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    slug: {type: String,required:true,unique:true},
    title: {type: String,required:true,unique:true},
    excerpt: {type: String, required: true,unique:true},
    content: {type: String, required: true,unique:true},
    category: {type: String, required: true},
    image: {type: String,required:true},
}, {timestamps: true});

mongoose.models = {}

export default mongoose.model("post",postSchema);