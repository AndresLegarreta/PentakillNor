const mongoose = require('mongoose');

const Partido = new mongoose.Schema({
    nombreleague: {
        type: mongoose.Schema.ObjectId,
        ref: 'liga',
        require:true,
        index: true 

    },
    equipo1: {
        type: String,
        require:true,
        index: true 

    },
    equipo2: {
        type: String,
        require:true,
        index: true 

    },
    fecha: {
        type: String,
        require:true,
        index: true 

    },
    equipogp: {
        type: String,
        require:true,
        index: true 

    },
    gamenm: {
        type: String,
        require:true,
        index: true 

    },
    nombrepartido: {
        type: String,
        require:true,
        index: true 

    },

});

const Matchlol = mongoose.model('partido', Partido);

module.exports = {
    Matchlol
}
