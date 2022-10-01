import Sequelize, { Model } from 'sequelize';

export default class Tool extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        len: {
          args: [2, 255],
          msg: 'Campo nome precisa ter entre 2 e 255 caracteres.',
        },
      },
      link: {
        type: Sequelize.STRING,
        defaultValue: '',
        len: {
          args: [10, 1000],
          msg: 'Campo link precisa ter entre 10 e 1000 caracteres.',
        },
      },
      descricao: {
        type: Sequelize.STRING,
        defaultValue: '',
        len: {
          args: [1, 10000],
          msg: 'Campo descrição precisa ter entre 1 e 10000 caracteres.',
        },
      },
      tags: {
        type: Sequelize.STRING,
        defaultValue: '',
        len: {
          args: [2, 10000],
          msg: 'Campo tags precisa ter entre 2 e 10000 caracteres.',
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
