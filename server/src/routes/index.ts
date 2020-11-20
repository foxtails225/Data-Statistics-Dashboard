import { Router } from 'express'
import { getItems } from '../controllers/gap'
 
const router: Router = Router()

router.get('/get-items', getItems)

export default router
