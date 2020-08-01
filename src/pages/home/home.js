import React, { Component } from 'react';
import './home.css';
// import { history } from "react-router-dom";
// import history from '../../history';
import MovieService from "../../services/movieService";
import MovieMedia from "../../components/movieMedia";


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

  handleMovieClick(movie) {
    // let history = useHistory();
    console.log(movie);
    // context.router.history.push('/my-new-location')
    this.props.history.push('/movieInfo');
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
      <div className="Home">
        <header className="Home-header">
          {/* <Button onClick={() => this.createOrder(1,1)}>Abrir Comanda</Button> */}
          <h3>Movie Search</h3>
          <Row>
            <Col sm="12">
              <Card body inverse style={{ backgroundColor: 'white' }}>
                <CardBody className="Card-body">
                  <Form>
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
            <br></br>
            <h4>Search Result: </h4>
            {/* {!this.state.movieList.length} */}
            <ul className="list-group">
              {this.state.movieList &&
                this.state.movieList.map((movie) => (
                    <MovieMedia movie={movie} onClick={() => this.handleMovieClick(movie)}/>
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