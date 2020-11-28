"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = express_1.Router();
router.get('/get-items', controllers_1.getItems);
router.get('/get-plot', controllers_1.getPlotItems);
exports.default = router;
