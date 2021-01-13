import { Router } from 'express';
import {
  getPlotItems,
  getCartItems,
  getItem,
  getSystems,
  getSystemVersion,
  getFileId,
  getEvents,
  deleteRecord,
  deleteAll,
  migrate,
  createSystem,
  createVersion,
  createModel
} from '../controllers/caesar';

const router: Router = Router();

router.get('/get-plot', getPlotItems);
router.get('/get-systems', getSystems);

router.get('/get-cart', getCartItems);
router.get('/get-file-id', getFileId);

router.get('/events', getEvents);

router.post('/get-system-version', getSystemVersion);
router.post('/get-items', getItem);
router.post('/delete-record', deleteRecord);
router.post('/delete-all', deleteAll);
router.post('/migrate', migrate);

router.post('/create-system', createSystem);
router.post('/create-version', createVersion);
router.post('/create-model', createModel);

export default router;
