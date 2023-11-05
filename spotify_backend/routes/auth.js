const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { getToken } = require("../utilis/helpers");


router.post("/register", async (req, res) => {
    const {email, password, firstName, lastName, username} = req.body;

// if user already exists 

const user = await User.findOne({email: email});

    if(user) {
        return res
        .status(403)
        .json({error:"An user already existed"});
    }

    // if no user exists on database


    // creating a hashed pass

    const hashedpassword = await bcrypt.hash(password, 10);

    const newUserData = {email,
         password: hashedpassword,
          firstName,
           lastName,
            username, };

    const newUser = await User.create(newUserData);

    // creating a token to return to the user
    
    const token = await getToken(email, newUser);

    const userToReturn = {...newUser.toJSON(), token}  // The “…” before newUser.toJson() tells 
    //JavaScript to copy all key value pairs from the new user json value formed into the userToReturn object.

    delete userToReturn.password;
    return res.status(200).json(userToReturn);

});

router.post("/login",  async function(req,res){
    const {email, password} = req.body;

    const user = await User.findOne({email: email});


    if (!user){
        return res.status(403).json({err:"Invalid Credentials"});
    }
    
    const confirmpassword = await bcrypt.compare(password, user.password);


    if(!confirmpassword){
        return res.status(403).json({err:"Invalid credentials"});
    }

    const token = await getToken(user.email, user);

    const userToReturn = {...user.toJSON(), token}  // The “…” before newUser.toJson() tells 
    //JavaScript to copy all key value pairs from the new user json value formed into the userToReturn object.

    delete userToReturn.password;
    return res.status(200).json(userToReturn);

});



module.exports = router;