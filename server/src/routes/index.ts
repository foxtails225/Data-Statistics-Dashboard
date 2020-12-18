import { Router } from "express";
import {
  getItems,
  getPlotItems,
  getCartItems,
  getItem,
  getSystems,
  getSystemVersion,
  getFildId,
} from "../controllers";

const router: Router = Router();

// routing using python scripts
// router.get("/get-items", getItems);

// routing using mysql dadabase
router.get("/get-items", getItem);

router.get("/get-plot", getPlotItems);
router.get("/get-systems", getSystems);
router.get("/get-system-version", getSystemVersion);
router.get("/get-cart", getCartItems);
router.get("/get-file-id", getFildId);

export default router;
