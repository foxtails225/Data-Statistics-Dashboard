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
router.post("/get-cart", controllers_1.getCartItems);
exports.default = router;
