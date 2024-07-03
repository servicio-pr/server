/* Controllers */
const temaController = require('../controllers/tema');
module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send ({
         message: 'Example project did not give you access to the api web services',
    }));   
     app.post('/api/tema/create/nombre/:nombre/descripcion/:descripcion/prioridad/:prioridad', temaController.create);
     app.get('/api/tema/list', temaController.list);
     app.get('/api/tema/find/nombre/:nombre', temaController.find);
     };