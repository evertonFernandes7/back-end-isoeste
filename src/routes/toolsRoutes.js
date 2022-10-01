import { Router } from 'express';
import toolsController from '../controllers/ToolsController';

const router = new Router();

router.post('/', toolsController.store);
router.get('/', toolsController.index);
router.get('/:id', toolsController.show);
router.put('/:id', toolsController.update);
router.delete('/:id', toolsController.delete);

export default router;
