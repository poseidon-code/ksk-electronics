import { createContext, useContext, useEffect, useState } from 'react';
import { auth, provider } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [authorised, setAuthorized] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({
        name: '',
        email: '',
    });

    const signin = async () => {
        try {
            const res = await auth.signInWithPopup(provider);
            const user = res.user;
            setAuthorized(true);
            setUser({
                name: user.displayName,
                email: user.email,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const signout = async () => {
        try {
            await auth.signOut();
            setAuthorized(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        let unsubscribe;
        try {
            unsubscribe = auth.onAuthStateChanged((user) => {
                if (user) {
                    setUser({
                        name: user.displayName,
                        email: user.email,
                    });
                    setAuthorized(true);
                }
                setLoading(false);
            });
        } catch (error) {
            console.log(error);
        }

        return unsubscribe;
    }, []);

    const value = {
        user,
        authorised,
        signin,
        signout,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
