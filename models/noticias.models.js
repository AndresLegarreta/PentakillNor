const mongoose = require('mongoose');

const Noticias = new mongoose.Schema({
    nombrenot: {
        type: String,
        require:true

    },
    imagennot: {
        type: String,
        require:true

    },
    link: {
        type: String,
        require:true

    },
});

const Newslol = mongoose.model('noticias', Noticias);

module.exports = {
    Newslol
}
