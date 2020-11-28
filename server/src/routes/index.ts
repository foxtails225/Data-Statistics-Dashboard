import { Router } from 'express';
import { getItems, getPlotItems } from '../controllers/gap';
 
const router: Router = Router();

router.get('/get-items', getItems);
router.get('/get-plot', getPlotItems);

export default router;
