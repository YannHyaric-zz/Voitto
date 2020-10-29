import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  async read(req, res) {
    try {
      const id = req.params.id;
      const aluno = await Aluno.findByPk(id);
      return res.status(200).json({ aluno, message: 'Student has been found' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    const { nome, email, cep, cidade, estado } = req.body;
    
    const newAluno = new Aluno({ ...req.body});
    const user_ = await newAluno.save();
    return res.json({ user_ });
  }

  async update(req, res) {
    try {
      const {nome, email, cep} = req.body;
      const id = req.params.id;
      const alunoId=await Aluno.update({ nome:nome, email:email, cep:cep }, {
        where: {
          id: id
        }
      });
      return res
        .status(200)
        .json({ alunoId, message: 'Student has been updated' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      await Aluno.destroy({
        where: {
            id: id
        }
    })
      res.status(200).json({ message: 'Aluno has been deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new AlunoController();
