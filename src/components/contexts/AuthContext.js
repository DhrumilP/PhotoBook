import React, { useEffect, useState, useContext } from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}


export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();


    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
 
    }

    function signout() {
        return signOut(auth)
        
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
            
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)

            setLoading(false)
        });
        return unsubscribe;
    }, [])


    const value = {
        currentUser,
        login,
        signup,
        signout
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthContext
