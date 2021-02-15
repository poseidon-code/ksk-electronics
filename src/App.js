import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { useAuth } from './contexts/AuthContext';
import './styles/App.scss';

import Layout from './components/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
    // const { isAdmin } = useAuth();
    const { user } = useAuth();

    return (
        <Layout>
            <Switch>
                <PrivateRoute path='/dashboard' component={user.isAdmin ? AdminDashboard : Dashboard} />
                <Route path='/' exact component={Home} />
                <Route path='/courses' component={Courses} />
                <Route path='*' exact>
                    <Redirect to='/' />
                </Route>
            </Switch>
        </Layout>
    );
};

export default App;
