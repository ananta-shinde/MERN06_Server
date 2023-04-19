users = [];
const getUserList = (req,res)=>{
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

const deleteUser = (req,res)=>{
    users = users.filter(u => u.email != req.body.email);
    res.send("delete successfull")
}
const updateUser = (req,res)=>{
    users = users.map(u => {
       if( u.email == req.body.email)
       {
          u.password = req.body.password;
       }
       return u;
    });
    res.send("update successfull")
}

module.exports = {getUserList,signup,login,deleteUser,updateUser};