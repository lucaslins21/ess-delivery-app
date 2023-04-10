import express from 'express';
import UsuarioController from '@controllers/UsuarioController'
import ItemController from '@controllers/ItemController';

const routes = express.Router();
const usuarioController = new UsuarioController();
const itemController = new ItemController();

routes.post('/usuario', usuarioController.create);
routes.get('/usuario', usuarioController.get);
routes.get('/usuario/:id', usuarioController.getById);
routes.delete('/usuario/:id', usuarioController.delete);
routes.put('/usuario/:id', usuarioController.update);
routes.post('/login', usuarioController.login);

routes.post('/item', itemController.create);
routes.get('/item', itemController.get);
routes.get('/item/:id', itemController.getById);
routes.delete('/item/:id', itemController.delete);
routes.put('/item/:id', itemController.update);

export default routes;