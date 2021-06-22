import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// reactstrap components
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
    CardTitle,
	CardText,
    Col,
	FormGroup,
	Form,
	Input,
	Label
} from 'reactstrap';
// core components
import Header from '../../shared/components/Headers/Header';

const Depots = (props) => {
	const {
		buttonLabel = "modifier",
		className
	} = props;
	const [depot, setDepot] = useState([]);
	const[_id,setId]=useState("60947e1e7c20a216f0f2ad48");
	const [name, setName] = useState(null);
	const [adress, setAdress] = useState(null);
	const [location, setLocation] = useState(null);
    const [render, setrender] = useState(true);
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);
	const handlenamedepotChange = (e) => {
		setName(e.target.value);
	};
	const handleadressChange = (e) => {
		setAdress(e.target.value);
	};
	const handlelocationChange = (e) => {
		setLocation(e.target.value);
	};
	
	
	useEffect(() => {
		depotsFetch();
		setrender(true);
	}, [render]);
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
	const updateHandler=async(_id,name,adress,location)=>{
	    const depot={
		_id:_id,	
		name: name,
		adress: adress,
		location: location	
		}
		await axios.put('http://localhost:3001/depots/' + _id , depot).then();
	};
	const editDepot= (event) => {
		event.preventDefault();

		updateHandler(name,adress,location);
	}
	const deleteHandler = async (_id) => {


		await axios.delete('http://localhost:3001/depots/' + _id).then(setrender(false));
	};



	const delDepot = (_id) => {
		deleteHandler(_id);
	}
	const addDepot = async (event) => {
		event.preventDefault();


		const Depot = {
		name: name,
		adress: adress,
		location: location,
		};

		await axios.post('http://localhost:3001/depots', Depot).then(setrender(false));
	};
	return (
		<>
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row>
					<Col sm="4">
						<Card body>
							<CardTitle tag="h5">Ajouter un depot</CardTitle>
							<CardText>
								<Form>
								
										
									
											<FormGroup>
												<Label > Dépot</Label>
												<Input type="text" name="name" id="name" placeholder="nom depot" defaultValue={name}
													onChange={ handlenamedepotChange} />
											</FormGroup>
									
								
									<FormGroup>
										<Label>Adresse</Label>
										<Input type="text" name="adresse" id="adresse" placeholder=" adresse" defaultValue={adress}
											onChange={handleadressChange} />
									</FormGroup>
									<FormGroup>
										<Label>Location</Label>
										<Input type="text" name="location" id="location" placeholder="location" defaultValue={location}
											onChange={handlelocationChange} />
									</FormGroup>
									
											
										
								</Form>
							</CardText>

							<Button color="primary" type="submit" onClick={addDepot} >
								AJOUTER
							</Button>
						</Card>
					</Col>
					<Col sm="8">
						<Card body>
							<CardTitle tag="h5"> Liste des Dépots </CardTitle>
							<CardText>
								<Table className="align-items-center table-flush" responsive>
									<thead className="thead-light">
										<tr>
											<th scope="col">Nom </th>
											<th scope="col">Ville</th>
											<th scope="col">Location</th>
											<th scope="col">Action</th>


										</tr>
									</thead>
									<tbody>
										{depot.map((d) => {
											return (


												<tr >
													<td >{d.name}</td>
													<td>{d.adress}</td>
													<td >{d.location}</td>


													<td>


														<Button color="primary" onClick={toggle}>{buttonLabel}</Button>
														<Modal isOpen={modal} toggle={toggle} className={className}>
															<ModalHeader toggle={toggle}>Modifier depot</ModalHeader>
															<ModalBody>
															<Form>
									
											<FormGroup>
												<Label > Dépot</Label>
												<Input type="text" name="name" id="name" placeholder="nom depot" defaultValue={name}
													onChange={ handlenamedepotChange} />
											</FormGroup>
										
									<FormGroup>
										<Label>Adresse</Label>
										<Input type="text" name="adresse" id="adresse" placeholder=" adresse" defaultValue={adress}
											onChange={handleadressChange} />
									</FormGroup>
									<FormGroup>
										<Label>Location</Label>
										<Input type="text" name="location" id="location" placeholder="location" defaultValue={location}
											onChange={handlelocationChange} />
									</FormGroup>
									
											
								</Form>
																
															</ModalBody>
															<ModalFooter>
																<Button color="primary" onClick={editDepot} >modifier</Button>
																<Button color="secondary" onClick={toggle}>Cancel</Button>
															</ModalFooter>
														</Modal>

														<Button outline color="danger" onClick={() => { delDepot(d._id) }} >
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

export default Depots;
