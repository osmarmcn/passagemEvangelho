
import { Router } from 'express'
import { createPlan, getHistory } from '../controllers/planController.js'


const router = Router()


router.post('/generate-plan', createPlan)


router.get('/history', getHistory)

export default router