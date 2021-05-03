import React from 'react';
// reactstrap components
import { Card, Button, CardTitle, CardText, Row, Col,Container,FormGroup,
    Form,
    Input,
    InputGroup,
    Table,

  } from 'reactstrap';
// core components
import HeaderGrossiste from '../../shared/components/Headers/HeaderGrossiste';

const NouvelleCommande = (props) => {
    return (
        <>
        <HeaderGrossiste />
        {/* Page content */}
        <Container className="mt--7" fluid>
        <Row>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">Passer une Commande </CardTitle>
            <CardText>
            <Form>
           <Row>
            <Col md="12">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1" type="select" name="categorie" >
                  <option >Sélectionner une Catégorie</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
               </FormGroup>
            </Col>
         </Row>
          <Row>
            <Col md="6">
              <FormGroup>
                <InputGroup className="mb-4">
                <Input type="select" name="produit" >
                  <option >Sélectionner un Produit</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  </Input>
                
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <InputGroup className="mb-4">
                  <Input placeholder="Quantité" type="number" />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            
          <Col md="12">
              <FormGroup >
              <Input type="select" name="depot" >
                  <option >Sélectionner un Dépot</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  </Input>
               
              </FormGroup>
            </Col>
          </Row>
        </Form>
        </CardText>
            <Button color="primary">AJOUTER</Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">carte d'achat</CardTitle>
            <CardText> 
                        <Table className="align-items-center table-flush" responsive>
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Produit </th>
                                    <th scope="col">Ref</th>
                                    <th scope="col">Quantité</th>
                                    <th scope="col">Prix</th>
                                    <th scope="col">Somme</th>
                                    <th scope="col">Supprimer</th>
                                    <th scope="col" />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>panadol</td> 
                                    <td>#12456389</td>
                                    <td> 25</td>
                                    <td>6500 DT</td>
                                    <td>120.512 DT</td>
                                    <td><Button outline color="danger">supprimer</Button></td>
                                </tr> 
                                <tr>
                                    <td>panadol</td> 
                                    <td>#12456389</td>
                                    <td> 25</td>
                                    <td>6500 DT</td>
                                    <td>120.512 DT</td>
                                    <td><Button outline color="danger">supprimer</Button></td>
                                </tr> 
                                <tr>
                                    <td>panadol</td> 
                                    <td>#12456389</td>
                                    <td> 25</td>
                                    <td>6500 DT</td>
                                    <td>120.512 DT</td>
                                    <td><Button outline color="danger">supprimer</Button></td>
                                </tr> 
                           </tbody>
                        </Table>
                      </CardText>
          </Card>
        </Col>
        <Col sm="6"></Col>
        <Col sm="6">
        <Card body>
          <CardText> 
            <Form>
           <Row>
            <Col md="12">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1" type="select" name="payement" >
                  <option >Comment Voulez-Vous payer la Commande ?</option>
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
}

export default NouvelleCommande;
