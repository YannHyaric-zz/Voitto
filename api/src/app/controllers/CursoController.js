import Curso from '../models/Curso';

class CursoController {
  async index(req, res) {
    const cursos = await Curso.findAll();
    res.json(cursos);
  }

  async read(req, res) {
    try {
      const id = req.params.id;
      const curso = await Curso.findByPk(id);
      return res.status(200).json({ curso, message: 'Curso has been found' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {    
    const newCurso = new Curso({ ...req.body});
    const user_ = await newCurso.save();
    return res.json({ user_ });
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      await Curso.destroy({
        where: {
            id: id
        }
    })
      res.status(200).json({ message: 'Curso has been deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new CursoController();
