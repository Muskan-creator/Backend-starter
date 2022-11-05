require("dotenv").config()

const {PORT}=process.env
const express = require('express');
const cors = require('cors');

const userModel = require('./models/user');

const app = express();

app.use(cors());
app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/db',
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/user/create', async (req, res) => {
  //for all mandatory fields
  const  {firstname,lastname,email,password}  = req.body;
  if(!(email && password && firstname && lastname) ){
    res.status(400).send("all fields are required")
  }
  // for unique mail
  const extuser= await User.findOne(email)
  if(extuser){
    res.status(400).send("user already exists")
  }
  //password
  
  // Create a new user in the database
  const newUser = await userModel.create({
    firstname,lastname,email,password
  });

  res.json({
    message: 'User created successfully',
    data: newUser,
  });
});

app.get('/users', async (req, res) => {
  // Get all users from the database
  const users = await userModel.find({});

  res.json({
    message: 'Users fetched successfully',
    data: users,
  })
});


app.listen(PORT, () => {
  console.log('Server started on port 4000');
});