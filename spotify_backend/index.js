const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");
const app = express();
const port = 8090;
const cors = require("cors");
const User = require("./models/user");

app.use(cors());

// to convert the files in json

app.use(express.json());

// direct way : showing password 

mongoose.connect("mongodb+srv://vihu:helloworld@cluster0.qtrr4ua.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

)
    .then((x) => {
        console.log("connected");
    })
    .catch((err) => {
        console.log("error", err);
    });

// Jwt password setup 

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'thisisasecretkey';
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));


app.get("/", function (req, res) {
    res.send("Hellow");
});

app.use("/auth", authRoutes);

app.use("/song", songRoutes);

app.use("/playlist", playlistRoutes);

app.listen(port, function () {
    console.log("running" + port);
});