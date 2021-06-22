import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// reactstrap components
import {
	Card,
	CardTitle,
	CardText,
	Row,
	Col,
	Container,
	FormGroup,
	Form,
	Input,
	Table,
	Label,
} from 'reactstrap';

// core components
import Header from '../../shared/components/Headers/Header';


const Medicaments = (props) => {
	const {
		buttonLabel = "modifier",
		className
	} = props;
	const [produit, setProduit] = useState([]);
	const[_id,setId]=useState("60947e1e7c20a216f0f2ad48");
  const [labelleProd, setLabelleProd] = useState(null);
	const [mode, setMode] = useState(null);
	const [dose, setDose] = useState(null);
	const [dci, setDci] = useState(null);
	const [prixUnit, setPrixUnit] = useState(0);
	const [render, setrender] = useState(true);
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);

	const handlelabelleProdChange = (e) => {
		setLabelleProd(e.target.value);
	};
	const handlemodeChange = (e) => {
		setMode(e.target.value);
	};
	const handledoseChange = (e) => {
		setDose(e.target.value);
	};
	const handledciChange = (e) => {
		setDci(e.target.value);
	};
	const handleprixUnitChange = (e) => {
		setPrixUnit(e.target.value);
	};
	useEffect(() => {

	

		produitFetch();
		setrender(true);
	}, [render]);




  /*const afficherun=async ()=>{
	 await axios.get('http://localhost:3001/produits/' + _id) 
	.then(res => { 
	 setIdProd(res.data.idProd); 
	 setLabelleProd(res.data.labelleProd); 
	 setMode(res.data.mode); 
	 setDose(res.data.dose);
	 setDci(res.data.dci);
	 setPrixUnit(res.data.prixUnit);})
     .catch((error) => { 
    console.log(error);

   });
}*/

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
	const updateHandler=async(_id,labelleProd,mode,dose,dci,prixUnit)=>{
	    const produit={
			
	    _id:_id,
		labelleProd: labelleProd,
		mode: mode,
		dose: dose,
		dci: dci,
		prixUnit:prixUnit
		}
		await axios.put('http://localhost:3001/produits/' + _id , produit).then();
	};
	const editProduit = (event) => {
		event.preventDefault();

		updateHandler(_id,labelleProd,mode,dose,dci,prixUnit);
	}
	

	const deleteHandler = async (_id) => {


		await axios.delete('http://localhost:3001/produits/' + _id).then(setrender(false));
	};



	const delProduit = (_id) => {
		deleteHandler(_id);
	}



	const addProduct = async (event) => {
		event.preventDefault();


		const article = {
		
			labelleProd: labelleProd,
			mode: mode,
			dose: dose,
			dci: dci,
			prixUnit: prixUnit
		};

		await axios.post('http://localhost:3001/ajoutproduit', article).then(setrender(false));
	};
	console.log(produit);


	return (
		<>
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row>
					<Col sm="4">
						<Card body>
							<CardTitle tag="h5">Ajouter un Produit</CardTitle>
							<CardText>
								<Form>
								
											<FormGroup>
												<Label >Labelle</Label>
												<Input type="text" name="labelleProd" id="labelleProd" placeholder="labelleProduit" defaultValue={labelleProd}
													onChange={handlelabelleProdChange} />
											</FormGroup>
									
									<FormGroup>
										<Label>Mode</Label>
										<Input type="text" name="mode" id="mode" placeholder=" injection ou sirop.." defaultValue={mode}
											onChange={handlemodeChange} />
									</FormGroup>
									<FormGroup>
										<Label>Dose</Label>
										<Input type="text" name="dose" id="dose" placeholder="dose" defaultValue={dose}
											onChange={handledoseChange} />
									</FormGroup>
									<Row form>
										<Col md={6}>
											<FormGroup>
												<Label>DCI</Label>
												<Input type="text" name="dci" id="dci" placeholder="dci" defaultValue={dci}
													onChange={handledciChange} />
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label>Prix</Label>
												<Input type="text" name="prixUnit" id="prixUnit" placeholder="prixUnit" defaultValue={prixUnit}
													onChange={handleprixUnitChange} />
											</FormGroup>
										</Col>
									</Row>

								</Form>
							</CardText>

							<Button color="primary" type="submit" onClick={addProduct} >
								AJOUTER
							</Button>
						</Card>
					</Col>
					<Col sm="8">
						<Card body>
							<CardTitle tag="h5"> Liste des Médicaments </CardTitle>
							<CardText>
								<Table className="align-items-center table-flush" responsive>
									<thead className="thead-light">
										<tr>
											<th scope="col">Labelle </th>
											<th scope="col">Mode</th>
											<th scope="col">Prix Unitaire</th>
											<th scope="col">Action</th>


										</tr>
									</thead>
									<tbody>
										{produit.map((prod) => {
											return (


												<tr key={prod._id}>
													<td >{prod.labelleProd}</td>
													<td>{prod.mode}</td>
													<td >{prod.prixUnit}</td>


													<td>


														<Button color="primary" onClick={toggle}>{buttonLabel}</Button>
														<Modal isOpen={modal} toggle={toggle} className={className}>
															<ModalHeader toggle={toggle}>Modifier Produit</ModalHeader>
															<ModalBody>
																<Form>
																	<Row form>
																	
																		<Col md={6}>
																			<FormGroup>
																				<Label >Labelle</Label>
																				<Input type="text" name="labelleProd" id="labelleProd" placeholder="labelleProduit" defaultValue={prod.labelleProd}
																					onChange={handlelabelleProdChange} />
																			</FormGroup>
																		</Col>
																	</Row>
																	<FormGroup>
																		<Label>Mode</Label>
																		<Input type="text" name="mode" id="mode" placeholder=" injection ou sirop ..." defaultValue={prod.mode}
																			onChange={handlemodeChange} />
																	</FormGroup>
																	<FormGroup>
																		<Label>Dose</Label>
																		<Input type="text" name="dose" id="dose" placeholder="dose" defaultValue={prod.dose}
																			onChange={handledoseChange} />
																	</FormGroup>
																	<Row form>
																		<Col md={6}>
																			<FormGroup>
																				<Label>DCI</Label>
																				<Input type="text" name="dci" id="dci" placeholder="dci" defaultValue={prod.dci}
																					onChange={handledciChange} />
																			</FormGroup>
																		</Col>
																		<Col md={4}>
																			<FormGroup>
																				<Label>Prix</Label>
																				<Input type="text" name="prixUnit" id="prixUnit" placeholder="prixUnit" defaultValue={prod.prixUnit}
																					onChange={handleprixUnitChange} />
																			</FormGroup>
																		</Col>
																	</Row>

																</Form>
															</ModalBody>
															<ModalFooter>
																<Button color="primary" onClick={editProduit}>modifier</Button>
																<Button color="secondary" onClick={toggle}>Cancel</Button>
															</ModalFooter>
														</Modal>

														<Button outline color="danger" onClick={() => { delProduit(prod._id) }} >
															supprimer
															</Button>
													</td>
												</tr>);
										})}



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

export default Medicaments;
