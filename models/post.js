const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

postSchema.index({ title: 1 }); // Index for title field

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
