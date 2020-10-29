import { Model } from 'sequelize';

class CursoAluno extends Model {
  static init(sequelize) {
    super.init(
      {
        id_aluno
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'cursoAluno'
      }
    );

    return this;
  }
}

export default CursoAluno;
