import express from 'express';
import db from './db.js'

const app=express()
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get('/',async (req,res)=>{
    let collection=await db.collection("posts");
    let result=await collection.find({}).limit(1).toArray();
    console.log(result);

    res.send(result)
})

app.listen(PORT, () =>{
    console.log(`Connected to server on port :${PORT}`)
})

//////////////
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

