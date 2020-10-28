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
    const aluno = req.headers.authorization;

    const [id_aluno] = await conect('incidents').insert({
      nome,
      email,
      cep,
      cidade,
      estado,
      id_aluno
    });
    return response.json({ id });
  }

  async update(req, res) {
    // TODO
  }

  async delete(req, res) {
    // TODO
  }
}

export default new AlunoController();
