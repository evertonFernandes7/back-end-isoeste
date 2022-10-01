"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Tool = require('../models/Tool'); var _Tool2 = _interopRequireDefault(_Tool);

class ToolsController {
  async store(req, res) {
    try {
      const newTool = await _Tool2.default.create(req.body);
      return res.status(201).json(newTool);
    } catch (e) {
      return res.status(401).json(
        { errors: e.errors.map((err) => err.message) },
      );
    }
  }

  // Index
  async index(req, res) {
    try {
      const tools = await _Tool2.default.findAll();
      return res.json(tools);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const tool = await _Tool2.default.findByPk(req.params.id);
      return res.json(tool);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.json.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const tool = await _Tool2.default.findByPk(req.params.id);

      if (!tool) {
        return res.json.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const newTools = await tool.update(req.body);

      return res.json(newTools);
    } catch (e) {
      return res.status(401).json(
        { errors: e.errors.map((err) => err.message) },
      );
    }
  }

  // Delete

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.json.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const tool = await _Tool2.default.findByPk(req.params.id);

      if (!tool) {
        return res.json.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      await tool.destroy();

      return res.json('Ferramenta deletada com sucesso!');
    } catch (e) {
      return res.json('usuário já foi deletado');
    }
  }
}

exports. default = new ToolsController();
