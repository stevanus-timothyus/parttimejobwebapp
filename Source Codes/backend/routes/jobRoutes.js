import express from 'express'
import { getJobs, getJobById, deleteJob, createApplicant, updateJob, createJob } from '../controllers/jobController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


const router = express.Router()

router.route('/').get(getJobs).post(protect, admin, createJob)
router.route('/:id').get(getJobById).delete(protect, admin, deleteJob).put(protect, admin, updateJob)
router.route('/:id/apply').post(protect, createApplicant)

export default router