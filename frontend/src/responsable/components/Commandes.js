








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
	UncontrolledTooltip


} from 'reactstrap';
// core components
import Header from '../../shared/components/Headers/HeaderSimple';



















const Commandes = (props) => {


	const [render, setrender] = useState(true);
	const fs = require('fs');
	const path = require('path');
	const appDir = path.dirname(require.main.filename);
	const p = path.join(appDir,'./', 'data', 'transport.json');

	




	const [commande, setCommande] = useState([]);
	const [transporteur, setTransporteur] = useState([]);
	const [affectation, setaffectation] = useState({
		commande: "",
		chauffeur: ""
	  });


	  const handleChange1 = (e) => {
		affectation.chauffeur=e.target.value;

	};
	const handleChange2 = (e) => {
		affectation.commande=e.target.value;

	};










	useEffect(() => {
		commandesFetch();
		transporteursFetch();
		setrender(true);
	});
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
	const transporteursFetch = async (event) => {
		try {
			const response = await fetch('http://localhost:3001/transporteurs', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const responseData = await response.json();
			setTransporteur(responseData);
		} catch (error) {
			alert(error.message || 'Something went wrong!');
		}
	};



	
	const addAffectationFetch = (event) => {
		event.preventDefault();
		const aff = { chauffeur: affectation.chauffeur, commande: affectation.commande};
		axios.post('http://localhost:3001/affectation', aff).then(setrender(false));
	};





	return (
		<>


		
			
			<Header />
			{/* Page content */}




































































			<Container className="mt--7" fluid>
				<Row>
					<Col sm="4">
						<Card body>
							<CardTitle tag="h5">Gerer le transport </CardTitle>
							<CardText>
								<Form>
									<Row>
										<Col md="12">
											<FormGroup>

							
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md="6">
											<FormGroup>
												<Label>Transporteur</Label>
												<InputGroup className="mb-4">
												<Input
									id="exampleFormControlInput1"
									type="select"
									name="categorie"

									onChange={handleChange1}
									>
									{transporteur.map((transporteur) => {
									return <option value={transporteur.username}>{transporteur.username}</option>;
									})}
									</Input>
												</InputGroup>
											</FormGroup>
										</Col>
										<Col md="6">
											<FormGroup>
												<Label>Commande</Label>
												<InputGroup className="mb-4">
												<Input
									id="exampleFormControlInput1"
									type="select"
									name="categorie"
									defaultValue={null}
									onClick={handleChange2}
									>
									{commande.map((commande) => {
									return <option value={commande._id}>{commande._id}</option>;
									})}
									</Input>
												</InputGroup>
											</FormGroup>
										</Col>
									</Row>
								</Form>
							</CardText>
							<Button color="primary" type="submit" onClick={addAffectationFetch} >
								AFFECTER
							</Button>
						</Card>
					</Col>
					<Col sm="8">
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
									{commande.map((com) => {

									return(
										<tr>
										<td>{com._id}</td>
										<td>{com.dateCom.slice(0, 10)}</td>
										<td>{com.etatCom}</td>
										<td>{com.etatPayCom}</td>
										<td>{com.prixHt}</td>
										<td>{com.prixTTC}</td>
										<td>{com.tva}</td>
									

									</tr>
									); 

										
									})}

									</tbody>
								</Table>
							</CardText>
						</Card>
					</Col>
					<Col sm="4"></Col>
					<Col sm="8">
						<Card body>
							<CardText>
								<Form>
									<Row>
										<Col md="12">
											<FormGroup>
												<Label>Total Prix</Label>
												
												<Label>Comment Voulez-Vous payer la Commande ?</Label>
												<Input id="exampleFormControlInput1" type="select" name="payement">
													<option>par chéque</option>
													<option>A la Livraison</option>
												</Input>
											</FormGroup>
										</Col>
									</Row>
								</Form>
							</CardText>
							<Button color="primary">Commander</Button>
						</Card>
					</Col>
				</Row>
			</Container>
























































































































































































































































































































































































































		</>
	);
};

export default Commandes;
