import { createContext, useContext, useState, ReactNode } from 'react'
import { AuthContextType, AuthProviderProps } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({children}: AuthProviderProps) => {

    const [user, setUser] = useState(false)

    function login(username:string, password:string) {
        const fakeUser = { username: username, nome: 'Felipe', foto: 'https://'}
        setUser(fakeUser)
    }

    function logout() {
        setUser(false)
    }

    return (
        <AuthContext.Provider value ={{ user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)