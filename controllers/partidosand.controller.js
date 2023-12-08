const { Lol } = require('../models/partidosand.models');

exports.createMatch = async (req, res) => {
    const match = new Lol(req.body);
    try {
        await match.save();
        res.status(201).send({ match, message: 'Partido creado con éxito.' });
    } catch (error) {
        res.status(400).send({ error, message: 'Error al crear el partido.' });
    }
};

exports.readMatches = async (req, res) => {
    try {
        const matches = await Lol.find().populate({
            path: 'leagueName',
            select: 'nombre'
        });
        res.status(200).send(matches);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.readMatchById = async (req, res) => {
    try {
        const match = await Lol.findById(req.params.id);
        if (!match) {
            return res.status(404).send();
        }
        res.status(200).send(match);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateMatch = async (req, res) => {
    try {
        const match = await Lol.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!match) {
            return res.status(404).send();
        }

        res.status(200).send(match);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteMatch = async (req, res) => {
    try {
        const match = await Lol.findByIdAndDelete(req.params.id);

        if (!match) {
            return res.status(404).send();
        }

        res.status(200).send(match);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.readMatchesByLeague = async (req, res) => {
    const leagueId = req.query.leagueId;

    try {
        const matches = await Lol.find({ leagueName: leagueId }).populate("leagueName");
        res.status(200).send(matches);
    } catch (error) {
        res.status(500).send({ error, message: 'Error al obtener los partidos.' });
    }
};
