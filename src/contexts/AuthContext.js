import { createContext, useContext, useEffect, useState } from 'react';
import { auth, provider } from '../firebase';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState({
        user: {},
        isAdmin: false,
        isAuthorised: false,
    });

    const server = axios.create({
        baseURL: process.env.REACT_APP_SERVER,
    });

    const getUserData = async (email) => {
        const res = await server.get('/users/' + email);
        return res.data;
    };

    const checkRegistered = async (name, email) => {
        const res = await getUserData(email);
        if (res.status === 'FAILED') {
            await server.post('/register', {
                name: name,
                email: email,
            });
        }
    };

    const signin = async () => {
        try {
            await auth.signInWithPopup(provider);
        } catch (error) {
            console.log(error);
        }
    };

    const signout = async () => {
        try {
            await auth.signOut();
            setUser({
                user: {},
                isAdmin: false,
                isAuthorised: false,
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        let unsubscribe;
        try {
            unsubscribe = auth.onAuthStateChanged(async (current_user) => {
                if (current_user) {
                    await checkRegistered(current_user.displayName, current_user.email);
                    const res = await getUserData(current_user.email);
                    const user_data = res.data;
                    setUser({
                        user: user_data,
                        isAdmin: user_data.type === 'admin' ? true : false,
                        isAuthorised: true,
                    });
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
        signin,
        signout,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
