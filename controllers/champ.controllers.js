const { Champ } = require('./Champs.models');

// Crear un nuevo campeón
async function createChamp(champData) {
    try {
        const champ = new Champ(champData);
        const newChamp = await champ.save();
        return newChamp;
    } catch (error) {
        throw error;
    }
}

// Obtener todos los campeones
async function getAllChamps() {
    try {
        const champs = await Champ.find({});
        return champs;
    } catch (error) {
        throw error;
    }
}

// Obtener un campeón por ID
async function getChampById(champId) {
    try {
        const champ = await Champ.findById(champId);
        return champ;
    } catch (error) {
        throw error;
    }
}

// Actualizar un campeón por ID
async function updateChamp(champId, champData) {
    try {
        const updatedChamp = await Champ.findByIdAndUpdate(champId, champData, { new: true });
        return updatedChamp;
    } catch (error) {
        throw error;
    }
}

// Eliminar un campeón por ID
async function deleteChamp(champId) {
    try {
        await Champ.findByIdAndDelete(champId);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createChamp,
    getAllChamps,
    getChampById,
    updateChamp,
    deleteChamp
};
