/*eslint-disable*/
import React from 'react';

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';

const Login = () => {
	return (
		<>
			<footer className="py-5">
				<Container>
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
									<NavLink
										href="https://www.linkedin.com/in/khouloud-moalla-a935391a4/"
										target="_blank"
									>
										Khouloud Moalla
									</NavLink>
								</NavItem>
							</Nav>
						</Col>
					</Row>
				</Container>
			</footer>
		</>
	);
};

export default Login;
