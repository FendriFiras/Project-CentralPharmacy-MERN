import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import {
	Badge,
	Card,
	CardHeader,
	CardFooter,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Media,
	Pagination,
	PaginationItem,
	PaginationLink,
	Progress,
	Table,
	Container,
	Row,
	UncontrolledTooltip,
} from 'reactstrap';
// core components
import Header from '../../shared/components/Headers/HeaderSimple';

const Transporteurs = (props) => {
	const [transporteur, setDepot] = useState([]);
	useEffect(() => {
		transporteursFetch();
	});
	const transporteursFetch = async (event) => {
		try {
			const response = await fetch('http://localhost:3001/transporteurs', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
        
			});
			const responseData = await response.json();

			setDepot(responseData);
		} catch (error) {
			alert(error.message || 'Something went wrong!');
		}
	};

	return (
		<>
			{console.log(transporteur)}
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				{/* Table */}
				<Row>
					<div className="col">
						<Card className="shadow">
							<CardHeader className="border-0">
								<h3 className="mb-0"> Liste des transporteurs</h3>
							</CardHeader>

							<Table className="align-items-center table-flush" responsive>
								<thead className="thead-light">
									<tr>
										<th scope="col">Nom</th>
										<th scope="col">E-mail</th>
										<th scope="col">Mot de passe</th>

									</tr>
								</thead>
								<tbody>
									{transporteur.map((trans) => {
										return (
											<tr>
												<td>{trans.username}</td>
												<td>{trans.email}</td>
												<td>{trans.password}</td>
	
											</tr>
										);
									})}
								</tbody>
							</Table>
							<CardFooter className="py-4">
								<nav aria-label="...">
									<Pagination
										className="pagination justify-content-end mb-0"
										listClassName="justify-content-end mb-0"
									>
										<PaginationItem className="disabled">
											<PaginationLink
												href="#pablo"
												onClick={(e) => e.preventDefault()}
												tabIndex="-1"
											>
												<i className="fas fa-angle-left" />
												<span className="sr-only">Previous</span>
											</PaginationLink>
										</PaginationItem>
										<PaginationItem className="active">
											<PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
												1
											</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
												2 <span className="sr-only">(current)</span>
											</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
												3
											</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
												<i className="fas fa-angle-right" />
												<span className="sr-only">Next</span>
											</PaginationLink>
										</PaginationItem>
									</Pagination>
								</nav>
							</CardFooter>
						</Card>
					</div>
				</Row>
				{/* Dark table */}
				<Row className="mt-5"></Row>
			</Container>
		</>
	);
};

export default Transporteurs;
