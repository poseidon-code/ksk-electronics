import './Footer.scss';

const Footer = () => {
    return (
        <section className='wrapper footer'>
            <div className='container footer'>
                <div className='details'>
                    <h1>ksk.electronics</h1>
                    <div className='contact'>
                        <span>
                            <strong>Contact Details</strong>
                        </span>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi pariatur sed consequatur repellendus quasi?
                            Quam quos molestiae cupiditate odit nobis.
                        </p>
                    </div>
                    <div className='developer'>
                        <span>
                            <strong> Website developed by:</strong>
                        </span>
                        <p>@poseidon-code</p>
                        <p>@akash</p>
                    </div>
                    <div className='copyright'>
                        <span>
                            <strong> &copy;ksk.electronics.com 2021</strong>
                        </span>
                    </div>
                </div>
                <div className='messege'>
                    <h1>Contact Us</h1>
                    <form>
                        <input required type='text' name='name' placeholder='Name' />
                        <input required type='email' name='email' placeholder='Email' />
                        <textarea required name='messege' placeholder='Messege'></textarea>
                        <button
                            type='submit'
                            onClick={(e) => {
                                e.preventDefault();
                            }}>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Footer;
