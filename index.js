const express = require("express");
var cors = require('cors')
const userRouter = require("./routes/user")
const productRouter = require("./routes/product")
const categoryRouter = require("./routes/category")
const app = express();
app.use(express.json())
app.use(cors())

 
app.use("/users",userRouter)
app.use("/products",productRouter)
app.use("/categories",categoryRouter)

 
app.listen(4000);