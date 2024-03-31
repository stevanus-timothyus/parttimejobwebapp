import Job from '../models/jobModel.js'
import asyncHandler from 'express-async-handler'
import Applicant from '../models/applicantModel.js'




// @desc Fecth all jobs
// @route GET /api/jobs
// @access Public
const getJobs = asyncHandler(async(req, res) => {
    const jobs = await Job.find({})

    res.json(jobs)
})


// @desc Fecth single job
// @route GET /api/jobs/:id
// @access Public
const getJobById = asyncHandler(async(req, res) => {
    const job = await Job.findById(req.params.id)

    if(job) {
        res.json(job)
    } else {
        res.status(404).json({message: 'Job not found'})
    }
})

// @desc Delete a product
// @route DELETE /api/jobs/:id
// @access Private/Admin
const deleteJob = asyncHandler(async(req, res) => {
    const job = await Job.findById(req.params.id)

    if(job) {
        await job.remove()
        res.json({
            message: 'Job removed'
        })
    } else {
        res.status(404).json({message: 'Job not found'})
    }
})

// @desc Create a product
// @route POST /api/jobs
// @access Private/Admin
const createJob = asyncHandler(async(req, res) => {
    const job = new Job({
        title : 'Edit Title',
        company : 'Edit Company',
        description : 'Edit Description',
        jobtype : 'Edit Jobtype',
        payment : 'Edit Payment',
        vacancies : 0,
        location : 'Edit Location',
        date : '00-00-00',
    })

    const createdJob = await job.save()
    res.status(201).json(createdJob)
})

// @desc Update a product
// @route PUT /api/jobs/:id
// @access Private/Admin
const updateJob = asyncHandler(async(req, res) => {
    const {title, company, description, jobtype, payment, vacancies, location, date} = req.body

    const job = await Job.findById(req.params.id)

    if(job) {
        job.title = title
        job.company = company
        job.description = description
        job.jobtype = jobtype
        job.payment = payment
        job.vacancies = vacancies
        job.location = location
        job.date = date

        const updatedJob = await job.save()
        res.json(updatedJob)
    } else {
        res.status(404)
        throw new Error('Job not found')
    }

    
})

// @desc Post job application
// @route POST /api/jobs/:id/apply
// @access Private/User
const createApplicant = asyncHandler(async(req, res) => {
    const { title, name, email, introduction } = req.body

    const applicant = await Applicant.create({
        title,
        name,
        email,
        introduction
    })

    if(applicant) {
        res.status(201).json({
            _id: applicant._id,
            title: applicant.title,
            name: applicant.name,
            email: applicant.email,
            introduction: applicant.introduction,
        })
    } else {
        res.status(400)
        throw new Error('Invalid data')
    }

})

// @desc Fecth all applicants
// @route GET /api/applicants
// @access Private/admin
const getApplicants = asyncHandler(async(req, res) => {
    const applicants = await Applicant.find({})
    if(applicants) {
        res.json(applicants)
    }
})




export {
    getJobs, getJobById, deleteJob, createApplicant, getApplicants, createJob, updateJob
}