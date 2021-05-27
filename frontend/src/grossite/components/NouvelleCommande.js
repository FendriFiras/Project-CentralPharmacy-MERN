import React, { useEffect, useState } from 'react';
// reactstrap components
import {
	Card,
	Button,
	CardTitle,
	CardText,
	Row,
	Col,
	Container,
	FormGroup,
	Form,
	Input,
	InputGroup,
	Table,
	Label,
} from 'reactstrap';
// core components
import HeaderGrossiste from '../../shared/components/Headers/HeaderGrossiste';

const NouvelleCommande = (props) => {
	const [category, setCategory] = useState([]);
	const [produit, setProduit] = useState([]);
	const [produitJson, setProduitJson] = useState({});
	const [qte, setQte] = useState(0);
	const [selectedCategory, setSelectedCategory] = useState('Paracétamol');

	const handleAddrTypeChange = (e) => {
		setSelectedCategory(e.target.value);
	};

	const handleQteChange = (e) => {
		setQte(e.target.value);
	};

	useEffect(() => {
		categorieFetch();
		produitFetch();
		produitJsonFetch();
	}, []);

	const categorieFetch = async (event) => {
		try {
			const response = await fetch('http://localhost:3001/categorie', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const responseData = await response.json();
			setCategory(responseData);
		} catch (error) {
			alert(error.message || 'Something went wrong!');
		}
	};
	const produitFetch = async (event) => {
		try {
			const response = await fetch('http://localhost:3001/produits', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const responseData = await response.json();
			setProduit(responseData);
		} catch (error) {
			alert(error.message || 'Something went wrong!');
		}
	};

	const produitJsonFetch = async (event) => {
		try {
			const response = await fetch('http://localhost:3001/produit', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const responseData = await response.json();
			setProduitJson(responseData);
		} catch (error) {
			alert(error.message || 'Something went wrong!');
		}
	};

	const addProductFetch = (event) => {
		event.preventDefault();
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', mode: 'no-cors' },
			body: {
				qte: { qte },
			},
		};
		fetch('http://localhost:3001/lcs', requestOptions).then(console.log('hi'));
	};
	return (
		<>
			{console.log(qte)}
			{console.log(produitJson.products)}
			{console.log(selectedCategory)}
			{console.log(produit)}
			{console.log(category)}
			<HeaderGrossiste />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row>
					<Col sm="4">
						<Card body>
							<CardTitle tag="h5">Passer une Commande </CardTitle>
							<CardText>
								<Form>
									<Row>
										<Col md="12">
											<FormGroup>
												<Label>Categories</Label>
												<Input
													id="exampleFormControlInput1"
													type="select"
													name="categorie"
													defaultValue={selectedCategory}
													onChange={handleAddrTypeChange}
												>
													{category.map((categorie) => {
														return <option value={categorie.name}>{categorie.name}</option>;
													})}
												</Input>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md="6">
											<FormGroup>
												<Label>Produit</Label>
												<InputGroup className="mb-4">
													<Input type="select" name="produit">
														{category.map((categorie) => {
															if (categorie.name == selectedCategory) {
																return categorie.produits.map((idProduit) => {
																	return produit
																		.filter(
																			(produitExemple) =>
																				produitExemple._id == idProduit
																		)
																		.map((filteredPoduit) => (
																			<option>
																				{filteredPoduit.labelleProd}
																			</option>
																		));
																});
															}
														})}
													</Input>
												</InputGroup>
											</FormGroup>
										</Col>
										<Col md="6">
											<FormGroup>
												<Label>Quantité</Label>
												<InputGroup className="mb-4">
													<Input
														placeholder="Quantité"
														type="number"
														defaultValue={qte}
														onChange={handleQteChange}
													/>
												</InputGroup>
											</FormGroup>
										</Col>
									</Row>
								</Form>
							</CardText>
							<Button color="primary" type="submit" onClick={addProductFetch}>
								AJOUTER
							</Button>
						</Card>
					</Col>
					<Col sm="8">
						<Card body>
							<CardTitle tag="h5">carte d'achat</CardTitle>
							<CardText>
								<Table className="align-items-center table-flush" responsive>
									<thead className="thead-light">
										<tr>
											<th scope="col">IdProduit </th>
											<th scope="col">Quantité</th>
											<th scope="col">Price</th>

											<th scope="col">Supprimer</th>
										</tr>
									</thead>
									<tbody>
										{produitJson.products != undefined ? (
											produitJson.products.map((produit) => {
												return (
													<tr>
														<td>{produit.idProd}</td>
														<td>{produit.qte}</td>
														<td>{produit.prodPrice}</td>

														<td>
															<Button outline color="danger">
																supprimer
															</Button>
														</td>
													</tr>
												);
											})
										) : (
											<tr>
												<td></td>
												<td></td>
												<td></td>

												<td>
													<Button outline color="danger">
														supprimer
													</Button>
												</td>
											</tr>
										)}
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
												<h1>{produitJson.totalPrice}</h1>
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

export default NouvelleCommande;
