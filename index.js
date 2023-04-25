const express = require("express");
const {getUserList,signup,login,deleteU,update} = require("./user")
const app = express();
app.use(express.json())

// users routes
app.get("/users",getUserList);
app.post("/users/signup",signup);
app.post("/users/login",login);
app.delete("/users",deleteU)
app.put("/users",update)

 
app.listen(3000);