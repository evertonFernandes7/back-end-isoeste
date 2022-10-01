import Tool from '../models/Tool';

class ToolsController {
  async store(req, res) {
    try {
      const newTool = await Tool.create(req.body);
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
      const tools = await Tool.findAll();
      return res.json(tools);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const tool = await Tool.findByPk(req.params.id);
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

      const tool = await Tool.findByPk(req.params.id);

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

      const tool = await Tool.findByPk(req.params.id);

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

export default new ToolsController();
