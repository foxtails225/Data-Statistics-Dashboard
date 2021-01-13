import { Router } from 'express';
import {
  getModifySystems,
  getModifyVersions,
  getSystemVersion,
  getModifyAttrVersions,
  getModifyModels,
  processing
} from '../controllers';

const router: Router = Router();

router.get('/get-system-version', getSystemVersion);
router.get('/get-modify-systems', getModifySystems);
router.get('/get-modify-versions', getModifyVersions);
router.get('/get-modify-attr-versions', getModifyAttrVersions);
router.get('/get-modify-models', getModifyModels);
router.post('/processing', processing);

export default router;
