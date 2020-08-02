import React, { Component } from 'react';
import './home.css';
import MovieService from "../../services/movieService";
import MovieMedia from "../../components/movieMedia";
import {connect} from 'react-redux';
import { showLoader, hideLoader } from "../../actions/application";

import { 
  Card,
  CardBody,
  Button,
  Row,
  Col,
  Label,
  Input,
  Form,
  FormGroup,
  FormFeedback
 } from 'reactstrap';


 export class Home extends Component {

  constructor() {
    super();
    this.state = {
      movieTitle: "",
      movieYear: "",
      movieList: [],
      invalidField: false,
    };
      
    this.publish = this.publish.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
    if (target.name === 'movieTitle') {
      this.setState({
        invalidField: false
      });
    }
  }

  handleMovieClick(movie) {
    this.props.history.push({
      pathname: '/movieInfo',
      imdbID: movie.imdbID,
    });
  }

  publish() {
    if (this.state.movieTitle.length > 0) {
      this.props.dispatch( showLoader());
  
      MovieService.findByTitle({title: this.state.movieTitle, year: this.state.movieYear})
        .then(response => {
          this.setState({
            movieList: response.data.Search
          });
          this.props.dispatch( hideLoader());
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      this.setState({
        invalidField: true
      });
    }
  }

  render() { 
    return (
      <div className="Home">
        <header className="Home-header">
          <h3>Movie Search</h3>
          <Row>
            <Col sm="12">
              <Card body inverse style={{ backgroundColor: 'white' }}>
                <CardBody className="Card-body">
                  <Form>
                    <FormGroup>
                      <Row>
                        <Col sm={2}>
                          <Label for="movieTitle">Title: </Label>
                        </Col>
                        <Col sm={10}>
                          <Input 
                            type="text"
                            name="movieTitle"
                            id="movieTitle"
                            placeholder="Insert the movie title here"
                            value={ this.state.movieTitle }
                            onChange={ this.handleChange }
                            invalid={this.state.invalidField}
                            />
                          <FormFeedback>Required Field!</FormFeedback>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Col sm={2}>
                          <Label for="movieYear">Year:</Label>
                        </Col>
                        <Col sm={10}>
                          <Input
                            type="numer"
                            name="movieYear"
                            id="movieYear"
                            placeholder="Insert the movie year here"
                            value={ this.state.movieYear }
                            onChange={ this.handleChange }
                            />
                        </Col>
                      </Row>
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
            {( !this.state.movieList || typeof this.state.movieList === 'undefined' || this.state.movieList.length === 0 ) && <span>No results to show</span>}
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

const mapStateToProps = state =>({})
export default connect(mapStateToProps)(Home);