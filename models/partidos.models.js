const mongoose = require('mongoose');

const Partido = new mongoose.Schema({
    equipo1: {
        type: String,
        require:true

    },
    equipo2: {
        type: String,
        require:true

    },
    fecha: {
        type: Date,
        require:true

    },
    equipogp: {
        type: String,
        require:true

    }
});

const Matchlol = mongoose.model('partido', Partido);

module.exports = {
    Matchlol
}