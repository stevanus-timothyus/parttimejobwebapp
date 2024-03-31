import { createContext, useState } from "react"
import dayjs from "dayjs"

const GlobalContext = createContext({
    monthIndex : 0,
    setMonthIndex : (index) => {}
})

export const GlobalProvider = ({ children }) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month())

    return <GlobalContext.Provider 
    value={{ monthIndex, setMonthIndex }}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalContext