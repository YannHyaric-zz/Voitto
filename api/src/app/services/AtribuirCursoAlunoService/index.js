import Aluno from '../../models/Aluno';
import Curso from '../../models/Curso';
import CursoAluno from '../../models/CursoAluno';

class AtribuirCursoAlunoService {
  async execute({ id_aluno, id_curso }) {

    return true;
  }
}

export default new AtribuirCursoAlunoService();
