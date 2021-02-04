import '../styles/Register.scss';
import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { NavLink, useHistory } from 'react-router-dom';

const Register = () => {
    const fullnameRef = useRef();
    const numberRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordconfirmRef = useRef();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const { register } = useAuth();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== passwordconfirmRef.current.value) {
            return setError('Passwords do not match !');
        }
        try {
            setError('');
            setLoading(true);
            await register(emailRef.current.value, passwordRef.current.value);
            history.push('/signin');
        } catch {
            setError('Failed to Register !');
        }
        setLoading(false);
    };

    return (
        <div className='register'>
            <div className='register-form'>
                <h1>ksk.electronics</h1>
                <h1>Register</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque cum voluptatem mollitia autem accusantium eos tenetur
                    laboriosam hic a doloribus.
                </p>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleRegister}>
                    <div className='input'>
                        <label htmlFor='name'>Full Name</label>
                        <input required type='text' name='name' ref={fullnameRef} />
                    </div>
                    <div className='input'>
                        <label htmlFor='number'>Phone No.</label>
                        <input required type='number' name='number' ref={numberRef} />
                    </div>
                    <div className='input'>
                        <label htmlFor='email'>Email</label>
                        <input required type='email' name='email' ref={emailRef} />
                    </div>
                    <div className='input'>
                        <label htmlFor='password'>Password</label>
                        <input required type='password' name='password' ref={passwordRef} />
                    </div>
                    <div className='input'>
                        <label htmlFor='password'>Confirm Password</label>
                        <input required type='password' name='password-confirm' ref={passwordconfirmRef} />
                    </div>
                    <button type='submit' disabled={loading}>
                        Register
                    </button>
                </form>
                <NavLink to='/signin' className='signin'>
                    Already registered ? <strong>Sign In</strong>
                </NavLink>
            </div>
        </div>
    );
};

export default Register;
