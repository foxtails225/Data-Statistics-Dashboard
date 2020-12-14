import { Router } from "express";
import {
  getItems,
  getPlotItems,
  getCartItems,
  getItem,
} from "../controllers";

const router: Router = Router();

// routing using python scripts
// router.get("/get-items", getItems);

// routing using mysql dadabase
router.get("/get-items", getItem);

router.get("/get-plot", getPlotItems);
router.post("/get-cart", getCartItems);

export default router;
