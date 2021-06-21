import axios from 'axios';
import React, { useEffect, useState } from 'react';

import {
	Input,
	InputGroup,
	Button,
	Col,
	FormGroup,
	Form,
	Label,
	CardText,
	CardTitle,
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

const Commandes = (props) => {
	const [render, setrender] = useState(true);
	const fs = require('fs');
	const path = require('path');
	const appDir = path.dirname(require.main.filename);
	const p = path.join(appDir, './', 'data', 'transport.json');
	const [commandes, setCommandes] = useState();
	const [commande, setCommande] = useState([]);
	const [selectedCommande, setSelectedCommande] = useState();
	const [transporteur, setTransporteur] = useState([]);

	const etatChangeHandler = (e) => {
		e.preventDefault();
		etatUpdate();
	};

	useEffect(() => {
		commandesFetch();
		commandeJsonFetch();
		setrender(true);
	}, []);

	const etatUpdate = async (event) => {
		event.preventDefault();

		// const article = { id:609474b00e73c9669c3c519a };
		// axios.post('http://localhost:3001/lcs', article).then(setrender(false));
	};
	const commandeJsonFetch = async (event) => {
		try {
			const response = await fetch('http://localhost:3001/afectation', {
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
	const commandesFetch = async (event) => {
		try {
			const response = await fetch('http://localhost:3001/commandes', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const responseData = await response.json();

			setCommande(responseData);
		} catch (error) {
			alert(error.message || 'Something went wrong!');
		}
	};

	return (
		<>
			{console.log(transporteur)}
			{console.log(commande)}
			{console.log(selectedCommande)}
			<Header />
			{/* Page content */}

			<Container className="mt--7" fluid>
				<Row>
					<Col sm="12">
						<Card body>
							<CardTitle tag="h5">Liste des Commandes</CardTitle>
							<CardText>
								<Table className="align-items-center table-flush" responsive>
									<thead className="thead-light">
										<tr>
											<th scope="col"> ID de la Commande</th>
											<th scope="col">Date de la Commande</th>
											<th scope="col">Etat de la Commande</th>
											<th scope="col">Etat de Payment</th>
											<th scope="col">Prix Ht</th>
											<th scope="col">Prix TTC</th>
											<th scope="col">TVA</th>
										</tr>
									</thead>
									<tbody>
										{commandes !== undefined &&
											commandes
												.filter((command) => command.chauffeur.includes('kholoud'))
												.map((filtered) =>
													commande
														.filter((commande) => commande._id === filtered.commandes[0])
														.map((com) => {
															return (
																<tr>
																	<td>{com._id}</td>
																	<td>{com.dateCom.slice(0, 10)}</td>
																	<td>
																		{com.etatCom}
																		<Button
																			color="danger"
																			type="submit"
																			onClick={etatChangeHandler}
																		>
																			Livrée
																		</Button>
																	</td>
																	<td>{com.etatPayCom}</td>
																	<td>{com.prixHt}</td>
																	<td>{com.prixTTC}</td>
																	<td>{com.tva}</td>
																</tr>
															);
														})
												)}
									</tbody>
								</Table>
							</CardText>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Commandes;
