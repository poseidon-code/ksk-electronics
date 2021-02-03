import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';

import { Close, Menu } from './UI/Icons';

const Header = () => {
    const [menu, toggleMenu] = useState(false);

    const toggleNavbar = () => {
        toggleMenu((p) => !p);
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
                    <NavLink to='/signin'>Sign In</NavLink>
                    <NavLink to='/enroll'>Enroll</NavLink>
                </nav>
                {menu && (
                    <nav className='navbar_mobile'>
                        <NavLink to='/' exact onClick={toggleNavbar}>
                            Home
                        </NavLink>
                        <NavLink to='/courses' onClick={toggleNavbar}>
                            Courses
                        </NavLink>
                        <NavLink to='/signin' onClick={toggleNavbar}>
                            Sign In
                        </NavLink>
                        <NavLink to='/enroll' onClick={toggleNavbar}>
                            Enroll
                        </NavLink>
                    </nav>
                )}
            </div>
        </section>
    );
};

export default Header;
