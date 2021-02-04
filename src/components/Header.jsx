import '../styles/Header.scss';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import { Close, Menu } from './UI/Icons';

const Header = () => {
    const [menu, toggleMenu] = useState(false);

    const { currentUser, signout } = useAuth();
    const history = useHistory();

    const toggleNavbar = () => {
        toggleMenu((p) => !p);
    };

    const handleSignOut = async () => {
        menu && toggleNavbar();
        await signout();
        history.push('/signin');
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

                    {currentUser ? (
                        <>
                            <NavLink to='/dashboard'>Dashboard</NavLink>
                            <button onClick={handleSignOut}>Sign Out</button>
                        </>
                    ) : (
                        <>
                            <NavLink to='/signin'>Sign In</NavLink>
                            <NavLink to='/register'>Register</NavLink>
                        </>
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
                        {currentUser ? (
                            <>
                                <NavLink to='/dashboard' onClick={toggleNavbar}>
                                    Dashboard
                                </NavLink>
                                <button onClick={handleSignOut}>Sign Out</button>
                            </>
                        ) : (
                            <>
                                <NavLink to='/signin' onClick={toggleNavbar}>
                                    Sign In
                                </NavLink>
                                <NavLink to='/register' onClick={toggleNavbar}>
                                    Register
                                </NavLink>
                            </>
                        )}
                    </nav>
                )}
            </div>
        </section>
    );
};

export default Header;
