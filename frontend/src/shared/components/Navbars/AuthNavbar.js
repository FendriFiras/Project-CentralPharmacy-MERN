import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import { UncontrolledCollapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';

const AuthNavbar = () => {
	return (
		<>
			<Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
				<Container className="px-4">
					<NavbarBrand to="/" tag={Link}>
						<img
							alt="..."
							src={require('../../../assets/img/brand/CP-01.png').default}
							width="150px"
							height="150px"
						/>
					</NavbarBrand>
				</Container>
			</Navbar>
		</>
	);
};

export default AuthNavbar;
