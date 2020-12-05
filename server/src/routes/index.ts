import { Router } from "express";
import { getItems, getPlotItems, getCartItems } from "../controllers";

const router: Router = Router();

router.get("/get-items", getItems);
router.get("/get-plot", getPlotItems);
router.post("/get-cart", getCartItems);

export default router;
