import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Admin from './admin/page/Admin';
import Grossiste from './grossite/page/Grossiste';
import Responsable from './responsable/page/Responsable';
import Transporteur from './transporteur/page/Transporteur';
import { AuthContext } from './shared/context/auth-context';
import { JwtContext } from './shared/context/jwt-context';

//import react components
import Auth from './auth/page/Auth';
import './assets/plugins/nucleo/css/nucleo.css';

import './assets/scss/argon-dashboard-react.scss';
const App = () => {
	const init = localStorage.getItem('isLoggedIn');
	const convert = (init) => {
		if (init === 'false') {
			return false;
		} else {
			return true;
		}
	};
	let init1 = convert(init);
	const [isLoggedIn, setIsLoggedIn] = useState(init1);
	const [jwt, setJwt] = useState(null);

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
				<Route path="/" exact>
					<Auth />
				</Route>
				<Redirect to="/" />
			</Switch>
		);
	} else {
		const jwt1 = localStorage.getItem('jwt');

		console.log(jwt1);

		if (jwt1 !== null) {
			if (jwt1 === 'ROLE_ADMIN') {
				routes = (
					<Switch>
						<Route path="/admin">
							<Admin />
						</Route>
						<Redirect to="/admin" />
					</Switch>
				);
			} else if (jwt1 === 'ROLE_TRANSPORTEUR') {
				routes = (
					<Switch>
						<Route path="/transporteur">
							<Transporteur />
						</Route>
						<Redirect to="/transporteur" />
					</Switch>
				);
			} else if (jwt1 === 'ROLE_GROSSISTE') {
				routes = (
					<Switch>
						<Route path="/grossiste">
							<Grossiste />
						</Route>
						<Redirect to="/grossiste" />
					</Switch>
				);
			} else if (jwt1 === 'ROLE_RESPONSABLE') {
				routes = (
					<Switch>
						<Route path="/responsable">
							<Responsable />
						</Route>
						<Redirect to="/responsable" />
					</Switch>
				);
			}
		} else {
			routes = (
				<Switch>
					<Route path="/" exact>
						<Auth />
					</Route>
					<Redirect to="/" />
				</Switch>
			);
		}
	}

	return (
		<AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
			<JwtContext.Provider value={{ jwt, setJwt }}>
				<Router>
					{console.log('---------')}
					{console.log(init1)}

					<main>{routes}</main>
				</Router>
			</JwtContext.Provider>
		</AuthContext.Provider>
	);
};

export default App;
