import express from 'express'
import { getApplicants } from '../controllers/jobController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/applicants').get(protect, admin, getApplicants)

export default router