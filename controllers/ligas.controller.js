const { League } = require('../models/ligas.models');

exports.crearLiga = async (req, res) => {
    const liga = new League(req.body);
    try {
        await liga.save();
        res.status(201).send(liga);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.leerLigas = async (req, res) => {
    try {
        const ligas = await League.find({});
        res.status(200).send(ligas);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.leerLigaPorId = async (req, res) => {
    try {
        const liga = await League.findById(req.params.id);
        if (!liga) {
            return res.status(404).send();
        }
        res.status(200).send(liga);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.actualizarLiga = async (req, res) => {
    try {
        const liga = await League.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!liga) {
            return res.status(404).send();
        }

        res.status(200).send(liga);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.eliminarLiga = async (req, res) => {
    try {
        const liga = await League.findByIdAndDelete(req.params.id);

        if (!liga) {
            return res.status(404).send();
        }

        res.status(200).send(liga);
    } catch (error) {
        res.status(500).send(error);
    }
};
