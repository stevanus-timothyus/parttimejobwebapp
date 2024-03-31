import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetail, updateUserProfile } from '../actions/userActions'
import FormContainer from '../components/FormContainer'

const UserProfile = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const location = useLocation()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const userDetail = useSelector((state) => state.userDetail)
    const { user, error } = userDetail

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        } else {
            if (!user.name) {
                dispatch(getUserDetail('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [navigate, userInfo, dispatch, name, email])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Password do not match')
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }

    return (
        <>
            <div className='container'>
                <FormContainer>
                    <h2>User Profile</h2>
                    {error && <h1>{error}</h1>}
                    {message && <h1>{message}</h1>}
                    {success && <p>Profile Updated</p>}
                    <form onSubmit={submitHandler} className='flex-column'>
                        <div className='form-group flex-row'>
                            <label htmlFor='name'>Name</label>
                            <input
                                type='text'
                                name='name'
                                placeholder='Enter Name'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div className='form-group flex-row'>
                            <label htmlFor='email'>Email Address</label>
                            <input
                                type='text'
                                name='email'
                                placeholder='Enter Email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
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
                            Update
                        </button>
                    </form>
                </FormContainer>
            </div>
        </>
    )
}

export default UserProfile
