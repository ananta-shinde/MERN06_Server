const {getUsers,updateUser,deleteUser} = require("./UserModel");

const getUserList = (req,res)=>{
    const users = getUsers();
    res.send(users)
};

const signup = (req,res)=>{
    if(req.body.name != null && req.body.email != null && req.body.password != null)
    {
        users.push(req.body);
        res.send("signup successfull")
    }
    else{
        res.send("Please enter required fileds")
    }    
}

const login = (req,res)=>{
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
}

const deleteU = (req,res)=>{
    const result = deleteUser(req.body.email)
    return res.send("delete successfull")
}
const update = (req,res)=>{
    const result = updateUser(req.body.email,req.body);
    if(result){
        return res.send("update successfull")
    }else{
       return res.send("could not update user")
    }
   
}

module.exports = {getUserList,signup,login,deleteU,update};