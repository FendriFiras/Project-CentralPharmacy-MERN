import React, { useState } from 'react';

import HeaderGrossiste from '../../shared/components/Headers/HeaderGrossiste';
import classnames from 'classnames';
import { Card, CardHeader, CardBody, NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';

// javascipt plugin for creating charts
import Chart from 'chart.js';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';
const Dashboard = () => {
	const [activeNav, setActiveNav] = useState(1);
	const [chartExample1Data, setChartExample1Data] = useState('data1');

	const toggleNavs = (e, index) => {
		e.preventDefault();
		setActiveNav(index);
		setChartExample1Data('data' + index);
	};
	return (
		<>
			<HeaderGrossiste />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row>
					<Col className="mb-5 mb-xl-0" xl="8">
						<Card className="bg-gradient-default shadow">
							<CardHeader className="bg-transparent">
								<Row className="align-items-center">
									<div className="col">
										<h6 className="text-uppercase text-light ls-1 mb-1">Overview</h6>
										<h2 className="text-white mb-0">Sales value</h2>
									</div>
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
													<span className="d-none d-md-block">Month</span>
													<span className="d-md-none">M</span>
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													className={classnames('py-2 px-3', {
														active: activeNav === 2,
													})}
													data-toggle="tab"
													href="#pablo"
													onClick={(e) => toggleNavs(e, 2)}
												>
													<span className="d-none d-md-block">Week</span>
													<span className="d-md-none">W</span>
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
