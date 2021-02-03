import '../styles/Layout.scss';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <section className='wrapper'>
            <Header />
            <div className='container'>{children}</div>
            <Footer />
        </section>
    );
};

export default Layout;
