import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import initializedAuthentication from "../firebase/firebase.init";

initializedAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Registration Using Email and Password
    const registerUser = (email, password, name, phone, address, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, phone, address, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // Custom Login
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    // Registration and Login Using Google
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // save user to the database
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }


    // Registration and Login Using Github
    const signInWithGithub = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                // save user to the database
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    useEffect(() => {
        fetch(`https://powerful-brushlands-43185.herokuapp.com/users/?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data[0]));
    }, [user.email]);

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, phone, address, method) => {
        const user = { email: email, name: displayName, role: 'customer', phone: phone, address: address, created_at: new Date().toDateString() };
        fetch('https://powerful-brushlands-43185.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then()
    }

    return {
        user,
        isLoading,
        authError,
        admin,
        registerUser,
        loginUser,
        signInWithGoogle,
        signInWithGithub,
        logout
    }
}

export default useFirebase;