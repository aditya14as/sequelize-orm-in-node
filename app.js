const express = require('express')
const app = express()
const {connectDB,User} = require('./model/userModel');
connectDB()

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/createuser', async(req,res)=>{
    console.log(req.body)
    
    await User.create({
        username: req.body["username"],
        fullname : req.body["fullname"]
      });
   res.send("send")
})
app.get('/getuser', async(req,res)=>{
    const users = await User.findAll();
    res.send(JSON.stringify(users, null, users.length));
})

let port = 3000
app.listen(port, () => {
    
  console.log(`Example app listening on port ${port}`)
})