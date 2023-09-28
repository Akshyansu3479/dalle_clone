import mongoose, { mongo } from "mongoose";

// A Mongoose Schema defines the structure and property of the document in the MongoDB collection. This Schema is a way to define expected properties and values along with the constraints and indexes.
const Post = new mongoose.Schema({
 name : { type : String, required : true },
 prompt : { type : String, required : true },
 photo : { type : String, required : true }
})

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;