import { Redirect, Route } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) => {
                return user.isAuthorised ? <Component {...props} /> : <Redirect to='/' />;
            }}></Route>
    );
};

export default PrivateRoute;
