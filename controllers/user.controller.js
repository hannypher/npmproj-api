const UserModel = require('../models/user.model');

const registerUser = async (data) => {

    const {username} = data;
    //check for existance
    const userExists =await UserModel.findOne({username})
    if(userExists) return {message: 'User with this username already exists'}
    
    const newUser = new UserModel(data);
    try{
        await newUser.save();
        return {message: "User registered successfully"}
    } catch(error) {
        return error
    }
}

module.exports = {
    registerUser
}