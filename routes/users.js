//Create Routes (Requirement 3-6)
import express from 'express';
const router = express.Router();
import User from '../models/user.js';


// GET all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});


  // GET a single user by ID
  router.get('/:id',async (req, res) => {
      // const user = users.find(u => u.id === parseInt(req.params.id));
      const user= await User.findById(req.params.id)
      
      if (user) {
        // res.render('user', { user });
        res.send(user).status(200);
      } else {
        res.status(404).render('error', { message: 'User not found' });
      }
    });
  
  // POST a new user
  router.post('/',async (req, res) => {
    const newUser = new User({
    //   id: users.length + 1,
      name: req.body.name,
      email: req.body.email,
      password:req.body.password
    });
    console.log(newUser);
    const user=await newUser.save();
    res.send(user);
  });
  
  // PUT or PATCH - Update a user by ID
  router.put('/:id', (req, res) => {
      const user = users.find(u => u.id === parseInt(req.params.id));
      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        res.redirect('/users');
      } else {
        res.status(404).render('error', { message: 'User not found' });
      }
    });
  
  // DELETE a user
  router.delete('/:id', (req, res) => {
    // users = users.filter(u => u.id !== parseInt(req.params.id));
    const query={_id:req.params.id};
    User.deleteOne(query)
    
    res.redirect('/users');
  });
  
export default router;
