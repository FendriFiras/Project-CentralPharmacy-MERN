import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Admin from './admin/page/Admin';
import Grossiste from './grossite/page/Grossiste';
import Responsable from './responsable/page/Responsable';
import Transporteur from './transporteur/page/Transporteur';
import { AuthContext } from './shared/context/auth-context';

//import react components
import Auth from './auth/page/Auth';
import './assets/plugins/nucleo/css/nucleo.css';

import './assets/scss/argon-dashboard-react.scss';
const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const login = useCallback(() => {
		setIsLoggedIn(true);
	}, []);

	const logout = useCallback(() => {
		setIsLoggedIn(false);
	}, []);

	let routes;

	if (!isLoggedIn) {
		routes = (
			<Switch>
				<Route path="/">
					<Auth />
				</Route>
				<Redirect to="/auth" />
			</Switch>
		);
	} else {
		routes = (
			<Switch>
				<Route path="/admin">
					<Admin />
				</Route>
				<Route path="/grossiste">
					<Grossiste />
				</Route>
				<Route path="/responsable">
					<Responsable />
				</Route>
				<Route path="/transporteur">
					<Transporteur />
				</Route>

				<Redirect to="/auth" />
			</Switch>
		);
	}

	return (
		<AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
			<Router>
				{console.log(isLoggedIn)}
				<main>{routes}</main>
			</Router>
		</AuthContext.Provider>
	);
};

export default App;
