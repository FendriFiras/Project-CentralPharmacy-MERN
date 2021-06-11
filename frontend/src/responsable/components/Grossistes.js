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

const Depots = (props) => {
	const [depot, setDepot] = useState([]);
	useEffect(() => {
		depotsFetch();
	});
	const depotsFetch = async (event) => {
		try {
			const response = await fetch('http://localhost:3001/depots', {
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
			{console.log(depot)}
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				{/* Table */}
				<Row>
					<div className="col">
						<Card className="shadow">
							<CardHeader className="border-0">
								<h3 className="mb-0"> Liste de Depots</h3>
							</CardHeader>

							<Table className="align-items-center table-flush" responsive>
								<thead className="thead-light">
									<tr>
										<th scope="col"> id Depot</th>
										<th scope="col">name</th>
										<th scope="col">adress</th>
										<th scope="col">location</th>
										<th scope="col">id Responsable</th>
									</tr>
								</thead>
								<tbody>
									{depot.map((dep) => {
										return (
											<tr>
												<td>{dep.idDepot}</td>
												<td>{dep.name}</td>
												<td>{dep.adress}</td>
												<td>{dep.location}</td>
												<td>{dep.idResponsable}</td>
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

export default Depots;
