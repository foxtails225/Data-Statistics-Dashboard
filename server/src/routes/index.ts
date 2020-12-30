import { Router } from "express";
import {
  changeDB,
  getPlotItems,
  getCartItems,
  getItem,
  getSystems,
  getSystemVersion,
  getFildId,
  deleteRecord,
  deleteAll,
  migrate,
} from "../controllers";

const router: Router = Router();

router.get("/get-items", getItem);
router.get("/get-plot", getPlotItems);
router.get("/get-systems", getSystems);
router.get("/get-system-version", getSystemVersion);
router.get("/get-cart", getCartItems);
router.get("/get-file-id", getFildId);
router.get("/change-db", changeDB);

router.post("/delete-record", deleteRecord);
router.post("/delete-all", deleteAll);
router.post("/migrate", migrate);

export default router;
