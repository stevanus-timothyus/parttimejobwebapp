import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import jobs from './data/jobs.js'
import applicants from './data/applicants.js'
import Job from "./models/jobModel.js";
import User from "./models/userModel.js";
import Applicant from "./models/applicantModel.js";
import connectDB from "./config/db.js";

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Job.deleteMany()
        await User.deleteMany()
        await Applicant.deleteMany()

        const createdUser = await User.insertMany(users)
        const adminUser = createdUser[0]._id

        const sampleJobs = jobs.map((job) => {
            return { ...job, user: adminUser }
        })

        await Job.insertMany(sampleJobs)
        await Applicant.insertMany(applicants)

        console.log('Data Imported!'.green.inverse)
        process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1)
    }
}
const destroyData = async () => {
    try {
        await Job.deleteMany()
        await User.deleteMany()
        await Applicant.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}