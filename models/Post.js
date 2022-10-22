const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userEmail: {type: String,required:true},
    title: {type: String,required:true,unique:true},
    excerpt: {type: String, required: true},
    content: {type: String, required: true},
    category: {type: String, required: true},
    image: {type: String,required:true},
    isFeatured: {type: String,required:true},
}, {timestamps: true});

mongoose.models = {}

export default mongoose.model("post",postSchema);