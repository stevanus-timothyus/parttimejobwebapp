import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container } from 'react-bootstrap'
import { listApplicants } from '../actions/jobActions'
import { useNavigate } from 'react-router-dom'

const ApplicantList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const applicantList = useSelector((state) => state.getApplicant)
    const { applicants } = applicantList

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listApplicants())
        } else {
            navigate('/login')
        }
    }, [dispatch, userInfo])

    return (
        <Container className='py-10'>
            <h1 className='text-center mb-5' style={{ fontSize: '40px' }}>
                Applicants
            </h1>
            <Table striped bordered hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>INTRODUCTION</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {applicants &&
                        applicants.map((applicant) => (
                            <tr key={applicant._id}>
                                <td>{applicant.title}</td>
                                <td>{applicant.name}</td>
                                <td>
                                    <a href={`mailto:${applicant.email}`}>
                                        {applicant.email}
                                    </a>
                                </td>
                                <td>{applicant.introduction}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default ApplicantList
