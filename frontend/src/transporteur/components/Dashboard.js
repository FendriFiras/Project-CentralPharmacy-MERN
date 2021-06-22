import React, { useEffect, useState } from 'react';

import Header from '../../shared/components/Headers/TransportorHeader';
import classnames from 'classnames';
import { Card, CardHeader, CardBody, NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';

// javascipt plugin for creating charts
import Chart from 'chart.js';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';
const Dashboard = () => {
	const [activeNav, setActiveNav] = useState(1);
	const [chartExample1Data, setChartExample1Data] = useState('data1');
	const [commandes, setCommandes] = useState();
	var count = 0;
	const name = localStorage.getItem('jwtName');
	const toggleNavs = (e, index) => {
		e.preventDefault();
		setActiveNav(index);
		setChartExample1Data('data' + index);
	};
	useEffect(() => {
		commandeJsonFetch();
	}, []);
	const commandeJsonFetch = async (event) => {
		try {
			const response = await fetch('http://localhost:3001/affectation', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const responseData = await response.json();
			setCommandes(responseData);
		} catch (error) {
			alert(error.message || 'Something went wrong!');
		}
	};
	return (
		<>
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row>
					<Col className="mb-5 mb-xl-0" xl="12">
						<Card className="bg-gradient-default shadow">
							<CardHeader className="bg-transparent">
								<Row className="align-items-center">
									<h2 className="text-white mb-0">Welcome transportor</h2>

									<div className="col">
										<Nav className="justify-content-end" pills>
											<NavItem>
												<NavLink
													className={classnames('py-2 px-3', {
														active: activeNav === 1,
													})}
													href="#pablo"
													onClick={(e) => toggleNavs(e, 1)}
												>
													{commandes !== undefined &&
														commandes.map((command) => {
															if (command.chauffeur === name) {
																count++;
																return;
															}
														})}
													<span className="d-none d-md-block">
														You have {count} Commandes
													</span>
													<span className="d-md-none">M</span>
												</NavLink>
											</NavItem>
										</Nav>
									</div>
								</Row>
							</CardHeader>
							<CardBody></CardBody>
						</Card>
					</Col>
				</Row>
				<Row className="mt-5">
					<Col className="mb-5 mb-xl-0" xl="8"></Col>
					<Col xl="4"></Col>
				</Row>
			</Container>
		</>
	);
};

export default Dashboard;
