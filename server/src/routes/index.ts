import { Router } from 'express';
import {
  changeDB,
  getPlotItems,
  getCartItems,
  getItem,
  getSystems,
  getModifySystems,
  getModifyVersions,
  getSystemVersion,
  getModifyAttrVersions,
  getModifyModels,
  getFileId,
  getEvents,
  deleteRecord,
  deleteAll,
  migrate,
  createSystem,
  createVersion,
  createModel,
  processing
} from '../controllers';

const router: Router = Router();

router.get('/get-items', getItem);
router.get('/get-plot', getPlotItems);
router.get('/get-systems', getSystems);
router.get('/get-system-version', getSystemVersion);
router.get('/get-cart', getCartItems);
router.get('/get-file-id', getFileId);
router.get('/get-modify-systems', getModifySystems);
router.get('/get-modify-versions', getModifyVersions);
router.get('/get-modify-attr-versions', getModifyAttrVersions);
router.get('/get-modify-models', getModifyModels);
router.get('/change-db', changeDB);
router.get('/events', getEvents);

router.post('/delete-record', deleteRecord);
router.post('/delete-all', deleteAll);
router.post('/migrate', migrate);

router.post('/create-system', createSystem);
router.post('/create-version', createVersion);
router.post('/create-model', createModel);

router.post('/processing', processing);

export default router;
