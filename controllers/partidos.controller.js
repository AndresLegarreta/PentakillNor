const { Matchlol } = require('../models/partidos.models');

exports.crearPartido = async (req, res) => {
    const partido = new Matchlol(req.body);
    try {
        await partido.save();
        res.status(201).send({partido, message: 'Partido creado con éxito.'});
    } catch (error) {
        res.status(400).send({ error, message: 'Error al crear el partido.' });
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
exports.leerPartidosPorFechaYLiga = async (req, res) => {
    const fecha = new Date(req.query.fecha);
    const nombreleague = req.query.nombreleague; 

    try {
        const partidos = await Matchlol.find({
            fecha: fecha,
            nombreleague: nombreleague 
        });

        if (!partidos || partidos.length === 0) {
            return res.status(404).send({message: 'No se encontraron partidos para la fecha y liga especificadas'});
        }

        res.status(200).send(partidos);
    } catch (error) {
        res.status(500).send(error);
    }
};

