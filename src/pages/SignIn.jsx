import '../styles/SignIn.scss';

import { NavLink } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className=' signin'>
            <div className='signin-form'>
                <h1>ksk.electronics</h1>
                <h1>Sign In</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque cum voluptatem mollitia autem accusantium eos tenetur
                    laboriosam hic a doloribus.
                </p>
                <form>
                    <div className='input'>
                        <label htmlFor='email'>Email</label>
                        <input required type='email' name='email' />
                    </div>
                    <div className='input'>
                        <label htmlFor='password'>Password</label>
                        <input required type='password' name='password' />
                        <a href='/'>Forgotten Password ?</a>
                    </div>
                    <button type='submit'>Sign In</button>
                </form>
                <NavLink to='/enroll' className='enroll'>
                    Haven't enrolled yet ?<strong>Enroll Now</strong>
                </NavLink>
            </div>
        </div>
    );
};

export default SignIn;
