import { Router } from 'express';
import AlunoController from '../app/controllers/AlunoController';

/** Controllers */
import AlunosController from '../app/controllers/AlunoController';
/**  * */

const routes = new Router();

routes.get('/alunos', AlunosController.index);
router.get('/alunos/:id',  AlunoController.read);
router.put('/alunos/:id', upload, AlunoController.update);
router.delete('/alunos/:id',  AlunoController.delete);

export default routes;
