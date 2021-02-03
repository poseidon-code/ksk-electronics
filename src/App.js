import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './styles/App.scss';

import Layout from './components/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import SignIn from './pages/SignIn';
import Enroll from './pages/Enroll';

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path='/enroll'>
                    <Enroll />
                </Route>
                <Route path='/signin'>
                    <SignIn />
                </Route>
                <Route path='/courses'>
                    <Courses />
                </Route>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='*' exact>
                    <Redirect to='/' />
                </Route>
            </Switch>
        </Layout>
    );
};

export default App;
