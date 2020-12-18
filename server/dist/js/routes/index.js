"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = express_1.Router();
// routing using python scripts
// router.get("/get-items", getItems);
// routing using mysql dadabase
router.get("/get-items", controllers_1.getItem);
router.get("/get-plot", controllers_1.getPlotItems);
router.get("/get-systems", controllers_1.getSystems);
router.get("/get-system-version", controllers_1.getSystemVersion);
router.get("/get-cart", controllers_1.getCartItems);
router.get("/get-file-id", controllers_1.getFildId);
exports.default = router;
