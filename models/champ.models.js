const mongoose = require('mongoose');

const champSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    role: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        index: true
    },
    image: {
        type: String,
        required: true
    },
    blurb: {
        type: String,
        required: true,
        index: true
    },

    // Puedes agregar más atributos según lo necesites
});

const Champ = mongoose.model('Champ', champSchema);

module.exports = {
    Champ
};