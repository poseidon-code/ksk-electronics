import { createContext, useContext, useEffect, useState } from 'react';
import { auth, firestore, provider } from '../firebase';
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
        baseURL: ,
    });

    const getUserData = async (email) => {
        console.log('getUserData()');
        const user = await firestore.collection('users').doc(email).get();
        return user.data();
    };

    const checkRegistered = async (name, email) => {
        console.log('checkRegistered()');
        const user = await firestore.collection('users').doc(email).get();
        if (!user.exists) {
            await server.post('/register', {
                name: name,
                email: email,
            });
        }
    };

    const signin = async () => {
        console.log('signin()');
        try {
            await auth.signInWithPopup(provider);
        } catch (error) {
            console.log(error);
        }
    };

    const signout = async () => {
        console.log('signout()');
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
        console.log('AuthContext mounted');
        let unsubscribe;
        try {
            unsubscribe = auth.onAuthStateChanged(async (current_user) => {
                if (current_user) {
                    await checkRegistered(current_user.displayName, current_user.email);
                    const user_data = await getUserData(current_user.email);
                    console.log('mounted getUserData()');
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
