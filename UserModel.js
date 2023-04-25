

users = [];


const getUsers = ()=>{
    return users
}

const updateAll = (key,value)=>{
    users.map(u => {
        u.key = value;
        return u;
    })
}

const findUser = (email)=>{
     const user = users.find(u=> u.email == email)
     return user;
}

const updateUser = (email,user) =>{
    if(findUser(email)){
        users.map(u => {
            if(u.email == email) {   
                if(user.name != null){
                    u.name = user.name;
                }
                if(user.password != null){
                    u.password = user.paswword;
                }
                return u;
            }
        })
        return 1;
    }
    else{
        return 0;
    }
}

const deleteUser = (email) =>{
    users = users.filter(u => u.email != email);
    return 1;
}


module.exports = {getUsers,updateAll,updateUser,findUser,deleteUser}