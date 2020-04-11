import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import SigninPage from './Pages/Signin';
import Dashboard from './Pages/Dashboard';

export const AppRouter = (
	<Router>
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/signin' component={SigninPage} />
			<Route path='/dashboard' component={Dashboard} />
		</Switch>
	</Router>
);
