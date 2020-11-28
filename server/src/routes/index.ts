import { Router } from 'express';
import { getItems, getPlotItems } from '../controllers';
 
const router: Router = Router();

router.get('/get-items', getItems);
router.get('/get-plot', getPlotItems);

export default router;
