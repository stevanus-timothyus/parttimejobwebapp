import dayjs from 'dayjs'
import jobs from '../data/jobs'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { listJobs } from '../actions/jobActions'

const Day = ({ day, rowIdx }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listJobs())
    }, [dispatch])

    const jobList = useSelector((state) => state.jobList)
    const { jobs } = jobList

    const getCurrentDayClass = () => {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
            ? 'bg-red-600 text-white rounded-full w-7'
            : ''
    }

    return (
        <div className='border border-gray-200 flex flex-col'>
            <header className='flex flex-col items-center'>
                {rowIdx === 0 && (
                    <p className='text-sm mt-1'>
                        {day.format('ddd').toUpperCase()}
                    </p>
                )}
                <p
                    className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}
                >
                    {day.format('DD')}
                </p>
            </header>
            {jobs.map((job) => {
                if (job.date === day.format('YY-MM-DD')) {
                    return (
                        <Link to={`/job-detail/${job._id}`}>
                            <div className='job-link'>
                                <h1>{job.title}</h1>
                            </div>
                        </Link>
                    )
                }
            })}
        </div>
    )
}

export default Day
