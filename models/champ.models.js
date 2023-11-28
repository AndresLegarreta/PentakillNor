const mongoose = require('mongoose');

const champSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },

    // Puedes agregar más atributos según lo necesites
});

const Champ = mongoose.model('Champ', champSchema);

module.exports = {
    Champ
};