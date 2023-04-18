const e = require("express");
const express = require("express");
const htmlStructure = require("./home.js")
const app = express();
app.use(express.json())
users = [];
// user = {
//     name : "Ananta",
//     email : "demo@mail.com",
//     password : "123456"

// }

app.get("/users",(req,res)=>{
    res.send(users)
})
app.post("/users/signup",(req,res)=>{
    if(req.body.name != null && req.body.email != null && req.body.password != null)
    {
        users.push(req.body);
        res.send("signup successfull")
    }
    else{
        res.send("Please enter required fileds")
    }    
})

app.post("/users/login",(req,res)=>{
    user =  users.find(u=> u.email == req.body.email)
    if(user)
    {
        if(user.password == req.body.password)
        {
            res.send("login success")
        }else{
            res.send("Invalid creds")
        }
    }
    else{
        res.send("user not found")
    }
})


app.delete("/users",(req,res)=>{
    users.push(req.body);
    res.send("signup successfull")
})

 
app.listen(3000);