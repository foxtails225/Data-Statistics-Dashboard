"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gap_1 = require("../controllers/gap");
const router = express_1.Router();
router.get('/get-items', gap_1.getItems);
exports.default = router;
