import React from 'react';

// reactstrap components
import {
	Badge,
	Card,
	CardHeader,
	CardFooter,
    Pagination,
	PaginationItem,
	PaginationLink,
	Table,
	Container,
	Row,

} from 'reactstrap';

// core components
import HeaderGrossiste from '../../shared/components/Headers/HeaderGrossiste';


const Historique = () => {
    return (
        <>
        <HeaderGrossiste/>
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
                                    <th scope="col">Reference de la Commande </th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Prix Net</th>
                                    <th scope="col">Mode Payement</th>
                                    <th scope="col">Etat de la Livraison</th>
                                    <th scope="col">Etat de la Payement</th>
                                    <th scope="col" />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#123456789025d</td> 
                                    <td>3/05/2021</td>
                                    <td> 450.215D </td>
                                    <td>Par Chéque </td>
                                    <td>en cours</td>
                                    <td >en cours</td>
                                </tr> 
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
}

export default Historique;
