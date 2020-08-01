import React, { Component } from 'react';
import './movieInfo.css';
import MovieService from "../../services/movieService";
import {withRouter} from 'react-router';

import { 
  Card,
  CardBody,
  Row,
  Col
 } from 'reactstrap';


 export class MovieInfo extends Component {

  constructor() {
    super();
    this.state = {
      movie: {}
    };
      
    this.getMovieInfo = this.getMovieInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.location.imdbID) {
      this.getMovieInfo(this.props.location.imdbID);
    }
   }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  getMovieInfo(id) {
    MovieService.findById(id)
      .then(response => {
        console.log('Response', response.data);
        this.setState({
          movie: response.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() { 
    return (
      <div className="container">
          {this.state.movie &&
            <Row>
              <Col sm="3">
                <Card body inverse style={{ backgroundColor: 'white' }}>
                  <CardBody className="Card-body">
                    <img  alt="movie poster" className="photo" src={ this.state.movie.Poster }/>
                  </CardBody>
                </Card>
              </Col>

              <Col sm="8">
                <Row>
                  <Card body inverse style={{ backgroundColor: 'white' }}>
                    <CardBody className="Card-body">
                      <Col sm={12}>
                        <Row>
                          <Col sm={12}>
                            <h1> { this.state.movie.Title } </h1>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={6}>
                            { this.state.movie.Genre }
                          </Col>
                          <Col sm={6}>
                            { this.state.movie.Year }
                          </Col>
                        </Row>
                      </Col>
                    </CardBody>
                  </Card>
                </Row>
                
                <br></br>
                
                <Row>
                  <Card body inverse style={{ backgroundColor: 'white' }}>
                    <CardBody className="Card-body">
                      <Col sm={12}>
                        <Row>
                          <Col sm={6}>
                            <h1> Information </h1>
                          </Col>
                        </Row>
                        
                        <Row>
                          <Col sm={12}>
                            <p className="text-muted">{ this.state.movie.Plot }</p>
                          </Col>
                        </Row>

                        <Row>
                          <Col sm={6}>
                            <label>Director: </label>
                            <p className="text-muted">{ this.state.movie.Director }</p>
                          </Col>
                          <Col sm={6}>
                            <label>Actors: </label>
                            <p className="text-muted">{ this.state.movie.Actors }</p>
                          </Col>
                        </Row>

                        <Row>
                          <Col sm={6}>
                            <label>Awards: </label>
                            <p className="text-muted">{ this.state.movie.Awards }</p>
                          </Col>
                          <Col sm={6}>
                            <label>BoxOffice: </label>
                            <p className="text-muted">{ this.state.movie.BoxOffice }</p>
                          </Col>
                        </Row>

                        <Row>
                          <Col sm={6}>
                            <label>Country: </label>
                            <p className="text-muted">{ this.state.movie.Country }</p>
                          </Col>
                          <Col sm={6}>
                            <label>DVD: </label>
                            <p className="text-muted">{ this.state.movie.DVD }</p>
                          </Col>
                        </Row>

                        <Row>
                          <Col sm={6}>
                            <label>Language: </label>
                            <p className="text-muted">{ this.state.movie.Language }</p>
                          </Col>
                          <Col sm={6}>
                            <label>Metascore: </label>
                            <p className="text-muted">{ this.state.movie.Metascore }</p>
                          </Col>
                        </Row>
                        
                        <Row>
                          <Col sm={6}>
                            <label>Production: </label>
                            <p className="text-muted">{ this.state.movie.Production }</p>
                          </Col>
                          <Col sm={6}>
                            <label>Rated: </label>
                            <p className="text-muted">{ this.state.movie.Rated }</p>
                          </Col>
                        </Row>

                        <Row>
                          <Col sm={6}>
                            <label>Released: </label>
                            <p className="text-muted">{ this.state.movie.Released }</p>
                          </Col>
                          <Col sm={6}>
                            <label>Runtime: </label>
                            <p className="text-muted">{ this.state.movie.Runtime }</p>
                          </Col>
                        </Row>

                        <Row>
                          <Col sm={6}>
                            <label>Writer: </label>
                            <p className="text-muted">{ this.state.movie.Writer }</p>
                          </Col>
                          <Col sm={6}>
                            <label>Year: </label>
                            <p className="text-muted">{ this.state.movie.Year }</p>
                          </Col>
                        </Row>

                        <Row>
                          <Col sm={6}>
                            <label>imdbRating: </label>
                            <p className="text-muted">{ this.state.movie.imdbRating }</p>
                          </Col>
                          <Col sm={6}>
                            <label>imdbVotes: </label>
                            <p className="text-muted">{ this.state.movie.imdbVotes }</p>
                          </Col>
                        </Row>

                        <Row>
                          <Col sm={12}>
                            <label>Website: </label>
                            <p className="text-muted">{ this.state.movie.Website }</p>
                          </Col>
                        </Row>

                      </Col>
                    </CardBody>
                  </Card>
                </Row>
            </Col>            
          </Row>
        }
      </div>
    );
  }
}

export default withRouter(MovieInfo);