const jwt = require('jsonwebtoken');
const User = require('../models/user.model.js').User;
const { config } = require('../config/config');

async function registrarUsuario(req, res) {
    const usern = req.body.us;
    const passw = req.body.pass;
    const mail = req.body.correo

    try {
        const newUser = await new User({
            username: usern,
            password: passw,
            correouser: mail,

        }).save();
        res.json({
            message: 'Register OK',
            obj: newUser
        });
    } catch (err) {
        console.log(err);
        res.status(500).send('Error al registrar usuario');
    }
}

async function login(req, res) {
    const usern = req.body.us;
    const passw = req.body.pass;

    try {
        const user = await User.findOne({ username: usern });
        if (user && user.password === passw) {
            // Generamos el JWT
            const token = jwt.sign({ userId: user._id }, config.auth.secretKey, { expiresIn: '1h' });
            res.json({
                message: 'login OK',
                token: token
            });
        } else {
            res.status(401).json({ message: 'login ERROR' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Error al hacer login');
    }
}


async function obtenerUsuarios(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send('Error al obtener usuarios');
    }
}

// Obtener un usuario por ID
async function obtenerUsuario(req, res) {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(500).send('Error al obtener el usuario');
    }
}

// Actualizar un usuario
async function actualizarUsuario(req, res) {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedUser);
    } catch (err) {
        res.status(500).send('Error al actualizar usuario');
    }
}

// Eliminar un usuario
async function eliminarUsuario(req, res) {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'Usuario eliminado' });
    } catch (err) {
        res.status(500).send('Error al eliminar usuario');
    }
}

module.exports = {
    registrarUsuario,
    login,
    obtenerUsuarios,
    obtenerUsuario,
    actualizarUsuario,
    eliminarUsuario
};


