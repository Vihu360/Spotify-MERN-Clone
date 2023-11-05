// const { getToken } = require("../utilis/helpers");

// const email = "test@example.com";
// const user = {
//   _id: "12345",
// };


// const token = getToken(email, user);

// console.log("Generated Token:", token);

const auth = require("../routes/auth");


router.post("/login",  async function(req,sed){
  const {email, password} = req.body;

  const user = await User.findOne({email: email});

  if (!user){
      return res.status(403).json({err:"Invalid Credentials"});
  }
  
  const confirmpassowrd = await bycrpy.compare(password, user.password);

  if(!confirmpassowrd){
      return res.status(403).json({err:"Invalid credentials"});
  }

  const token = await getToken(user.email, user);

  const userToReturn = {...user.toJSON(), token}  // The “…” before newUser.toJson() tells 
  //JavaScript to copy all key value pairs from the new user json value formed into the userToReturn object.

  delete userToReturn.password;
  return res.status(200).json(userToReturn);

});
