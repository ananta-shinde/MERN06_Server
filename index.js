const express = require("express");
const {getUserList,signup,login,deleteU,update} = require("./controller/user")
const userRouter = require("./routes/user")
const productRouter = require("./routes/product")
const app = express();
app.use(express.json())

 
app.use("/users",userRouter)
app.use("/products",productRouter)

 
app.listen(3000);