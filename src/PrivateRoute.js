import { Redirect, Route } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { authorised } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) => {
                return authorised ? <Component {...props} /> : <Redirect to='/signin' />;
            }}></Route>
    );
};

export default PrivateRoute;
