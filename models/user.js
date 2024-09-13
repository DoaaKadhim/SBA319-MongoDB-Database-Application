//1-Use at least three different data collections within the database (such as users, posts, or comments).
//2-Utilize reasonable data modeling practices.

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });

userSchema.index({ email: 1 }); // Index for email field

const User = mongoose.model('User', userSchema);
module.exports = User;
