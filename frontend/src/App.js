import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Admin from './admin/page/Admin';
import Grossiste from './grossite/page/Grossiste';
import Responsable from './responsable/page/Responsable';
import Transporteur from './transporteur/page/Transporteur';
//import react components
import Auth from './auth/page/Auth';
import './assets/plugins/nucleo/css/nucleo.css';

import './assets/scss/argon-dashboard-react.scss';
const App = () => {
	// const [isLoggedIn, setIsLoggedIn] = useState(false);

	// const login = useCallback(() => {
	// 	setIsLoggedIn(true);
	// }, []);

	// const logout = useCallback(() => {
	// 	setIsLoggedIn(false);
	// }, []);

	let routes;

	if (false) {
		routes = (
			<Switch>
				<Redirect to="/" />
			</Switch>
		);
	} else {
		routes = (
			<Switch>
				<Route path="/auth">
					<Auth />
				</Route>
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
		// <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
		<Router>
			<main>{routes}</main>
		</Router>
		// </AuthContext.Provider>
	);
};

export default App;
