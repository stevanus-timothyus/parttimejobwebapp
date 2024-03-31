import { useDipatch, useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container } from 'react-bootstrap'
import { listUsers, deleteUser } from '../actions/userActions'

const UserList = () => {
    const dispatch = useDispatch()

    const userList = useSelector((state) => state.userList)
    const { users } = userList

    const userDelete = useSelector((state) => state.userDelete)
    const { success: successDelete } = userDelete

    useEffect(() => {
        dispatch(listUsers())
    }, [dispatch, successDelete])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteUser(id))
        }
    }

    return (
        <Container className='py-10'>
            <h1 className='text-center mb-5' style={{ fontSize: '40px' }}>
                Users
            </h1>
            <Table striped bordered hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ADMIN</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        users.map((user) => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>
                                    <a href={`mailto:${user.email}`}>
                                        {user.email}
                                    </a>
                                </td>
                                <td>
                                    {user.isAdmin ? (
                                        <i
                                            className='fas fa-check'
                                            style={{ color: 'green' }}
                                        ></i>
                                    ) : (
                                        <i
                                            className='fas fa-times'
                                            style={{ color: 'red' }}
                                        ></i>
                                    )}
                                </td>
                                <td>
                                    <LinkContainer
                                        to={`/user/${user._id}/edit`}
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
                                        onClick={() => deleteHandler(user._id)}
                                        disabled={user.isAdmin === true}
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

export default UserList
