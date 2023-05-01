const db = require("../conn");
//schema for users
const userSchema = new db.Schema({
    name : String,
    email : {type : String, required:true},
    password : Number   
})

// user model
const userModel = db.model("user",userSchema)

module.exports = userModel;