import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContex = createContext()
const auth = getAuth(app)


const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider()

    const signIn = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    
    const updateUser = userInfo => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();

    }, [])

    const authInfo = {signIn, logIn, logOut, googleSignIn, updateUser, user, loading}
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default Authprovider;