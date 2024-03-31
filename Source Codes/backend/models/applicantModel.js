import mongoose from "mongoose";

const applicantSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    introduction: {
        type: String,
        required: true,
    },
})

const Applicant = mongoose.model('Applicant', applicantSchema)

export default Applicant