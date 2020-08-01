import React, { Component } from 'react';
import './movieInfo.css';
import { Table, Card, CardBody, Button, Row, Col, InputGroup, InputGroupAddon, Label, Input,  } from 'reactstrap';

class MovieInfo extends Component {

  render() { 
    return (
      <div className="container">
        <header className="container-header">
        <Col sm="6">
          <Card body inverse style={{ backgroundColor: 'white', borderColor: '#333' }}>
            <CardBody>
              <Label>Pesquisa</Label>
              <InputGroup>
                <InputGroupAddon addonType="append"><Button>I'm a button</Button></InputGroupAddon>
                <Input />
              </InputGroup>
              <Button onClick={() => this.handleSearch()}>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Table hover dark>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
        </header>
      </div>
    );
  }
}

export { MovieInfo };