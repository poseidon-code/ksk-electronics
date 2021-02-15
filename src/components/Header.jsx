import '../styles/Header.scss';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import { Close, Menu } from './UI/Icons';

const Header = () => {
    const [menu, toggleMenu] = useState(false);

    const { signout, signin, user } = useAuth();
    const history = useHistory();

    const toggleNavbar = () => {
        toggleMenu((p) => !p);
    };

    const handleSignOut = async () => {
        menu && toggleNavbar();
        await signout();
        history.push('/');
    };

    const handleSignIn = async () => {
        menu && toggleNavbar();
        await signin();
        history.push('/dashboard');
    };

    return (
        <section className='wrapper header'>
            <div className='container header'>
                <div className='brand'>
                    <h1>ksk.electronics</h1>
                </div>
                <button className='navbar_toggle' onClick={toggleNavbar}>
                    {menu ? <Close /> : <Menu />}
                </button>
                <nav className='navbar'>
                    <NavLink to='/' exact>
                        Home
                    </NavLink>
                    <NavLink to='/courses'>Courses</NavLink>

                    {user.isAuthorised ? (
                        <>
                            <NavLink to='/dashboard'>{user.user.name.split(' ')[0]}</NavLink>
                            <button onClick={handleSignOut}>Sign Out</button>
                        </>
                    ) : (
                        <button onClick={handleSignIn}>Sign In</button>
                    )}
                </nav>

                {menu && (
                    <nav className='navbar_mobile'>
                        <NavLink to='/' exact onClick={toggleNavbar}>
                            Home
                        </NavLink>
                        <NavLink to='/courses' onClick={toggleNavbar}>
                            Courses
                        </NavLink>
                        {user.isAuthorised ? (
                            <>
                                <NavLink to='/dashboard' onClick={toggleNavbar}>
                                    {user.user.name.split(' ')[0]}
                                </NavLink>
                                <button onClick={handleSignOut}>Sign Out</button>
                            </>
                        ) : (
                            <button onClick={handleSignIn}>Sign In</button>
                        )}
                    </nav>
                )}
            </div>
        </section>
    );
};

export default Header;
