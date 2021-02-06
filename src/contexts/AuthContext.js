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

    const signin = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                setAuthorized(true);
                setUser({
                    name: user.displayName,
                    email: user.email,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const signout = () => {
        auth.signOut()
            .then(() => {
                setAuthorized(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser({
                    name: user.displayName,
                    email: user.email,
                });
                setAuthorized(true);
            }
            setLoading(false);
        });

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
