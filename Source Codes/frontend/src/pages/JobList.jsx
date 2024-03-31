import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container } from 'react-bootstrap'
import { listJobs, deleteJob, createJob } from '../actions/jobActions'
import { useNavigate } from 'react-router-dom'
import { JOB_CREATE_RESET } from '../constants/jobConstants'

const JobList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const jobList = useSelector((state) => state.jobList)
    const { jobs } = jobList

    const jobDelete = useSelector((state) => state.jobDelete)
    const { success: successDelete } = jobDelete

    const jobCreate = useSelector((state) => state.jobCreate)
    const { success: successCreate, job: createdJob } = jobCreate

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch({ type: JOB_CREATE_RESET })

        if (!userInfo.isAdmin) {
            navigate('/login')
        }

        if (successCreate) {
            navigate(`/admin/jobs/${createdJob._id}/edit`)
        } else {
            dispatch(listJobs())
        }
    }, [dispatch, successDelete, userInfo, navigate, successCreate, createdJob])

    const deleteHandler = (id) => {
        dispatch(deleteJob(id))
    }

    const createJobHandler = () => {
        dispatch(createJob())
    }

    return (
        <Container className='py-10'>
            <h1 className='text-center mb-5' style={{ fontSize: '40px' }}>
                Job Listed
            </h1>
            <Button className='my-3 btn-secondary' onClick={createJobHandler}>
                <i className='fas fa-plus'> A D D J O B</i>
            </Button>
            <Table striped bordered hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>COMPANY</th>
                        <th>POSTED</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {jobs &&
                        jobs.map((job) => (
                            <tr key={job._id}>
                                <td>{job.title}</td>
                                <td>{job.company}</td>
                                <td>{job.date}</td>
                                <td>
                                    <LinkContainer
                                        to={`/admin/jobs/${job._id}/edit`}
                                    >
                                        <Button
                                            variant='light'
                                            className='btn-sm'
                                        >
                                            <i className='fas fa-edit'></i>
                                        </Button>
                                    </LinkContainer>
                                    <Button
                                        variant='danger'
                                        className='btn-sm'
                                        onClick={() => deleteHandler(job._id)}
                                    >
                                        <i
                                            className='fas fa-trash'
                                            style={{ color: 'red' }}
                                        ></i>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default JobList
