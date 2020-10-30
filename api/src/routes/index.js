import { Router } from 'express';
const { celebrate, Segments, Joi } = require("celebrate");

/** Controllers */
import AlunoController from '../app/controllers/AlunoController';
import CursoController from '../app/controllers/CursoController';
/**  * */

const routes = new Router();

routes.get('/alunos', AlunoController.index);
routes.post('/alunos', AlunoController.create);
routes.get('/alunos/:id', AlunoController.read);
routes.put('/alunos/:id',celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().required().email(),
        cep:Joi.string().required().min(10).max(12),
        cidade:Joi.string(),
        estado:Joi.string().required().min(1).max(2)
    })
}), AlunoController.update);
routes.delete('/alunos/:id', AlunoController.delete);

routes.get('/cursos', CursoController.index);
routes.post('/cursos', CursoController.create);
routes.get('/cursos/:id', CursoController.read);
routes.delete('/cursos/:id', CursoController.delete);

export default routes;