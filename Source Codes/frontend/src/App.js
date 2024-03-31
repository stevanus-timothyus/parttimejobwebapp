import CalendarUI from './components/CalendarUI'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import JobDetails from './pages/JobDetails'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import UserProfile from './pages/UserProfile'
import UserList from './pages/UserList'
import JobList from './pages/JobList'
import JobApply from './pages/JobApply'
import ApplicantList from './pages/ApplicantList'
import JobApplySuccess from './pages/JobApplySuccess'
import JobEdit from './pages/JobEdit'

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path='/job-detail/:id' element={<JobDetails />} />
                    <Route path='/jobs/:id/apply' element={<JobApply />} />
                    <Route
                        path='/jobs/applysuccess'
                        element={<JobApplySuccess />}
                    />
                    <Route path='/admin/jobs/:id/edit' element={<JobEdit/>}/>
                    <Route path='/login' element={<UserLogin />} />
                    <Route exact path='/' element={<CalendarUI />} />
                    <Route path='/register' element={<UserRegister />} />
                    <Route path='/profile' element={<UserProfile />} />
                    <Route path='/admin/userlist' element={<UserList />} />
                    <Route path='/admin/joblist' element={<JobList />} />
                    <Route path='/admin/applicantlist' element={<ApplicantList />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}

export default App
