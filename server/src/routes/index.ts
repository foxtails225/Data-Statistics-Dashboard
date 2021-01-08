import { Router } from 'express';
import multer from 'multer';
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
  deleteRecord,
  deleteAll,
  migrate,
  createSystem,
  createVersion,
  createModel,
  processScripts
} from '../controllers';

const router: Router = Router();
const storage = multer.diskStorage({
  destination: './assets/',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

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

router.post('/delete-record', deleteRecord);
router.post('/delete-all', deleteAll);
router.post('/migrate', migrate);

router.post('/create-system', createSystem);
router.post('/create-version', createVersion);
router.post('/create-model', createModel);

router.post('/process-scripts', processScripts);
router.post('/upload-file', upload.single('upload'), (req, res) => {
  res.send(req.file);
});

export default router;
