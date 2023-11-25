const mongoose = require('mongoose');

const Partido = new mongoose.Schema({
    nombreleague: {
        type: String,
        require:true

    },
    equipo1: {
        type: String,
        require:true

    },
    equipo1res: {
        type: String,
        require:true

    },
    equipo2: {
        type: String,
        require:true

    },
    equipo2res: {
        type: String,
        require:true

    },
    fecha: {
        type: String,
        require:true

    },
    equipogp: {
        type: String,
        require:true

    },
    gamenm: {
        type: String,
        require:true

    },
    nombrepartido: {
        type: String,
        require:true

    },

});

const Matchlol = mongoose.model('partido', Partido);

module.exports = {
    Matchlol
}
