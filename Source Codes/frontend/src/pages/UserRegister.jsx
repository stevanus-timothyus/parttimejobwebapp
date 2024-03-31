import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'
import FormContainer from '../components/FormContainer'

const UserRegister = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const location = useLocation()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { userInfo, error } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Password do not match')
        } else {
            dispatch(register(name, email, password))
        }
    }

    return (
        <>
            <div className='container'>
                <FormContainer>
                    <h1>Sign Up</h1>
                    {error && <h1>{error}</h1>}
                    {message && <h1>{message}</h1>}
                    <form onSubmit={submitHandler} className='flex-column'>
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
                        <div className='form-group flex-row'>
                            <label htmlFor='confirmpassword'>
                                Confirm Password
                            </label>
                            <input
                                type='password'
                                name='confirmpassword'
                                placeholder='Confirm Password'
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                        </div>
                        <button className='btn-secondary' type='submit'>
                            Register
                        </button>
                    </form>
                    <div>
                        Have an Account?{' '}
                        <Link
                            to={
                                redirect
                                    ? `/login?redirect=${redirect}`
                                    : '/login'
                            }
                        >
                            Log In
                        </Link>
                    </div>
                </FormContainer>
            </div>
        </>
    )
}

export default UserRegister
