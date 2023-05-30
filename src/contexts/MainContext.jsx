import { createContext, useState, useEffect } from "react";

export const MainContext = createContext({})

const MainProvider = ({ children }) => {

    const [path, setPath] = useState('/')
    const [open, setOpen] = useState(false)
    const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight])

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    },[])

    return (
        <MainContext.Provider value={{path, setPath, open, setOpen, windowSize}}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider