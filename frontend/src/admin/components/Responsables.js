
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
import Header from '../../shared/components/Headers/Header.js';

const Responsables = () => {
  
  const [username, setUsername] = useState();
	const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [responsable, setResponsable] = useState([]);
  const [render, setrender] = useState(true);

	
	const handleuserNameChange = (e) => {
		setUsername(e.target.value);
	};
  const handleuserPasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const handleemailChange = (e) => {
		setEmail(e.target.value);
	};

	useEffect(() => {
	responsableFetch();
		setrender(true);
	}, [render]);
	const responsableFetch = async (event) => {
		try {
			const response = await fetch('http://localhost:3001/responsables', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			
			const responseData = await response.json();
			
      setResponsable(responseData);
		} catch (error) {
			alert(error.message || 'Something went wrong!');
		}
	};
  const deleteHandler = async (_id) => {
    await axios.delete('http://localhost:3001/responsables/' + _id).then(setrender(false));
	};



	const delResponsable = (_id) => {
		deleteHandler(_id);
	}
  
	const addResponsable = async (event) => {
		event.preventDefault();


		const article = {
			username: username,
			email: email,
      password: password,
		};

		await axios.post('http://localhost:3001/auth/signup', article).then(setrender(false));
	};
  return (
    <>
    
    <Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row>
					<Col sm="4">
						<Card body>
							<CardTitle tag="h5">Ajouter un Responsable</CardTitle>
							<CardText>
								<Form>
								
											<FormGroup>
												<Label >Username</Label>
												<Input type="text" name="username" id="username" placeholder="username" defaultValue={username}
													onChange={handleuserNameChange} />
											</FormGroup>
									
									<FormGroup>
										<Label>Email</Label>
										<Input type="text" name="email" id="email" placeholder=" email" defaultValue={email}
											onChange={handleemailChange} />
									</FormGroup>
									<FormGroup>
										<Label>Password</Label>
										<Input type="text" name="password" id="password" placeholder="password" defaultValue={password}
											onChange={handleuserPasswordChange} />
									</FormGroup>
									

								</Form>
							</CardText>

							<Button color="primary" type="submit" onClick={addResponsable} >
								AJOUTER
							</Button>
						</Card>
					</Col>
					<Col sm="8">
						<Card body>
							<CardTitle tag="h5"> Liste des Responsables </CardTitle>
							<CardText>
								<Table className="align-items-center table-flush" responsive>
									<thead className="thead-light">
										<tr>
											<th scope="col">Username </th>
											<th scope="col">Email</th>
											<th scope="col"> Password</th>
										


										</tr>
									</thead>
									<tbody>
										{responsable.map((r) => {
											return (


												<tr >
													<td >{r.username}</td>
													<td>{r.email}</td>
													<td >{r.password}</td>


													<td>


													
														<Button outline color="danger" onClick={() => {delResponsable(r._id)}} >
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

export default Responsables;
