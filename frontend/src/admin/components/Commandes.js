import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
import Header from '../../shared/components/Headers/Header.js';

const Commandes = () => {
	

	const [commandes, setCommandes] = useState([]);
    const [render, setrender] = useState(true);

    useEffect(() => {
        fetchCommandes();
    }, [render]);
    
    const fetchCommandes = () => {
        axios.get('http://localhost:3001/commandes')
        .then(response => {
            setCommandes(response.data)
            console.log(response.data)
            setrender(false)
        })
    } 

	
	return (
		<>
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
            {/* Table */}
            <Row>
                <div className="col">
                    <Card className="shadow">
                        <CardHeader className="border-0">
                            <h3 className="mb-0">Liste de Commmandes</h3>
                        </CardHeader>
                        <Table className="align-items-center table-flush" responsive>
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Prix Net</th>
                                    <th scope="col">Mode Payement</th>
                                    <th scope="col">Etat de la Livraison</th>
                                    <th scope="col" />
                                </tr>
                            </thead>
                            <tbody>
								
                                { commandes.map(commande => {
									if(commande.etatCom ==="livreé"){
                                    return (<tr>
                                        <td>{commande.createdAt.split('T')[0]}</td>
                                        <td> {commande.prixTTC} </td>
                                        <td> {commande.etatPayCom} </td>
                                        <td>{commande.etatCom}</td>
                                    </tr>);
									}
                                }) }
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

export default Commandes;
