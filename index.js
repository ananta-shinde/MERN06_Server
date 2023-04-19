const e = require("express");
const express = require("express");
const htmlStructure = require("./home.js")
const {getUserList,signup,login,deleteUser,updateUser} = require("./user")
const app = express();
app.use(express.json())

 
// users routes
app.get("/users",getUserList);
app.post("/users/signup",signup);
app.post("/users/login",login);
app.delete("/users",deleteUser)
app.put("/users",updateUser)

 
app.listen(3000);