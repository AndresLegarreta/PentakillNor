const mongoose = require('mongoose');

const Liga = new mongoose.Schema({
    nombre: {
        type: String,
        require:true,
        index: true

    },
    region: {
        type: String,
        require:true,
        index: true

    },
    imagen: {
        type: String,
        require:true

    }
});

const League = mongoose.model('liga', Liga);

module.exports = {
    League
}


