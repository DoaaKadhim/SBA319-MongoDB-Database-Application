const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

commentSchema.index({ post: 1, author: 1 }); // Compound index for post and author fields

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
