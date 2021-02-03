import '../styles/Enroll.scss';

import { NavLink } from 'react-router-dom';

const Enroll = () => {
    return (
        <div className='enroll'>
            <div className='enroll-form'>
                <h1>ksk.electronics</h1>
                <h1>Register</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque cum voluptatem mollitia autem accusantium eos tenetur
                    laboriosam hic a doloribus.
                </p>
                <form>
                    <div className='input'>
                        <label htmlFor='name'>Full Name</label>
                        <input required type='text' name='name' />
                    </div>
                    <div className='input'>
                        <label htmlFor='number'>Phone No.</label>
                        <input required type='number' name='number' />
                    </div>
                    <div className='input'>
                        <label htmlFor='email'>Email</label>
                        <input required type='email' name='email' />
                    </div>
                    <div className='input'>
                        <label htmlFor='password'>Password</label>
                        <input required type='password' name='password' />
                    </div>
                    <div className='input'>
                        <label htmlFor='password'>Confirm Password</label>
                        <input required type='password' name='password' />
                    </div>
                    <button type='submit'>Register</button>
                </form>
                <NavLink to='/signin' className='signin'>
                    Already registered ?<strong>Sign In</strong>
                </NavLink>
            </div>
        </div>
    );
};

export default Enroll;
