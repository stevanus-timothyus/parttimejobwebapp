import { getMonth } from '../util'
import { useState, useEffect, useContext } from 'react'
import CalendarHeader from './CalendarHeader'
import Month from './Month'
import GlobalContext from '../context/GlobalContext'

const CalendarUI = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const { monthIndex } = useContext(GlobalContext)
    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex))
    }, [monthIndex])

    return (
        <>
            <div className='h-screen flex flex-col p-10'>
                <CalendarHeader />
                <div className='flex flex-1'>
                    <Month month={currentMonth} />
                </div>
            </div>
        </>
    )
}

export default CalendarUI
