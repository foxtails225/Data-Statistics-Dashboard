import { Router } from 'express';
import { getSystems, getVersions, getAttrVersions, getModels, processing } from '../controllers/process';

const router: Router = Router();

router.get('/get-modify-systems', getSystems);
router.get('/get-modify-versions', getVersions);
router.get('/get-modify-attr-versions', getAttrVersions);
router.get('/get-modify-models', getModels);
router.post('/processing', processing);

export default router;
