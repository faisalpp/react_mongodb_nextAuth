const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: {type: String, required: true,unique: true},
    email: {type: String, required: true,unique:true},
    password: {type: String, required: true},
    image: {type: String,required: true},
}, {timestamps: true});

mongoose.models = {}
//mongoose.model.modelname
export default  mongoose.model("admin",adminSchema);