const mongoose = require('mongoose');

const Liga = new mongoose.Schema({
    nombre: {
        type: String,
        require:true

    },
    region: {
        type: String,
        require:true

    }
});

const League = mongoose.model('liga', Liga);

module.exports = {
    League
}


