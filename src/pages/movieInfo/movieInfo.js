import React, { Component } from 'react';
import './movieInfo.css';
// import { history } from "react-router-dom";
import {withRouter} from 'react-router';
import history from '../../history';
import MovieService from "../../services/movieService";

import { 
  Card,
  CardBody,
  Button,
  Row,
  Col,
  Label,
  Input,
  Form,
  FormGroup
 } from 'reactstrap';


 export class MovieInfo extends Component {

  constructor() {
    super();
    this.state = {
      movieTitle: "",
      movieYear: "",
      movieList: [],
    };
      
    this.publish = this.publish.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  handleMovieClick(movie) {
    // let history = useHistory();
    console.log(movie);
    // context.router.history.push('/my-new-location')
    history.push('/movieInfo');
  }

  publish() {
    MovieService.findByTitle({title: this.state.movieTitle, year: this.state.movieYear})
      .then(response => {
        this.setState({
          movieList: response.data.Search
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() { 
    return (
      <div className="container">
        <header className="container-header">
          {/* <Button onClick={() => this.createOrder(1,1)}>Abrir Comanda</Button> */}
          <h3>Movie Info</h3>
          <Row>
            <Col sm="12">
              <Card body inverse style={{ backgroundColor: 'white' }}>
                <CardBody className="Card-body">
                  {/* <Form>
                    <FormGroup row>
                      <Col sm={6}>
                        <Label for="movieTitle">Title: </Label>
                      </Col>
                      <Col sm={6}>
                        <Input 
                          type="text"
                          name="movieTitle"
                          id="movieTitle"
                          placeholder="Insert the movie title here"
                          value={ this.state.movieTitle }
                          onChange={ this.handleChange }
                          />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={6}>
                        <Label for="movieYear">Year:</Label>
                      </Col>
                      <Col sm={6}>
                        <Input
                          type="numer"
                          name="movieYear"
                          id="movieYear"
                          placeholder="Insert the movie year here"
                          value={ this.state.movieYear }
                          onChange={ this.handleChange }
                          />
                      </Col>
                    </FormGroup>
                    <Button onClick={ this.publish }>Submit</Button>
                  </Form> */}
                </CardBody>
              </Card>
          </Col>
        </Row>
        </header>
      </div>
    );
  }
}

export default withRouter(MovieInfo);