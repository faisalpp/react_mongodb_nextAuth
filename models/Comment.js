const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    comment: {type: String, required: true},
    image: {type: String, required: true},
    postId: {type: String, required: true}
}, {timestamps: true});

mongoose.models = {}
export default mongoose.model("Comment",CommentSchema);