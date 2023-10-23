const mongoose = require('mongoose');

const champSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
    
    //Otros atributos de campeones
});

const Champ = mongoose.model('Champ', champSchema);

module.exports = {
    Champ
};
