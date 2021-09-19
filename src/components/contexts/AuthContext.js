import React, { useEffect, useState, useContext } from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}


export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();
    

    function signup(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }


    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            
          setLoading(false)
          });
          return unsubscribe;
    },[])
    

    const value = {
        currentUser,
        signup
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthContext
