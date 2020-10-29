import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  async read(req, res) {
    // TODO
  }

  async create(req, res) {
    const { nome, email, cep, cidade, estado } = req.body;
    const id_aluno = req.headers.authorization;

    const [id] = await conect('aluno').insert({
      nome,
      email,
      cep,
      cidade,
      estado,
      id_aluno
    });
    return res.json({ id });
  }

  async update(req, res) {
    // TODO
  }

  async delete(req, res) {
    const {id} = req.params;
    const aluno = await Aluno.deleteById(id);
  }
}

export default new AlunoController();
