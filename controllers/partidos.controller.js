const { Matchlol } = require('../models/partidos.models');

exports.crearPartido = async (req, res) => {
    const partido = new Matchlol(req.body);
    try {
        await partido.save();
        res.status(201).send(partido);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.leerPartidos = async (req, res) => {
    try {
        const partidos = await Matchlol.find({});
        res.status(200).send(partidos);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.leerPartidoPorId = async (req, res) => {
    try {
        const partido = await Matchlol.findById(req.params.id);
        if (!partido) {
            return res.status(404).send();
        }
        res.status(200).send(partido);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.actualizarPartido = async (req, res) => {
    try {
        const partido = await Matchlol.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!partido) {
            return res.status(404).send();
        }

        res.status(200).send(partido);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.eliminarPartido = async (req, res) => {
    try {
        const partido = await Matchlol.findByIdAndDelete(req.params.id);

        if (!partido) {
            return res.status(404).send();
        }

        res.status(200).send(partido);
    } catch (error) {
        res.status(500).send(error);
    }
};
