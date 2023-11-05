const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/songs");
const SongsModel = require("../models/songs");


router.post("/create", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const { name, thumbnail, track } = req.body;
    if (!name || !thumbnail || !track) {
        return res.status(400).json({ err: "No sufficient data provided" });
    }
    const artist = req.user._id;
    console.log(artist);
    const songDetails = { name, thumbnail, track, artist };
    const songCreated = await Song.create(songDetails);
    return res.status(200).json(songCreated);
    

});


router.get("/get/mysong", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const songs = await Song.find({ artist: req.user._id }).populate("artist");
    return res.status(200).json({ data: songs });
});


// route to send particular artist song
router.get("/get/artist/:artistId", passport.authenticate("jwt", { session: false }),
    async (req, res) => {

        const { artistId } = req.params.artistId;
        const songs = await Song.find({ artist: artistId });
        return res.status(200).json({data : songs});
    }
);

//get route to get a single song by name

router.get("/get/songname/:songName", passport.authenticate("jwt", {session : false}),
async (req, res)=>{
    const songName = req.params.songName; // or const {songName} = req.params ----> destructuring
    const songs = await Song.find({name: songName});
    console.log(songs);
    return res.status(200).json({data: songs});
});

 
    module.exports = router;