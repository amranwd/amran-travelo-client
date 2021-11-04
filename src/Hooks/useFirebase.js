import { getAuth, signInWithPopup, GoogleAuthProvider, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationFirebase from "../Firebase/firebase.init";

initializationFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // process login
    const singinWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user registration process
    const registerNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // updating user displayName
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })

    }





    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [auth]);

    const logOut = () => {
        signOut(auth)
            .then(result => {
                setUser({});
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return {
        user,
        setUser,
        setError,
        logOut,
        error,
        signInUsingGoogle,
        singinWithEmailPassword,
        registerNewUser,
        setUserName,
        isLoading,
        setIsLoading
    }
}


export default useFirebase;