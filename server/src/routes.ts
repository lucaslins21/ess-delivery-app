import express from 'express';
import UsuarioController from '@controllers/UsuarioController'

const routes = express.Router();
const usuarioController = new UsuarioController();

routes.post('/usuario', usuarioController.create);
routes.get('/usuario', usuarioController.get);
routes.delete('/usuario/:id', usuarioController.delete);
routes.put('/usuario/:id', usuarioController.update);


export default routes;