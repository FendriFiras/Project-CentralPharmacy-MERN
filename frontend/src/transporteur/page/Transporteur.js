import React, { useRef, useEffect } from 'react';

import Sidebar from '../../shared/components/Sidebar/Sidebar';
import AdminNavbar from '../../shared/components/Navbars/AdminNavbar';
import { Container } from 'reactstrap';
import AdminFooter from '../../shared/components/Footers/AdminFooter';
import { useLocation, Route, Switch, Redirect } from 'react-router-dom';
import routes from '../routes';

const Transporteur = (props) => {
	const mainContent = useRef(null);

	useEffect(() => {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
		mainContent.current.scrollTop = 0;
	}, []);
	const getRoutes = (routes) => {
		return routes.map((prop, key) => {
			if (prop.layout === '/transporteur') {
				return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
			} else {
				return null;
			}
		});
	};
	const getBrandText = (path) => {
		for (let i = 0; i < routes.length; i++) {
			if (props.location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
				return routes[i].name;
			}
		}
		return 'Brand';
	};
	return (
		<>
			<Sidebar
				{...props}
				routes={routes}
				logo={{
					innerLink: '/transporteur/index',
					imgSrc: require('../../assets/img/brand/CP-01.png').default,
					imgAlt: '...',
				}}
			/>
			<div className="main-content" ref={mainContent}>
				<AdminNavbar {...props} />

				<Switch>
					{getRoutes(routes)}
					<Redirect from="*" to="/transporteur/index" />
				</Switch>

				<Container fluid>
					<AdminFooter />
				</Container>
			</div>
		</>
	);
};

export default Transporteur;
