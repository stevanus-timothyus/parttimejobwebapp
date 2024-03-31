import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { listJobDetail, updateJob } from '../actions/jobActions'
import { useParams, useNavigate } from 'react-router-dom'
import { JOB_UPDATE_RESET } from '../constants/jobConstants'

const JobEdit = () => {
    const { id } = useParams()
    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [description, setDescription] = useState('')
    const [jobtype, setJobtype] = useState('')
    const [payment, setPayment] = useState('')
    const [vacancies, setVacancies] = useState(0)
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const jobDetail = useSelector((state) => state.jobDetail)
    const { job, error } = jobDetail

    const jobUpdate = useSelector((state) => state.jobUpdate)
    const { error: errorUpdate, success: successUpdate } = jobUpdate

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: JOB_UPDATE_RESET })
            navigate(`/admin/joblist`)
        } else {
            if (!job.name || job._id !== id) {
                dispatch(listJobDetail(id))
            } else {
                setTitle(job.title)
                setCompany(job.company)
                setDescription(job.description)
                setJobtype(job.jobtype)
                setPayment(job.payment)
                setVacancies(job.vacancies)
                setLocation(job.location)
                setDate(job.date)
            }
        }
    }, [dispatch, navigate, id, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            updateJob({
                _id: id,
                title,
                company,
                description,
                jobtype,
                payment,
                vacancies,
                location,
                date,
            })
        )
    }

    return (
        <Container>
            <Link to='/admin/joblist' className='btn-secondary'>
                Go Back
            </Link>
            <FormContainer>
                <h1>Edit Job</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='title'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='company'>
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter Company Name'
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter Job Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='jobtype'>
                        <Form.Label>Job Type</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter Job Type'
                            value={jobtype}
                            onChange={(e) => setJobtype(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='payment'>
                        <Form.Label>Payment</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter Payment Amount'
                            value={payment}
                            onChange={(e) => setPayment(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='vacancies'>
                        <Form.Label>Vacancies</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter No. of Manpower needed'
                            value={vacancies}
                            onChange={(e) => setVacancies(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='location'>
                        <Form.Label>location</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter The Work Location'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='date'>
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter the Date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Button type='submit' className='btn-primary flex-row'>
                        Update
                    </Button>
                </Form>
            </FormContainer>
        </Container>
    )
}

export default JobEdit
