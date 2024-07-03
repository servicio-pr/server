const Sequelize = require('sequelize');
const tema = require('../models').tema;
module.exports = { create(req, res) {
    return tema
        .create ({
             nombre: req.params.nombre,
             descripcion: req.params.descripcion,
             prioridad: req.params.prioridad
        })
        .then(tema => res.status(200).send(tema))
        .catch(error => res.status(400).send(error))
 }, list(_, res) {
     return tema.findAll({})
        .then(tema => res.status(200).send(tema))
        .catch(error => res.status(400).send(error))
 }, find (req, res) {
     return tema.findAll({
         where: {
             nombre: req.params.nombre,
         }
     })
     .then(tema => res.status(200).send(tema))
     .catch(error => res.status(400).send(error))
  },
};