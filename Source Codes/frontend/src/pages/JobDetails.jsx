import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listJobDetail } from '../actions/jobActions'

const JobDetails = () => {
    const { id } = useParams()

    const dispatch = useDispatch()
    const jobDetail = useSelector((state) => state.jobDetail)
    const { job } = jobDetail

    const userInfo = localStorage.getItem('userInfo')

    useEffect(() => {
        dispatch(listJobDetail(id))
    }, [dispatch])

    return (
        <section id='jobdetails'>
            <div className='jobdetails container'>
                <div className='info-card-wrapper flex-column'>
                    <div className='info-card-title'>
                        <h1>( {job.title} )</h1>
                    </div>
                    <div className='info-card-content flex-column'>
                        <p>Company : {job.company}</p>
                        <p>Description : {job.description}</p>
                        <p>Job Type : {job.jobtype}</p>
                        <p>Payment : {job.payment}</p>
                        <p>Vacancies : {job.vacancies}</p>
                        <p>Location : {job.location}</p>
                        <p>Date : {job.date}</p>
                    </div>
                    <Link to={userInfo ? `/jobs/${id}/apply` : '/login'}>
                        <h3 className='apply-btn'>Apply</h3>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default JobDetails
