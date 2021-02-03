import "./Layout.scss";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <section className="wrapper">
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </section>
  );
};

export default Layout;
