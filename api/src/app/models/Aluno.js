import { Model, DataTypes } from 'sequelize';

class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: DataTypes.STRING,
          defaultValue: ""
        },
        email:{
          type: DataTypes.STRING,
          defaultValue: ""
        },
        cep: {
          type: DataTypes.STRING,
          defaultValue: ""
        },
        cidade: {
          type: DataTypes.STRING,
          defaultValue: ""
        },
        estado: {
          type: DataTypes.STRING,
          defaultValue: ""
        }
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'aluno'
      }
    );

    return this;
  }
}

export default Aluno;
