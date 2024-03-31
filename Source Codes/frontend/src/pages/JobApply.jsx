import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createApplicant, listJobDetail } from '../actions/jobActions'
import FormContainer from '../components/FormContainer'

const JobApply = () => {
    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [introduction, setIntroduction] = useState('')

    const { id } = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const applicantData = useSelector((state) => state.createApplicant)
    const { applicant, error } = applicantData

    const jobDetail = useSelector((state) => state.jobDetail)
    const { job } = jobDetail

    useEffect(() => {
        dispatch(listJobDetail(id))
        setTitle(job.title)
    }, [navigate, dispatch])

    const submitHandler = (e) => {
        e.preventDefault()
        if (name && email && introduction) {
            dispatch(createApplicant(id, title, name, email, introduction))
            navigate('/jobs/applysuccess')
        }
    }

    return (
        <>
            <div className='container'>
                <FormContainer>
                    <h1>Application</h1>
                    {error && <h1>{error}</h1>}
                    <form onSubmit={submitHandler} className='flex-column'>
                        <div className='form-group flex-row'>
                            <label htmlFor='title'>Job Title</label>
                            <input
                                type='text'
                                name='title'
                                disabled={true}
                                value={title}
                            />
                        </div>
                        <div className='form-group flex-row'>
                            <label htmlFor='name'>Name</label>
                            <input
                                type='text'
                                name='name'
                                placeholder='Enter Name'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='form-group flex-row'>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='text'
                                name='email'
                                placeholder='Enter Email Address'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='form-group flex-row'>
                            <label htmlFor='introduction'>Introduction</label>
                            <textarea
                                name='introduction'
                                placeholder='Write Short Introduction'
                                onChange={(e) =>
                                    setIntroduction(e.target.value)
                                }
                            />
                        </div>
                        <button className='btn-secondary' type='submit'>
                            Submit
                        </button>
                    </form>
                </FormContainer>
            </div>
        </>
    )
}

export default JobApply
