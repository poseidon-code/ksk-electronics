import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const register = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    };

    const signin = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    };

    const signout = () => {
        auth.signOut();
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        register,
        signin,
        signout,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
