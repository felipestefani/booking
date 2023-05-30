import { createContext, useState } from "react";

export const AuthContext = createContext({})

const AuthProvider = ({children}) => {

    const [initials, setInitials] = useState('')

    const saveToken = () => {
        localStorage.setItem('@project_name', 'Test User')
    }

    const initialsUser = () => {
        let initialsLetter = ''
        localStorage.setItem('@project_name', 'Test User')
        const token = 'Test User'
        const names = token.split(' ')
        names.forEach(name => {
            initialsLetter+=name.slice(0,1)
        });
        setInitials(initialsLetter)
    }

    const logout = () => {
        localStorage.removeItem('@project_name')
        setInitials('')
    }

    return (
        <AuthContext.Provider value={{initials, initialsUser, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider