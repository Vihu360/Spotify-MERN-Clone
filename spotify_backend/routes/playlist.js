const express = require("express");
const router = express.Router();
const passport = require("passport");
const playlist = require("../models/Playlists");
const user = require("../models/user");
const Song = require("../models/songs");


// creating a playlist route

router.post("/create", passport.authenticate("jwt", {session:false}),
async (req, res)=> {
    const currentUser = req.user;
    const {name, thumbnail, songs} = req.body;
    if (!name || !thumbnail || !songs){
        return res.status(301).json({err: "Insufficient Data"});
    }
    const playlistData = {name, thumbnail, songs, owner: currentUser._id, collaborators: [],};
    const playlistCreation = await playlist.create(playlistData);

    return res.status(200).json(playlistCreation);
});


// Get request for playlist

router.get("/get/playlist/:playlistId", passport.authenticate("jwt", {session: false}),
async (req, res) =>{
const playlistId = req.params.playlistId; // params
const playlistfind = await playlist.findOne({_id : playlistId});

if (!playlistfind){
    return res.status(301).json({err: "Invalid Id"});
}
return res.status(200).json({playlistfind});
});

// all playlist made by an artist

router.get("/get/artist/:artistId", passport.authenticate("jwt", {session: false}),
async (req, res) =>{
    const artistId = req.params.artistId;

    const playlists = await playlist.find({owner:artistId});
    return res.status(200).json({data: playlists});
});

// add song to p[laylist

router.post("/add/song", passport.authenticate("jwt", {session:false}),
async (req, res)=>{

    const currentUser = req.user;
    const {playlistId, songId} = req.body;

    // playlist if valid

    const playlistDoc = await playlist.findOne({_id:  playlistId});

console.log(playlistDoc); // test 1
console.log(currentUser); //test2
console.log(playlistDoc.owner);  // problem exist here
console.log(currentUser._id); // test3 passed
console.log(playlistDoc.owner.equals(currentUser._id));

    if(!playlistDoc){
        return res.status(401).json({err:"Invalid playlist"})
    }

    // if currenuser owns the playlist

    if(!playlistDoc.owner.equals(currentUser._id) && !playlistDoc.collaborators.includes(currentUser._id)) {
        return res.status(301).json({err: "playlist doesnt exist"});
    };

    // check if song is valid

    const songDoc = await Song.findOne({_id: songId});
    if(!songDoc){
        return res.status(301).json({err: "invalid song"})
    }

    // if eveything is okay 

    playlistDoc.songs.push(songId);
    await playlistDoc.save();

    return res.status(200).json(playlistDoc);

});


module.exports = router; 