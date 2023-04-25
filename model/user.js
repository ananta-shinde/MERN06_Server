const db = require("../conn");
//schema for users
const userSchema = new db.Schema({
    name : String,
    email : {type : String,default:"demo@com"},
    password : Number   
})

// user model
const userModel = db.model("user",userSchema)

module.exports = userModel;