import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    jobtype: {
        type: String,
        required: true
    },
    payment: {
        type: String,
        required: true
    },
    vacancies: {
        type: Number,
        required: true,
        default: 0
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
}, {
    timestamps : true
})

const Job = mongoose.model('Job', jobSchema)

export default Job