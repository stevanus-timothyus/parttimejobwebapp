import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const location = useLocation()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo, error } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <>
            <div className='container'>
                <FormContainer>
                    <h1>Sign In</h1>
                    {error && <h1>{error}</h1>}
                    <form onSubmit={submitHandler} className='flex-column'>
                        <div className='form-group flex-row'>
                            <label htmlFor='email'>Email Address</label>
                            <input
                                type='text'
                                name='email'
                                placeholder='Enter Email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='form-group flex-row'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                name='password'
                                placeholder='Enter Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className='btn-secondary' type='submit'>
                            Login
                        </button>
                    </form>
                    <div>
                        New User?{' '}
                        <Link
                            to={
                                redirect
                                    ? `/register?redirect=${redirect}`
                                    : '/register'
                            }
                        >
                            Register
                        </Link>
                    </div>
                </FormContainer>
            </div>
        </>
    )
}

export default UserLogin
