import React, { Component } from 'react';
import './home.css';
import axios from 'axios';
// import { withRouter } from "react-router-dom";
import MovieService from "../../services/movieService";
import MovieMedia from "../../components/movieMedia";

import { 
  Card,
  CardBody,
  Button,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Label,
  Input,
  Form,
  FormGroup
 } from 'reactstrap';


class Home extends Component {

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

  publish() {
    MovieService.findByTitle({title: this.state.movieTitle, year: this.state.movieYear})
      .then(response => {
        console.log(response.data.Search);
        this.setState({
          movieList: response.data.Search
        });
        // setTutorial({
        //   id: response.data.id,
        //   title: response.data.title,
        //   description: response.data.description,
        //   published: response.data.published
        // });
        // setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() { 
    return (
      <div className="Home">
        <header className="Home-header">
          {/* <Button onClick={() => this.createOrder(1,1)}>Abrir Comanda</Button> */}
          <h3>Movie Search</h3>
          <Row>
            <Col sm="12">
              <Card body inverse style={{ backgroundColor: 'white' }}>
                <CardBody className="Card-body">
                  <Form mt-3>
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
                  </Form>
                </CardBody>
              </Card>
          </Col>
        </Row>

        <Row>
          <div className="col-md-12">
            <h4>Tutorials List</h4>

            <ul className="list-group">
              {console.log(this.state.movieList)}
              {this.state.movieList &&
                this.state.movieList.map((movie, index) => (
                //   <li
                //     className={
                //       "list-group-item " + (index === currentIndex ? "active" : "")
                //     }
                //     onClick={() => setActiveTutorial(tutorial, index)}
                //     key={index}
                //   >
                //     {tutorial.title}
                //   </li>
                  // <li>
                    <MovieMedia/>
                  // </li>
                ))}

            </ul>
          </div>
        </Row>
        </header>
      </div>
    );
  }
}

export { Home };