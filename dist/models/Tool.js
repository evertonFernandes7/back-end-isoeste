"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Tool extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        len: {
          args: [2, 255],
          msg: 'Campo nome precisa ter entre 2 e 255 caracteres.',
        },
      },
      link: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        len: {
          args: [10, 1000],
          msg: 'Campo link precisa ter entre 10 e 1000 caracteres.',
        },
      },
      descricao: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        len: {
          args: [1, 10000],
          msg: 'Campo descrição precisa ter entre 1 e 10000 caracteres.',
        },
      },
      tags: {
        type: _sequelize2.default.STRING,
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
} exports.default = Tool;
