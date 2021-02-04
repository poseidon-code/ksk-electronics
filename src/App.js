import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import './styles/App.scss';

import Layout from './components/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

import { useAuth } from './contexts/AuthContext';

const App = () => {
    const { currentUser } = useAuth();

    return (
        <Layout>
            {currentUser ? (
                <Switch>
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                    <Route path='/' exact component={Home} />
                    <Route path='/courses' component={Courses} />
                    <Route path='/register'>
                        <Redirect to='/dashboard' />
                    </Route>
                    <Route path='/signin'>
                        <Redirect to='/dashboard' />
                    </Route>
                    <Route path='*' exact>
                        <Redirect to='/' />
                    </Route>
                </Switch>
            ) : (
                <Switch>
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                    <Route path='/' exact component={Home} />
                    <Route path='/courses' component={Courses} />
                    <Route path='/register' component={Register} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='*' exact>
                        <Redirect to='/' />
                    </Route>
                </Switch>
            )}
        </Layout>
    );
};

export default App;
