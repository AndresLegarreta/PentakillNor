const mongoose = require('mongoose');

const Match = new mongoose.Schema({
    leagueName: {
        type: mongoose.Schema.ObjectId,
        ref: 'liga',
        required: true,
        index: true
    },
    team1: {
        type: String,
        required: true,
        index: true
    },
    team1Image: {
        type: String,
        required: true
    },
    team2: {
        type: String,
        required: true,
        index: true
    },
    team2Image: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
        index: true
    },
    teamGp: {
        type: String,
        required: true,
        index: true
    },
    gameName: {
        type: String,
        required: true,
        index: true
    },
    matchName: {
        type: String,
        required: true,
        index: true
    },
});

const Lol = mongoose.model('partidosand', Match);

module.exports = {
    Lol
};
