const mongoose = require('mongoose');

const Playlists = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    thumbnail: {
        type: String,
        reuired: true,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },

    // playlist song and collaborators schema

    songs: [{
        type: mongoose.Types.ObjectId,
        ref: "songs",
    },
    ],

    collaborators: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
    }],

});


const PlaylistsModel = mongoose.model("Playlists", Playlists);

module.exports = PlaylistsModel;