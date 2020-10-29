import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  async read(req, res) {
    try {
      const id = req.params.id;
      const aluno=await Aluno.findById(id);
      return res.status(200).json({ aluno, message: 'Student has been found' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }  }

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
    try {
      const update = req.body;
      const id = req.params.id;

      const aluno = await Aluno.findByIdAndUpdate(
        id,
        { $set: update },
        { new: true }
      );

      return res.status(200).json({ aluno, message: 'Student has been updated' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      await Aluno.findByIdAndDelete(id);
      res.status(200).json({ message: "Aluno has been deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new AlunoController();
