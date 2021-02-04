import '../styles/SignIn.scss';
import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { NavLink, useHistory } from 'react-router-dom';

const SignIn = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const { signin } = useAuth();

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await signin(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        } catch {
            setError('Failed to Sign you In !');
        }
        setLoading(false);
    };

    return (
        <div className=' signin'>
            <div className='signin-form'>
                <h1>ksk.electronics</h1>
                <h1>Sign In</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque cum voluptatem mollitia autem accusantium eos tenetur
                    laboriosam hic a doloribus.
                </p>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSignIn}>
                    <div className='input'>
                        <label htmlFor='email'>Email</label>
                        <input required type='email' name='email' ref={emailRef} />
                    </div>
                    <div className='input'>
                        <label htmlFor='password'>Password</label>
                        <input required type='password' name='password' ref={passwordRef} />
                        <a href='/'>Forgotten Password ?</a>
                    </div>
                    <button type='submit' disabled={loading}>
                        Sign In
                    </button>
                </form>
                <NavLink to='/register' className='enroll'>
                    Haven't registered yet ? <strong>Register Now</strong>
                </NavLink>
            </div>
        </div>
    );
};

export default SignIn;
