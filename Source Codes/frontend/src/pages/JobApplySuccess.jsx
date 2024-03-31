import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import jobs from '../data/jobs'

const JobApply = () => {
    const { id } = useParams()
    const job = jobs.find((job) => job._id === id)

    return (
        <div className='container min-vh-100'>
            <h1 className='lead'>Thank You for Application</h1>
            <p className='my-10'>We will get back to you soon via email</p>
        </div>
    )
}

export default JobApply
