import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";

const AuthContext = createContext()

export default function AuthProvider ({ children }) {

    const [user, setUser] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) setUser(user)
            else setUser(false)
        })
        
        return () => {
            unsubscribe()
        }
    }, [])

    const data = {
        user,
        setUser,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)