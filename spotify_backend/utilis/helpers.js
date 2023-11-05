const jwt = require("jsonwebtoken");

const getToken = async (email, user) => {
    const token = jwt.sign({identifier : user._id}, "thisisasecretkey");
    return token;
};

module.exports = { getToken }; 
