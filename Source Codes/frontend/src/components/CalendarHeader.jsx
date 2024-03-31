import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import dayjs from 'dayjs'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

const CalendarHeader = () => {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext)
    const handlePrevMonth = () => {
        setMonthIndex(monthIndex - 1)
    }

    const handleNextMonth = () => {
        setMonthIndex(monthIndex + 1)
    }

    const handleReset = () => {
        setMonthIndex(dayjs().month())
    }

    return (
        <header className='px-4 py-2 flex items-center'>
            <h1 className='mr-10 text-xl text-gray-500 font-bold'>Calendar</h1>
            <button
                className='border rounded py-2 px-4 mr-5'
                onClick={handleReset}
            >
                Today
            </button>
            <button onClick={handlePrevMonth}>
                <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
                    <FaArrowLeft className='mx-5 text-red-800' />
                </span>
            </button>
            <button onClick={handleNextMonth}>
                <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
                    <FaArrowRight className='mx-5 text-red-800' />
                </span>
            </button>
            <h2 className='ml-4 text-xl text-gray-500 font-bold'>
                {dayjs(new Date(dayjs().year(), monthIndex)).format(
                    'MMMM YYYY'
                )}
            </h2>
        </header>
    )
}

export default CalendarHeader
