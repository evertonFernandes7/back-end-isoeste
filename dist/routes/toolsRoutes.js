"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ToolsController = require('../controllers/ToolsController'); var _ToolsController2 = _interopRequireDefault(_ToolsController);

const router = new (0, _express.Router)();

router.post('/', _ToolsController2.default.store);
router.get('/', _ToolsController2.default.index);
router.get('/:id', _ToolsController2.default.show);
router.put('/:id', _ToolsController2.default.update);
router.delete('/:id', _ToolsController2.default.delete);

exports. default = router;
