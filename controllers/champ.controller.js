const { Champ } = require('../models/champ.models');

exports.createChamp = async function(req, res) {
    try {
        const champ = new Champ(req.body);
        const newChamp = await champ.save();
        res.status(201).json(newChamp);
    } catch (error) {
        res.status(500).json({ message: "Error creating champ", error: error.message });
    }
};

exports.getAllChamps = async function(req, res) {
    try {
        const champs = await Champ.find({});
        res.json(champs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching champs", error: error.message });
    }
};

exports.getChampById = async function(req, res) {
    try {
        const champ = await Champ.findById(req.params.id);
        if (!champ) return res.status(404).json({ message: "Champ not found" });
        res.json(champ);
    } catch (error) {
        res.status(500).json({ message: "Error fetching champ", error: error.message });
    }
};

exports.updateChamp = async function(req, res) {
    try {
        const champ = await Champ.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!champ) return res.status(404).json({ message: "Champ not found" });
        res.json(champ);
    } catch (error) {
        res.status(500).json({ message: "Error updating champ", error: error.message });
    }
};

exports.deleteChamp = async function(req, res) {
    try {
        await Champ.findByIdAndDelete(req.params.id);
        res.json({ message: "Champ deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting champ", error: error.message });
    }
};