/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

const Footer = () => {
	return (
		<footer className="footer">
			<Row className="align-items-center justify-content-xl-between">
				<Col xl="6">
					<div className="copyright text-center text-xl-left text-muted">
						© {new Date().getFullYear()}{' '}
						<a
							className="font-weight-bold ml-1"
							href="https://www.creative-tim.com?ref=adr-auth-footer"
							target="_blank"
						>
							PFA Project
						</a>
					</div>
				</Col>
				<Col xl="6">
					<Nav className="nav-footer justify-content-center justify-content-xl-end">
						<NavItem>
							<NavLink href="https://www.linkedin.com/in/firas-fendri/" target="_blank">
								Firas Fendri
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://www.linkedin.com/in/islem-abid-b31847208/" target="_blank">
								Islem Abid
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://www.linkedin.com/in/yessin-zayen-9982041aa/" target="_blank">
								Yessin Zayen
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://www.linkedin.com/in/khouloud-moalla-a935391a4/" target="_blank">
								Khouloud Moalla
							</NavLink>
						</NavItem>
					</Nav>
				</Col>
			</Row>
		</footer>
	);
};

export default Footer;
