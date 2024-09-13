//1-Use at least three different data collections within the database (such as users, posts, or comments).
//2-Utilize reasonable data modeling practices.

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.index({ email: 1 }); // Index for email field

const User = mongoose.model('users', userSchema);
export default User;
