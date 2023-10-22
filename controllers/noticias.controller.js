const NewsLol = require('../models/noticias.models').Newslol;

exports.listarNoticias = async (req, res) => {
    try {
        const noticias = await NewsLol.find();
        res.json(noticias);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

exports.crearNoticia = async (req, res) => {
    const nuevaNoticia = new NewsLol({
        nombrenot: req.body.nombrenot,
        link: req.body.link
    });

    try {
        await nuevaNoticia.save();
        res.status(201).send(nuevaNoticia);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

exports.obtenerNoticia = async (req, res) => {
    try {
        const noticia = await NewsLol.findById(req.params.id);
        if (!noticia) {
            res.status(404).send({ message: 'Noticia no encontrada' });
            return;
        }
        res.json(noticia);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

exports.actualizarNoticia = async (req, res) => {
    try {
        const noticiaActualizada = await NewsLol.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!noticiaActualizada) {
            res.status(404).send({ message: 'Noticia no encontrada' });
            return;
        }
        res.json(noticiaActualizada);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

exports.eliminarNoticia = async (req, res) => {
    try {
        const noticiaEliminada = await NewsLol.findByIdAndRemove(req.params.id);
        if (!noticiaEliminada) {
            res.status(404).send({ message: 'Noticia no encontrada' });
            return;
        }
        res.json({ message: 'Noticia eliminada' });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};
