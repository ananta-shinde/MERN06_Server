const userModel = require("../model/user");
 
async function getUserList (req,res){
    const users = await userModel.find({});
    res.send(users)
};

async function signup (req,res){
    if(req.body.name != null && req.body.email != null && req.body.password != null)
    {
        // check if user already exists
        const isUser = await userModel.findOne({email:req.body.email})
        console.log(isUser)
        if(!isUser){
        // create new user
        const user = new userModel( req.body);
        user.save();
        res.send("user signup successfull");
        }else{
            res.send("user exist please login");
        }
    }
    else{
        res.send("Please enter required fileds")
    }    
}

async function login(req,res){
    user =  await userModel.findOne({email:req.body.email})
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
    userModel.findByIdAndDelete(req.body.id)
    return res.send("delete successfull")
}
async function update(req,res){
    const result = await userModel.findOneAndUpdate({email:req.body.email},req.body)
    if(result){
        return res.send("update successfull")
    }else{
       return res.send("could not update user")
    }
   
}

module.exports = {getUserList,signup,login,deleteU,update};